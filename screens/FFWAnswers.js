import { View, Text, Image, StyleSheet, TextInput, Button, RefreshControl, Alert, SafeAreaView, Keyboard, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useRef, useLayoutEffect, useEffect, } from 'react'
import { useNavigation } from "@react-navigation/native"
import TitleBack from '../cards/TitleBack';
import { AntDesign } from '@expo/vector-icons'; 
import BulgarianList from '../JsonList/Bulgarian.json'
import CroatianList  from '../JsonList/Croatian.json'
import CzechList from '../JsonList/Czech.json'
import DanishList from '../JsonList/Danish.json'
import DutchList from '../JsonList/Dutch.json'
import FinnishList from '../JsonList/Finnish.json'
import FrenchList from '../JsonList/French.json'
import GermanList from '../JsonList/German.json'
import GreekList from '../JsonList/Greek.json'
import HungarianList from '../JsonList/Hungarian.json'
import ItalianList from '../JsonList/Italian.json'
import PolishList from '../JsonList/Polish.json'
import PortugueseList from '../JsonList/Portuguese.json'
import RomanianList from '../JsonList/Romanian.json'
import RussianList from '../JsonList/Russian.json'
import SpanishList from '../JsonList/Spanish.json'
import SwedishList from '../JsonList/Swedish.json'
import TurkishList from '../JsonList/Turkish.json'

export default function FFWScreen({ route }) {

  const navigation = useNavigation();
  const { language } = route.params;
  let data; 
  switch(language) {
    case 'Bulgarian':data = BulgarianList;break;
    case 'Croatian':data = CroatianList;break;
    case 'Czech':data = CzechList;break;
    case 'Danish':data = DanishList;break;
    case 'Dutch':data = DutchList;break;
    case 'Finnish':data = FinnishList;break;
    case 'French':data = FrenchList;break;
    case 'German':data = GermanList;break;
    case 'Greek':data = GreekList;break;
    case 'Hungarian':data = HungarianList;break;
    case 'Italian':data = ItalianList;break;
    case 'Polish':data = PolishList;break;
    case 'Portuguese':data = PortugueseList;break;
    case 'Romanian':data = RomanianList;break;
    case 'Russian':data = RussianList;break;
    case 'Spanish':data = SpanishList;break;
    case 'Swedish':data = SwedishList;break;
    case 'Turkish':data = TurkishList;break;
  } 


  return (

    <SafeAreaView className="flex-1">
      <TouchableOpacity onPress={navigation.goBack} style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
    <View style={{ padding: 15 }}><AntDesign name="close" size={34} color="black"/></View>
  </TouchableOpacity>
    
    




<View className="w-full h-30 border-b-4 border-t-4 border-black flex flex-row">
      <View className="flex-1 items-center justify-center border-r-2 border-black">
        <Text className="text-black text-xl">English</Text>
      </View>
      <View className="flex-1 items-center justify-center border-l-2 border-black">
        <Text className="text-black text-xl">{language}</Text>
      </View>
    </View>

    <ScrollView className="flex-1">

    <View className="w-full h-30 border-b-2 border-black flex flex-row">
      <View className="flex-1 items-center justify-center border-r-2 border-black">
      {data.map((item) => (
        <Text key={item.id} className="text-xl my-2">
          {item.capital}
        </Text>))}
      </View>
      <View className="flex-1 items-center justify-center border-l-2 border-black">
      {data.map((item) => (
        <Text key={item.id} className="text-xl my-2">
          {item.capital}
        </Text>))}
      </View>
    </View>





    </ScrollView>
    </SafeAreaView>
  );
}



{/* <View className='flex items-center'>

      <Text className='text-2xl font-bold my-4'>Capitals</Text>
      {data.map((item) => (
        <Text key={item.id} className="text-xl my-2'}>
          {item.capital}
        </Text>
      ))}
    </View>*/}


    {/* <View className="flex flex-row h-full w-full bg-blue-200">
<View className="flex-1 bg-green-500"></View> 
      <View className="flex-1 bg-yellow-500" ></View>
    </View> */}