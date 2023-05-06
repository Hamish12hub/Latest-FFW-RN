import { View, Text, Image, Animated } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function ContinentCard({Continent, TopScore, EasyScore, HardScore, ImageUri}) {




  return (
<View className="bg-white mr-4 ml-4 mb-2 mt-2 h-60 shadow rounded-lg flex flex-row">



<View className="flex-1 flex">
  <View className="flex items-center justify-center" style={{ flexGrow: 1 }}>
    <Text className="font-bold text-2xl pt-3">{Continent}</Text>
  </View>
  <View className="flex items-center justify-center pl-1 pr-1 pb-1" style={{ flexGrow: 6 }}>
    <Image source={ImageUri} className="w-full h-4/5 object-contain"/>
  </View>
</View>


<View style={{ 
  display: 'flex', 
  flexDirection: 'colom', 
  justifyContent: 'space-evenly', 
  alignItems: 'center',
  flex: 1 
}}>
  <View>
    <Text>EasyButton</Text>
  </View>
  <View>
    <Text>EasyScore</Text>
  </View>
  <View>
    <Text>HardButton</Text>
  </View>
  <View>
    <Text>Hard Score</Text>
  </View>
  <View>
    <Text>Answer button</Text>
  </View>
</View>


    </View> 


  )
}



{/* <TouchableOpacity onPress={()=> navigation.navigate("FFWAnswers", {language: langage})} style={{ flex: 1 }}>
            <View className="h-10 bg-green-500 flex items-center justify-center">
              <Text className="text-white font-bold">Answers</Text>
            </View>
          </TouchableOpacity> */}


// flex: 1, 
//     backgroundColor: '#FFCCE5', 
//     alignItems: 'center', 
//     justifyContent: 'space-evenly'





{/* <Text className="font-bold text-xl flex-1">{TopScore}</Text>
<Text className="font-bold text-xl flex-1">{EasyScore}</Text>
<Text className="font-bold text-xl flex-1">{HardScore}</Text>  */}



    {/* <View className="flex-1 flex">
    <View className="bg-red-200" style={{ flexGrow: 1 }}>
  <Text className="font-bold text-xl flex-1">{Continent}</Text> 
    </View>
    <View className="bg-red-100" style={{ flexGrow: 4 }}>
 <Image source={ImageUri} className="w-max ml-2 mr-2 mt-2"/> 
    </View>
</View> */}

{/* <View className="flex-1 flex">
  <View className="bg-red-200 flex items-center justify-center" style={{ flexGrow: 1 }}>
    <Text className="font-bold text-xl">{Continent}</Text>
  </View>
  <View className="bg-red-100 flex items-center justify-center" style={{ flexGrow: 4 }}>
    <Image source={ImageUri} className="w-max"/>
  </View>
</View> */}

{/* <View className="flex-1 flex">
  <View className="bg-red-200 flex items-center justify-center" style={{ flexGrow: 1 }}>
    <Text className="font-bold text-xl">{Continent}</Text>
  </View>
  <View className="bg-red-100 flex items-center justify-center m-1" style={{ flexGrow: 4 }}>
    <Image source={ImageUri} className="max-w-full"/>
  </View>
</View> */}
{/* 
<View className="flex-1 flex">
  <View className="bg-red-200 flex items-center justify-center" style={{ flexGrow: 1 }}>
    <Text className="font-bold text-xl">{Continent}</Text>
  </View>
  <View className="bg-red-100 flex items-center justify-center" style={{ flexGrow: 4 }}>
    <Image source={ImageUri} className="max-w-full max-h-full"/>
  </View>
</View> */}









   {/* <View className="flex-row justify-between items-center p-2">
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

      </View> */}