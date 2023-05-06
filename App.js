import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import React, {useLayoutEffect, useState, useEffect} from 'react'
import HomeScreen from './screens/HomeScreen';
import FFWScreen from './screens/FFWScreen';
import IntroScreen from './screens/IntroScreen';
import CAFHardScreen from './screens/CAFHardScreen';
import FFWAnswers from './screens/FFWAnswers';
import CAFEasyScreen from './screens/CAFEasyScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator()

export default function App() {

  const [open, setOpen] = useState(true);

  useEffect(() => {
    async function checkIntroScreen() {
      try {
        const introScreen = await AsyncStorage.getItem('IntroScreen');
        if (introScreen !== null) {
          setOpen(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    checkIntroScreen();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
      {open ? ( <Stack.Screen name="Intro" component={IntroScreen} />): (  
    <>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="FFWScreen" component={FFWScreen} /> 
    <Stack.Screen name="CAFEasyScreen" component={CAFEasyScreen} />
    <Stack.Screen name="CAFHardScreen" component={CAFHardScreen} />
    <Stack.Screen name="FFWAnswers" component={FFWAnswers} options={{presentation: "modal", headerShown: false}}/> 
    <Stack.Screen name="Answers" component={FFWAnswers} options={{presentation: "modal", headerShown: false}}/> 
    </>
    )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

