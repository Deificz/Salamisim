import {  Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {}

const intro_3 = (props: Props) => {
  return (
    <View className="flex-1 bg-slate-50 justify-between items-center">
      
      <Text className="text-xl self-end mt-5 mr-5 font-semibold">Skip {">"}</Text>
      

      <View className="flex items-center ">
        <View className="h-[200px] w-[200px] bg-black "></View>
        <Text className="text-3xl font-bold mb-5 mt-5">Need help?</Text>
        <Text className="text-xl text-center w-60">Ask questions related to your academic problems !</Text>
      </View>

      <View className="flex flex-row w-1/4 justify-evenly">
        <View className="rounded-full bg-slate-300 h-[15px] w-[15px]"></View>
        <View className="rounded-full bg-cyan-700 h-[15px] w-[15px]"></View>
        <View className="rounded-full bg-slate-300 h-[15px] w-[15px]"></View>
      </View>

      
      <TouchableOpacity className="mb-10 p-5 bg-cyan-700 w-[80%] text-center text-white font-bold text-2xl rounded-3xl">Next</TouchableOpacity>
      
    </View>
  );
}

export default intro_3

