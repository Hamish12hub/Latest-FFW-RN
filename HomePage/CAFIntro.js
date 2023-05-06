import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert, Animated} from 'react-native'
import React, {useState, useEffect} from 'react'
import ContinentCard from "./ContinentCard"
import FFWPicker from "./FFWPicker"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';


export default function CAFIntro() {

  const [theColorEasy, setTheColorEasy] = useState('');
  const [theColorHard, setTheColorHard] = useState('');
  useEffect(() => {
    var percentageEasy = ((scoreEasy / TopScore) * 100);
    var percentageHard = ((scoreHard / TopScore) * 100);
if (percentageEasy < 30) {
  setTheColorEasy("rgb(255, 2, 0)");
} else if (percentageEasy < 80) {
  setTheColorEasy("rgb(245, 90, 7)");
} else {
  setTheColorEasy("rgb(0, 255, 2)");
}
if (percentageHard < 30) {
  setTheColorHard("rgb(255, 2, 0)");
} else if (percentageHard < 80) {
  setTheColorHard("rgb(245, 90, 7)");
} else {
  setTheColorHard("rgb(0, 255, 2)");
}
    }, [scoreEasy, scoreHard]);


    const [scoreEasy, setScoreEasy] = useState(8)
    const [scoreHard, setScoreHard] = useState(1)
    const [TopScore, setTopScore] = useState(12)
    

  const navigation = useNavigation();
   
  const [pickerShow, setpickerShow] = useState(false)
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  const [isRotated, setIsRotated] = useState(false);
  const changePicker = () => {
    setpickerShow(!pickerShow)
    setIsRotated(!isRotated);
    Animated.timing(rotateValue, {
      toValue: isRotated ? 0 : 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };
  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  return (
    <View>

<View style={{ 
  display: 'flex', 
  flexDirection: 'colom', 
  justifyContent: 'space-evenly', 
  alignItems: 'center',
  flex: 1,
  backgroundColor: 'white'
}}>
  <View>
  <Text className="font-bold text-xl text-center ">Country and flags</Text>
  <Text className="text-l text-center ">how manyu can you get for the whole world</Text>
  <Text className="text-l text-center ">button button button</Text>
  <Text className="text-l text-center ">or do each contnetn</Text>
  </View>


<View className="flex w-full flex-row">
  <View className="w-1/2">
  <TouchableOpacity className="m-1" onPress={()=> navigation.navigate("CAFEasyScreen", {
    Continent: "World"})}  >
            <View className="h-10 bg-blue-500 flex items-center justify-center">
              <Text className="text-white font-bold">Play easy</Text>
            </View>
          </TouchableOpacity>
          <View><Text className="text-center text-xl font-bold">{scoreEasy} / {TopScore}</Text></View>
          <View className="m-1 border border-solid border-1 border-gray-400 h-6">
<View style={{ backgroundColor: theColorEasy, height: '100%', width: `${(scoreEasy / TopScore) * 100}%` }}></View> 
</View> 
  </View>
  <View className="w-1/2">
  <TouchableOpacity className="m-1" onPress={()=> navigation.navigate("CAFHardScreen", {
    Continent: "World"})}  >
            <View className="h-10 bg-blue-500 flex items-center justify-center">
              <Text className="text-white font-bold">Play Hard</Text>
            </View>
          </TouchableOpacity>

           <View><Text className="text-center text-xl font-bold">{scoreHard} / {TopScore}</Text></View>
          <View className="m-1 border border-solid border-1 border-gray-400 h-6">
<View style={{ backgroundColor: theColorHard, height: '100%', width: `${(scoreHard / TopScore) * 100}%` }}></View> 
</View>  

  </View>


</View>


<TouchableOpacity className="ml-1 mr-1 w-full" onPress={()=> navigation.navigate("CountryAnswers", {
    Continent: "World"})} >
            <View className="h-10 w-full ml-1 mr-1 bg-green-500 flex items-center justify-center">
              <Text className="text-white font-bold">Answers</Text>
            </View>
          </TouchableOpacity>
  

  <View>
  <TouchableOpacity className="m-2" onPress={changePicker}>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <AntDesign name="down" size={34} color="black" />
        </Animated.View>
      </TouchableOpacity>
  </View>
</View>



{pickerShow ? (
<ScrollView vertical
    contentContainerStyle={{
      paddingVertical: 8,
    }}
    className="bg-[#bfbdbd] "
    showsHorizontalScrollIndicator={false}>

<ContinentCard Continent="Africa" TopScore={20} EasyScore={10} HardScore={4} ImageUri={require('../assets/Africa.jpg')}/>
 <ContinentCard Continent="Asia" TopScore={20} EasyScore={10} HardScore={4} ImageUri={require('../assets/Asia.jpg')}/>
 <ContinentCard Continent="Europe" TopScore={20} EasyScore={10} HardScore={4} ImageUri={require('../assets/Europe.jpg')}/>
 <ContinentCard Continent="North Amarica" TopScore={20} EasyScore={10} HardScore={4} ImageUri={require('../assets/NorthAmarica.jpg')}/>
 <ContinentCard Continent="South Amarica" TopScore={20} EasyScore={10} HardScore={4} ImageUri={require('../assets/SouthAmarica.jpg')}/>
 <ContinentCard Continent="Oceania" TopScore={20} EasyScore={10} HardScore={4} ImageUri={require('../assets/Oceania.png')}/>
    </ScrollView>): ( null)}



    </View>
  )
}
