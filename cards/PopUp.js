import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PopUp({ result, currentScore, BestScore, topScore, updateStatePopUp, updateStateCount ,question, Answer, language  }) {
  
  const navigation = useNavigation();

  const refresh = () =>{
  updateStatePopUp(false);
  updateStateCount(0)
}


const goHome = async () => {
  navigation.navigate('Home')
  try {
    await AsyncStorage.setItem(language, topScore.toString());
    console.log('AsyncStorage successfully updated.');
  } catch (error) {
    console.log('Error updating AsyncStorage: ', error);
  }
}

  return (

    <>
{result ? (
  <View style={{ backgroundColor: '#fc2403'  ,justifyContent: 'space-evenly'}} className="w-11/12 h-5/6 p-2 rounded-xl items-center justify-center">
      <View><Text className="text-lg font-bold">you Lost</Text></View>
      <View><Text className="text-lg font-bold">your score was {currentScore} / {topScore}</Text></View>
      <View><Text className="text-lg font-bold">your best score is {BestScore}</Text></View>
      <View><Text className="text-lg font-bold">would you like to play again</Text></View>
      <View><Text className="text-lg font-bold">The correct answer for { question} was {Answer}</Text></View>
      
      <View className="flex-row">
        <TouchableOpacity
          onPress={refresh}
          className="bg-green-500 rounded-xl p-3 mx-3 flex-1 justify-center items-center min-w-100"
        >
          <Text className="text-white font-bold">Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="bg-red-500 rounded-xl p-3 mx-3 flex-1 justify-center items-center min-w-100"
        >
          <Text className="text-white font-bold">No</Text>
        </TouchableOpacity>
      </View>
    </View>
  ): ( 
    <View style={{ backgroundColor:'#C6F6D5' ,justifyContent: 'space-evenly'}} className="w-11/12 h-5/6 p-2 rounded-xl items-center justify-center">
<View><Text className="text-lg font-bold">you won</Text></View>
<View><Text className="text-lg font-bold">your score was {currentScore} / {topScore}</Text></View>
      
      <View className="flex-row">
        <TouchableOpacity
          onPress={goHome}
          className="bg-red-500 rounded-xl p-3 mx-3 flex-1 justify-center items-center min-w-100"
        >
          <Text className="text-white font-bold">Return home</Text>
        </TouchableOpacity>
      </View>
    </View>
    )}
    </>
  );
}

