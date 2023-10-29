import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

type Props = {
    title: string,
    description: string,
    pageNum: number,
};

const intro = (props: Props) => {
 
  return (
    <View className="flex-1 bg-slate-50 justify-between items-center">
      <Text className="text-xl self-end mt-5 mr-5 font-semibold">
        Skip {">"}
      </Text>

      <View className="flex items-center ">
        <View className="h-[200px] w-[200px] bg-black "></View>
        <Text className="text-3xl font-bold mb-5 mt-5">{props.title}</Text>
        <Text className="text-xl text-center w-60">{props.description}</Text>
      </View>

      <View className="flex flex-row w-1/4 justify-evenly">
        <View className={`rounded-full  ${props.pageNum === 1 ?  'bg-cyan-700' : 'bg-slate-300'} h-[15px] w-[15px] `} />
        <View className={`rounded-full  ${props.pageNum === 2 ?  'bg-cyan-700' : 'bg-slate-300'} h-[15px] w-[15px] `} />
        <View className={`rounded-full  ${props.pageNum === 3 ?  'bg-cyan-700' : 'bg-slate-300'} h-[15px] w-[15px] `} />
      </View>

      <TouchableOpacity className="mb-10 p-5 bg-cyan-700 w-[80%] text-center text-white font-bold text-2xl rounded-3xl">
        Next
      </TouchableOpacity>
    </View>
  );
};

export default intro;
