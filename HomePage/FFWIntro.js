import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert, Animated} from 'react-native'
import React, {useState, useEffect} from 'react'
import Card from "./Card"
import FFWPicker from "./FFWPicker"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';



// export const [bulgarian, setBulgarian] = useState(false)
// export const [croatian, setCroatian] = useState(false)
// export const [czech, setCzech] = useState(false)
// export const [danish, setDanish] = useState(false)
// export const [dutch, setDutch] = useState(false)
// export const [finnish, setFinnish] = useState(false)
// export const [french, setFrench] = useState(false)
// export const [german, setGerman] = useState(false)
// export const [greek, setGreek] = useState(false)
// export const [hungarian, setHungarian] = useState(false)
// export const [italian, setItalian] = useState(false)
// export const [polish, setPolish] = useState(false)
// export const [portuguese, setPortuguese] = useState(false)
// export const [romanian, setRomanian] = useState(false)
// export const [russian, setRussian] = useState(false)
// export const [spanish, setSpanish] = useState(false)
// export const [swedish, setSwedish] = useState(false)
// export const [turkish, setTurkish] = useState(false)

// export const checkAsyncStorage = async () => {
//   const bulgarianValue = await AsyncStorage.getItem('Bulgarian');if (bulgarianValue >= 0) {setBulgarian(true);}
//   const croatianValue = await AsyncStorage.getItem('Croatian');if (croatianValue >= 0) {setCroatian(true);}
//   const czechValue = await AsyncStorage.getItem('Czech');if (czechValue >= 0) {setCzech(true);}    
//   const danishValue = await AsyncStorage.getItem('Danish');if (danishValue >= 0) {setDanish(true);}
//   const dutchValue = await AsyncStorage.getItem('Dutch');if (dutchValue >= 0) {setDutch(true);}
//   const finnishValue = await AsyncStorage.getItem('Finnish');if (finnishValue >= 0) {setFinnish(true);}
//   const frenchValue = await AsyncStorage.getItem('French');if (frenchValue >= 0) {setFrench(true);}
//   const germanValue = await AsyncStorage.getItem('German');if (germanValue >= 0) {setGerman(true);}
//   const greekValue = await AsyncStorage.getItem('Greek');if (greekValue >= 0) {setGreek(true);}
//   const hungarianValue = await AsyncStorage.getItem('Hungarian');if (hungarianValue >= 0) {setHungarian(true);}
//   const italianValue = await AsyncStorage.getItem('Italian');if (italianValue >= 0) {setItalian(true);}
//   const polishValue = await AsyncStorage.getItem('Polish');if (polishValue >= 0) {setPolish(true);}
//   const portugueseValue = await AsyncStorage.getItem('Portuguese');if (portugueseValue >= 0) {setPortuguese(true);}
//   const romanianValue = await AsyncStorage.getItem('Romanian');if (romanianValue >= 0) {setRomanian(true);}
//   const russianValue = await AsyncStorage.getItem('Russian');if (russianValue >= 0) {setRussian(true);}
//   const spanishValue = await AsyncStorage.getItem('Spanish');if (spanishValue >= 0) {setSpanish(true);}
//   const swedishValue = await AsyncStorage.getItem('Swedish');if (swedishValue >= 0) {setSwedish(true);}
//   const turkishValue = await AsyncStorage.getItem('Turkish');if (turkishValue >= 0) {setTurkish(true);}
//       };

export default function FFWIntro({ setInfo }) {

  useEffect(() => {
    checkAsyncStorage();
  }, []);
  
   const checkAsyncStorage = async () => {
    const bulgarianValue = await AsyncStorage.getItem('Bulgarian');if (bulgarianValue >= 0) {setBulgarian(true);}
    const croatianValue = await AsyncStorage.getItem('Croatian');if (croatianValue >= 0) {setCroatian(true);}
    const czechValue = await AsyncStorage.getItem('Czech');if (czechValue >= 0) {setCzech(true);}    
    const danishValue = await AsyncStorage.getItem('Danish');if (danishValue >= 0) {setDanish(true);}
    const dutchValue = await AsyncStorage.getItem('Dutch');if (dutchValue >= 0) {setDutch(true);}
    const finnishValue = await AsyncStorage.getItem('Finnish');if (finnishValue >= 0) {setFinnish(true);}
    const frenchValue = await AsyncStorage.getItem('French');if (frenchValue >= 0) {setFrench(true);}
    const germanValue = await AsyncStorage.getItem('German');if (germanValue >= 0) {setGerman(true);}
    const greekValue = await AsyncStorage.getItem('Greek');if (greekValue >= 0) {setGreek(true);}
    const hungarianValue = await AsyncStorage.getItem('Hungarian');if (hungarianValue >= 0) {setHungarian(true);}
    const italianValue = await AsyncStorage.getItem('Italian');if (italianValue >= 0) {setItalian(true);}
    const polishValue = await AsyncStorage.getItem('Polish');if (polishValue >= 0) {setPolish(true);}
    const portugueseValue = await AsyncStorage.getItem('Portuguese');if (portugueseValue >= 0) {setPortuguese(true);}
    const romanianValue = await AsyncStorage.getItem('Romanian');if (romanianValue >= 0) {setRomanian(true);}
    const russianValue = await AsyncStorage.getItem('Russian');if (russianValue >= 0) {setRussian(true);}
    const spanishValue = await AsyncStorage.getItem('Spanish');if (spanishValue >= 0) {setSpanish(true);}
    const swedishValue = await AsyncStorage.getItem('Swedish');if (swedishValue >= 0) {setSwedish(true);}
    const turkishValue = await AsyncStorage.getItem('Turkish');if (turkishValue >= 0) {setTurkish(true);}
        };

    const [bulgarian, setBulgarian] = useState(false)
    const [croatian, setCroatian] = useState(false)
    const [czech, setCzech] = useState(false)
    const [danish, setDanish] = useState(false)
    const [dutch, setDutch] = useState(false)
    const [finnish, setFinnish] = useState(false)
    const [french, setFrench] = useState(false)
    const [german, setGerman] = useState(false)
    const [greek, setGreek] = useState(false)
    const [hungarian, setHungarian] = useState(false)
    const [italian, setItalian] = useState(false)
    const [polish, setPolish] = useState(false)
    const [portuguese, setPortuguese] = useState(false)
    const [romanian, setRomanian] = useState(false)
    const [russian, setRussian] = useState(false)
    const [spanish, setSpanish] = useState(false)
    const [swedish, setSwedish] = useState(false)
    const [turkish, setTurkish] = useState(false)
 

  const navigation = useNavigation();

  const infoFunction = () => {
    setInfo(true);
  }

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
    checkAsyncStorage,
    
    <View>

<View className="flex flex-row items-center justify-center bg-[#fff] ">
  <TouchableOpacity className="pl-3 pt-2 bg-[#fff] absolute left-0" onPress={infoFunction}>
    <Text className="text-l text-blue-300 underline">info ?</Text>
  </TouchableOpacity>
  <Text className="font-bold text-xl text-center pt-2">Choose a langage and start learning</Text>
</View>


    <View className="bg-[#fff] mb-4 justify-center items-center ">

<TouchableOpacity className="m-2" onPress={changePicker}>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <AntDesign name="down" size={34} color="black" />
        </Animated.View>
      </TouchableOpacity>

    {pickerShow ? (<View style={{ paddingBottom: 2, width: '100%', delay: 2500 }}><FFWPicker/></View>): ( null)}

      <ScrollView horizontal
    contentContainerStyle={{
      paddingHorizontal: 15,
    }}
    className="bg-[#bfbdbd] pt-4 pb-4"
    showsHorizontalScrollIndicator={false}>

{bulgarian ? (<Card langage="Bulgarian" TopScore={44} ImageUri={require('../assets/flags/Bulgaria.png')}/>): ( null)}
{croatian ? (<Card langage="Croatian" TopScore={44} ImageUri={require('../assets/flags/Croatia.png')}/>): ( null)}
{czech ? (<Card langage="Czech" TopScore={44} ImageUri={require('../assets/flags/Czechia.png')}/>): ( null)}
{danish ? (<Card langage="Danish" TopScore={44} ImageUri={require('../assets/flags/Denmark.png')}/>): ( null)}
{dutch ? (<Card langage="Dutch" TopScore={44} ImageUri={require('../assets/flags/Netherlands.png')}/>): ( null)}
{finnish ? (<Card langage="Finnish" TopScore={44} ImageUri={require('../assets/flags/Finland.png')}/>): ( null)}
{french ? (<Card langage="French" TopScore={44} ImageUri={require('../assets/flags/France.png')}/>): ( null)}
{german ? (<Card langage="German" TopScore={44} ImageUri={require('../assets/flags/German.png')}/>): ( null)}
{greek ? (<Card langage="Greek" TopScore={44} ImageUri={require('../assets/flags/Greece.png')}/>): ( null)}
{hungarian ? (<Card langage="Hungarian" TopScore={44} ImageUri={require('../assets/flags/Hungary.png')}/>): ( null)}
{italian ? (<Card langage="Italian" TopScore={44} ImageUri={require('../assets/flags/Italy.png')}/>): ( null)}
{polish ? (<Card langage="Polish" TopScore={44} ImageUri={require('../assets/flags/Poland.png')}/>): ( null)}
{portuguese ? (<Card langage="Portuguese" TopScore={44} ImageUri={require('../assets/flags/Portugal.png')}/>): ( null)}
{romanian ? (<Card langage="Romanian" TopScore={44} ImageUri={require('../assets/flags/Romania.png')}/>): ( null)}
{russian ? (<Card langage="Russian" TopScore={44} ImageUri={require('../assets/flags/Russia.png')}/>): ( null)}
{spanish ? (<Card langage="Spanish" TopScore={44} ImageUri={require('../assets/flags/Spain.png')}/>): ( null)}
{swedish ? (<Card langage="Swedish" TopScore={44} ImageUri={require('../assets/flags/Sweden.png')}/>): ( null)}
{turkish ? (<Card langage="Turkish" TopScore={44} ImageUri={require('../assets/flags/Turkey.png')}/>): ( null)}

    </ScrollView>
      
    </View>  
    </View>
  )
}