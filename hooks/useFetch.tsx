import axios from "axios";
import { useState, useEffect } from "react";


const useFetch = (endpoint: any, query: any) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: endpoint,
        params: {
            q: 'products',
            page: '1'
        }, headers: {
            'X-RapidAPI-Key': '79408e3cbcmsh46e870c8baf1e1dp1e5b6djsn83a5c04dc91f',
            'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options);
            setData(response.data);
            setIsLoading(false);
        } catch (error: any) {
            setError(error);
            // alert('There is an error');
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchData()
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch }
}

//    query: "Python developer in Texas, USA",
//         page: "1",
//         num_pages: "1",


export default useFetch;




































// import { View, Text } from 'react-native'
// import React, { FC, useEffect, useState } from 'react'
// import { FetchProps, MethodItem, paramsItem } from '@/constants/Types';

// const useFetch: FC<FetchProps> = (url:string, method: MethodItem, params: paramsItem ) => {

//     const axios = require('axios');
    
//     const [data, setData] = useState<any>({})
    
//     async function getProducts () {
//         const options = {
//             method: 'GET',
//             url: 'https://aliexpress-datahub.p.rapidapi.com/item_search',
//             params: {
//                 q: 'iphone 15',
//                 page: '1'
//             }, headers: {
//                 'X-RapidAPI-Key': '79408e3cbcmsh46e870c8baf1e1dp1e5b6djsn83a5c04dc91f',
//                 'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
//             }
//         }; try {
//             const response = await axios.request(options);
//             console.log(response.data);
//             return response.data
//         } catch (error) {
//             console.error(error);
//         }

//     useEffect(() => { 
//         getProducts();
//     },[])

//   return data
// }

// export default useFetch