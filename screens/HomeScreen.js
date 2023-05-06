import { View, Text, Image, TextInput, ScrollView, SafeAreaView,  TouchableOpacity, useWindowDimensions } from 'react-native'
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import Title from '../cards/Title';
import FFWIntro from '../HomePage/FFWIntro';
import CAFIntro from '../HomePage/CAFIntro';
import InfoPopUp from '../cards/InfoPopUp';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })


  const [info, setInfo] = useState(false)
  const handleShowInfo = () => {
    setInfo(true);
  };
  const handleShowInfoX = () => {
    setInfo(false);
  };

const deleteAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
}

const logAllData = async () => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const allData = await AsyncStorage.multiGet(allKeys);
    console.log(allData);
  } catch (error) {
    console.log(error);
  }
}



  

  return (
    
    <SafeAreaView className=" flex-1 bg-[#fff]">

    <Title/>
    
    {info ? (
  <View style={{
    backgroundColor: "gray",
    flex: 100,
    alignItems: 'center', 
    justifyContent: 'center'}}>
  <InfoPopUp setInfo={handleShowInfoX}/>
  </View>): (  null)}

<ScrollView className="flex-1 bg-[#bfbdbd]">
          <FFWIntro setInfo={handleShowInfo}/>
          {/* <TouchableOpacity onPress={deleteAll}><Text>delete all</Text></TouchableOpacity>
          <TouchableOpacity onPress={logAllData}><Text>console log all </Text></TouchableOpacity> */}
          <CAFIntro/>
    </ScrollView>

     </SafeAreaView>
  )
}

// {info ? (
//   <View style={{
//     backgroundColor: "gray",
//     flex: 1,
//     alignItems: 'center', 
//     justifyContent: 'center'}}>
//   <InfoPopUp setInfo={handleShowInfoX}/>
//   </View>
//       ): ( 
//         <ScrollView className="flex-1 bg-[#bfbdbd]">
//           <FFWIntro setInfo={handleShowInfo}/>
          
//           <TouchableOpacity onPress={deleteAll}><Text>delete all</Text></TouchableOpacity>
//           <TouchableOpacity onPress={logAllData}><Text>console log all </Text></TouchableOpacity>

//           <CACIntro/>

//     </ScrollView>
    
//       )}