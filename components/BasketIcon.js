import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems,selectBasketTotal } from '../features/basket/Basket';
import { useNavigation } from '@react-navigation/native';
const BasketIcon = () => {
  const items= useSelector(selectBasketItems);
  const navigation= useNavigation();
  const basketTotal= useSelector(selectBasketTotal);
  
  if(items.length<1) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={()=> navigation.navigate("Basket")} className="mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-[#00CCBB] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrarabold">${basketTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon