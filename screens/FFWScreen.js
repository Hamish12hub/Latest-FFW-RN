import { View, Text, Image, StyleSheet, TextInput, Button, RefreshControl, Alert, SafeAreaView, Keyboard } from 'react-native'
import React, {useState, useRef, useLayoutEffect, useEffect, } from 'react'
import { useNavigation } from "@react-navigation/native"
import PopUp from '../cards/PopUp';
import TitleBack from '../cards/TitleBack';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const [PopUpExists, SetPopUpExists] = useState(false)
  const [WinLose, SetWinLose] = useState(true)

  const navigation = useNavigation();
  const { language, score, topScore, ImageUri } = route.params;

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  useEffect(() => {
    shuffleData(data);
  }, []);


  const [shuffledData, setShuffledData] = useState([]);
  const shuffleData = (data) => {
    const shuffled = [...data];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledData(shuffled);
  };


  const [input, setInput] = useState("");
  const [count, setCount] = useState(0)
  const inputRef = useRef(null);


  const returnFunction = () => {
     if (input.toUpperCase() == shuffledData[count].capital.toUpperCase()) {
       setCount(count + 1);
       WinnerFunction()
       }else{
        Keyboard.dismiss();
        SetPopUpExists(true)
        Checker()
     }
   inputRef.current.clear();
 };

const WinnerFunction = () => {
  if(count == shuffledData.length - 1){
    Keyboard.dismiss();
    SetPopUpExists(true)
     SetWinLose(false)
    Checker()
  }
}
  
  const updateStatePopUp = (PopUpExists) => {
    SetPopUpExists(PopUpExists);
  };
  const updateStateCount = ( count) => {
    setCount(count);
  };

  function Checker(){
    if(count > score){
      alert("new high score, im updating it now")
      updatingNewScore()
    }
  }

  const updatingNewScore = async () => {
    alert(count)
    try {
      await AsyncStorage.setItem(language, count.toString());
      console.log('AsyncStorage successfully updated.');
    } catch (error) {
      console.log('Error updating AsyncStorage: ', error);
    }
  };


  return (

<SafeAreaView className=" flex-1 bg-[#fff]">
<View style={{position: 'absolute', top: "50%", left: 0, right: 0, bottom: 0, backgroundColor: '#FFCCE5'}} />
<TitleBack/>

 <View style={styles.container}>

 <View style={styles.Background}> 
  <View>
    <Text>the language is: {language}</Text>
  </View>
  <View>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: '1%' }}>Your score is: {count} out of {topScore}</Text>
  </View>
  <View>

    <Text>Translate this to English: 
     { count < shuffledData.length ? shuffledData[count].country : ''}
    </Text>
  
  </View>
  <View style={{ width: '80%', borderWidth: 2, borderColor: 'black', marginTop: '1%' }}>
    <TextInput ref={inputRef} onChangeText={(text) => setInput(text)} onSubmitEditing={returnFunction} blurOnSubmit={false} />
  </View>
  <View>
    <Image source={ImageUri} className="h-16 w-28 rounded-sm ml-2 mr-2 mt-2" />
  </View>
  <View>
    <Text>how many of the words can you get correct</Text>
  </View>
  <View>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: '1%' }}>Your score to beat is: {score}</Text>
  </View>
</View>

{PopUpExists ? (<View style={styles.Overlay}>
  <PopUp  updateStateCount={updateStateCount} updateStatePopUp={updateStatePopUp} result={WinLose} currentScore={count} 
  BestScore={score} topScore={topScore} question={count < shuffledData.length && shuffledData.length > 0 ? shuffledData[count].country : ''}
   Answer={count < shuffledData.length ? shuffledData[count].capital  : ''} language={language} />
  </View>): ( null)}

</View>
</SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1, 
    backgroundColor: '#FFCCE5', 
    alignItems: 'center', 
    justifyContent: 'space-evenly'
  },
  Overlay: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});




  // const returnFunction = () => {
  //    if(count == shuffledData.length - 1){
  //     setCount(count + 1);
  //     Keyboard.dismiss();
  //     SetPopUpExists(true)
  //     SetWinLose(false)
  //     Checker()
  //   }else{
  //     if (input.toUpperCase() == "") {
  //     // if (input.toUpperCase() == shuffledData[count].capital.toUpperCase()) {
  //       setCount(count + 1);
  //     } else {
  //       Keyboard.dismiss();
  //       SetPopUpExists(true)
  //       Checker()
  //   }
  //   }
  //   inputRef.current.clear();
  // };


   {/* {count < shuffledData.length ? shuffledData[count].country : ''}  */}