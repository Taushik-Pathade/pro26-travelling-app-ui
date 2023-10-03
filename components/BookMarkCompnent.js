import { View, Text, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '../Icon'


const BookMarkCompnent = () => {
  return (
    <TouchableHighlight>
        <View className="m-2 shadow-lg bg-primary rounded-3xl p-2 flex-row ">
<Image 
className="w-10 h-10 rounded-full"
source={require("../assets/image/img1.jpg")}
/>


<View>
    <Text className="font-semibold text-white ">
        <Ionicons name='location' size={15}/> Place location</Text>
    

    
    <Text className="text-white">  Details Details Details Details Details Details  </Text>
</View>
<Text className="my-3 mx-2 bg-white rounded-full font-bold p-1"> <Ionicons name="bookmark-outline" size={15}  /></Text>


        </View>
        </TouchableHighlight>
   
  )
}

export default BookMarkCompnent