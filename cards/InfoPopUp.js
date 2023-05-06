import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { Entypo } from '@expo/vector-icons';


export default function InfoPopUp({ setInfo }) {


  const infoFunctionX = () => {
    setInfo(false);
  }

  return (
    <View className="w-11/12 h-5/6 rounded-xl items-center justify-center bg-green-300">
      

           <View className="flex-coloum w-full mb-2 ">
       <Text className="font-bold text-l mb-2 pl-4 pr-4"><Entypo name="dot-single" size={24} color="#000000"/> 
   Ever been stuck for basic words when you are on holiday or travelling?</Text>
   <Text className="font-bold text-l mb-2 pl-4 pr-4"><Entypo name="dot-single" size={24} color="#000000"/> 
   Ever wanted to impress your friends and family with your basic language skills?</Text>
  <Text className="font-bold text-l mb-2 pl-4 pr-4"><Entypo name="dot-single" size={24} color="#000000"/> 
  Use this website to help you learn the basic words from europes 18 most spoken lanagues exloding englsih</Text>
  <Text className="font-bold text-l mb-2 pl-4 pr-4"><Entypo name="dot-single" size={24} color="#000000"/> 
   There's no need to pull out your phone every time - just learn these top words as you travel.</Text>
      </View> 
      <TouchableOpacity className="p-3 bg-[#fff]" 
    onPress={infoFunctionX}
    ><Text className="text-l text-blue-300 underline">X</Text></TouchableOpacity>

    </View>
  );
}




