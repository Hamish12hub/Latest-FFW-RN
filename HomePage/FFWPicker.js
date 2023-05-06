import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import FFWIntro from './FFWIntro';

// const { checkAsyncStorage } = FFWIntro();

const countryList = [
  'Bulgarian','Croatian','Czech',
  'Danish','Dutch','Finnish',
  'French','German','Greek',
  'Hungarian','Italian','Polish',
  'Portuguese','Romanian','Russian',
  'Spanish','Swedish','Turkish',
];

export default function FFWPicker() {
  const [selectedCountry, setSelectedCountry] = useState("Bulgarian");


const handlePress = async () => {
  alert("hi")
  try {
    var value = await AsyncStorage.getItem(selectedCountry);
    if(value < 0){
      try {
        await AsyncStorage.setItem(selectedCountry, '0');
      console.log('AsyncStorage successfully updated.');
    } catch (error) {
      console.log('Error updating AsyncStorage: ', error);
    }
    }
  } catch (error) {
    console.log(`Error saving ${selectedCountry} to AsyncStorage: ${error}`);
  }
  // checkAsyncStorage()
}

  return (
    <View className="w-full">
      <View className="flex-1">
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}>
        {countryList.map((country) => (
          <Picker.Item key={country} label={country} value={country} />
        ))}
      </Picker>
      </View>
      <View className="flex-1">
      <Button title="Start Learning" className="p-2 bg-blue-200" onPress={handlePress} />
      </View>
      {/* <Button title="Start copuntry" className="p-2 bg-blue-200" onPress={handlecountry} /> */}
    </View>
  );
}