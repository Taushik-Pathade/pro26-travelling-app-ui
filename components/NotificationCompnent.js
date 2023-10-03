import { View, Text, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '../Icon'

const NotificationCompnent = () => {
  return (
    <TouchableHighlight>
    <View className="m-2 shadow-lg bg-primary rounded-3xl p-2 flex-row ">
<Image 
className="w-10 h-10 rounded-full"
source={require("../assets/image/img1.jpg")}
/>
<View className="bg-white  rounded-full absolute mt-3 ml-2" >
     
            
     <Ionicons
          size={13}
          name="notifications-outline"  
        />
    
</View>
<View>
<Text className="font-semibold text-white ">
    <Ionicons name='location' size={15}/> Place location</Text>
  


<Text className="text-white">  Notification notifications notifications notifications   </Text>
</View>


    </View>
    </TouchableHighlight>
  )
}

export default NotificationCompnent