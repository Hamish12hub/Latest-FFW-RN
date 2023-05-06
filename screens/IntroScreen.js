import { View, Text, Image, TextInput, ScrollView, SafeAreaView, Button, TouchableOpacity, TextField } from 'react-native'
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo } from '@expo/vector-icons';


export default function IntroScreen() {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
 

  async function handleRegister() {
    try {
await AsyncStorage.setItem('IntroScreen', 'Seen');
await AsyncStorage.setItem('Bulgarian', '-1');
await AsyncStorage.setItem('Croatian', '-1');
await AsyncStorage.setItem('Czech', '-1');
await AsyncStorage.setItem('Danish', '-1');
await AsyncStorage.setItem('Dutch', '-1');
await AsyncStorage.setItem('Finnish', '-1');
await AsyncStorage.setItem('French', '0');
await AsyncStorage.setItem('German', '0');
await AsyncStorage.setItem('Greek', '-1');
await AsyncStorage.setItem('Hungarian', '-1');
await AsyncStorage.setItem('Italian', '-1');
await AsyncStorage.setItem('Polish', '-1');
await AsyncStorage.setItem('Portuguese', '-1');
await AsyncStorage.setItem('Romanian', '-1');
await AsyncStorage.setItem('Russian', '-1');
await AsyncStorage.setItem('Spanish', '-1');
await AsyncStorage.setItem('Swedish', '-1');
await AsyncStorage.setItem('Turkish', '-1');

    } catch (error) {
      console.error(error);
    }
  }


  return (
    
    <View className="flex-1 justify-center items-center">
      <View><Text>This is the intro</Text></View>
     
      <View><TouchableOpacity className="bg-green-300 m-4" onPress={ handleRegister}>
        <Text>press for setting name</Text>
        </TouchableOpacity></View> 
      

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




      </View>
  )
}


// Bulgarian
// Croatian
// Czech
// Danish
// Dutch
// Finnish
// French
// German
// Greek
// Hungarian
// Italian
// Polish
// Portuguese
// Romanian
// Russian
// Spanish
// Swedish
// Turkish