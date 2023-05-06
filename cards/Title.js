import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"

export default function TitleSettings() {

    const navigation = useNavigation();


  return (
 <View className="border-b-2 flex justify-between items-center pb-1 px-2">
    
  <Image className="w-60 h-20" source={require('../assets/Logo.jpg')} />
  
</View> 
  )
}