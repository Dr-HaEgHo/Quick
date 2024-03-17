import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { a } from '@/constants/stylesheet';
import { ArrowCircleDown } from 'iconsax-react-native';
import { CardProps } from '@/constants/Types';
import { useRouter } from 'expo-router';

const HomeCard: FC<CardProps> = ({title, image, route}) => {

    const router = useRouter()

  return (
      <TouchableOpacity onPress={() => router.push(route)} style={a.card} >
          <Image
              source={image}
              style={{
                  width: 40,
                  height: 40
              }}
          />
      <Text style={a.cardTxt} >{title}</Text>
    </TouchableOpacity>
  )
}

export default HomeCard;