import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"

export default function Title() {

    const navigation = useNavigation();

  return (

<View className="border-b-2 flex flex-row items-center py-1 px-2">
  <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
    <View className="pl-2"><AntDesign name="arrowleft" size={34} color="black"/></View>
  </TouchableOpacity>
  <View className="flex-1 flex justify-center items-center">
    <Image className="w-60 h-20" source={require('../assets/Logo.jpg')} />
  </View>
  <View className="w-12" />
</View>



  )
}