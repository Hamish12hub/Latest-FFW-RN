import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Langages({langage, TopScore, ImageUri}) {


  const [theColor, setTheColor] = useState('');
  useEffect(() => {
    var percentage = ((score / TopScore) * 100);
if (percentage < 30) {
  setTheColor("rgb(255, 2, 0)");
} else if (percentage < 80) {
  setTheColor("rgb(245, 90, 7)");
} else {
  setTheColor("rgb(0, 255, 2)");
}
    }, [score]);

  const navigation = useNavigation();

  
const [score, setScore] = useState(12)

useEffect(() => {
  const setAsyncStorageValue = async () => {
    const value = await AsyncStorage.getItem(langage);
    setScore(value);
  };
  setAsyncStorageValue();
}, []);

const confirmDeletion = () => {
    Alert.alert(
      'do you want to delet ' + langage,
      '',
      [{text: 'Yes',onPress: handleYes,},
        {text: 'No', style: 'cancel',},],
      { cancelable: false }
    );
}

    const handleYes = async () => {
      try {
        await AsyncStorage.setItem(langage, '-1');
        console.log('AsyncStorage successfully updated.');
      } catch (error) {
        console.log('Error updating AsyncStorage: ', error);
      }
    };


  return (

     <View className="bg-white mr-3 shadow rounded-lg">
      <View className="flex-row justify-between items-center p-2">
  <Text className="font-bold text-xl flex-1">{langage}</Text>
  <TouchableOpacity onPress={confirmDeletion}><Text className="font-bold text-xl flex-1 text-right"><Feather name="trash-2" size={24} color="black"/></Text></TouchableOpacity>
</View>
      <Image source={ImageUri} 
      className="h-32 w-56 rounded-sm ml-2 mr-2 mt-2"/>
      <View  className="px-3 pb-4">
<View className="flex-row justify-between items-center p-2">
  <Text className="font-bold text-xl flex-1 text-left">{score} / {TopScore}</Text>
</View>

<View className="mt-2 mb-2 flex flex-row">
<TouchableOpacity onPress={()=> navigation.navigate("FFWScreen", {
    language: langage, score: score, topScore: TopScore, ImageUri: ImageUri})}  style={{ flex: 1 }}>

            <View className="h-10 bg-blue-500 flex items-center justify-center">
              <Text className="text-white font-bold">Play</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("FFWAnswers", {language: langage})} style={{ flex: 1 }}>
            <View className="h-10 bg-green-500 flex items-center justify-center">
              <Text className="text-white font-bold">Answers</Text>
            </View>
          </TouchableOpacity>
</View>

<View className="border border-solid border-1 border-gray-400 h-6 w-full">
<View style={{ backgroundColor: theColor, height: '100%', width: `${(score / TopScore) * 100}%` }}></View> 
</View>

      </View>

    </View> 

  )
}