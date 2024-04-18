import React, { useContext, useState, useEffect } from 'react'
import  { Vella, VellaProps } from 'vella-pay-react-native'
import { View } from 'react-native'
import { GlobalContext } from '@/context/context.service';

const PaymentForm = () => {

    const [showWidget, setShowWidget] = useState(false);
    const invoiceId = "dfd";
    const { cart, setCart, deleteFromCart } = useContext(GlobalContext)
    const [total, setTotal] = useState(0)
    
    const handleTotal = (data:any) => {
        const prices = data.map((item:any) => item.price)

        for (let i = 0; i < prices.length; i++){
            setTotal(total + parseInt(prices[i]) )
        }
    } 

    useEffect(() => { 
        handleTotal(cart)
    },[cart])
    
  return (
    <View style={{ flex: 1 }}>
      <Vella  
        vellaKey="nill"
        amount={'25000.00'}
        currency={'NGN'}
        billingEmail="example@mail.com"
        billingName="Ugochukwu Ejioku"
        merchantId="ugochukwu"
        reference="PW-1234-3434-5434"
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        autoStart={true}
      />
    </View>
  )
}

export default PaymentForm;