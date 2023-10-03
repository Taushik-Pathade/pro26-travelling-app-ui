import { View, Text, Image, ScrollView, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import React from 'react'

const Categories = () => {
  return (

   
         
            <TouchableOpacity>
                  <View className="flex-row space-x-1  mx-3 p-1  bg-primary pr-4 rounded-full ">
                <View className="bg-white p-[3%] rounded-full ">
                  <Image
                    source={require("../assets/image1.jpg")}
                    className="w-8 h-8 rounded-full border-1 "
                  />
                </View>
                <Text className="text-white mt-2 text-md">All</Text>
              </View>
            </TouchableOpacity>
             
        


  )
}

export default Categories