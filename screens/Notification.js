import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BookMarkCompnent from '../components/BookMarkCompnent'
import NotificationCompnent from '../components/NotificationCompnent'

const Notification = () => {
  return (
    <SafeAreaView>


<View className="items-center    justify-center">
  <Text className="text-3xl font-light my-5">Notification</Text>
  <ScrollView showverticalScrollIndicator={false}>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/> 
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>
    <NotificationCompnent/>



  </ScrollView> 
    </View>
</SafeAreaView>

  )
}

export default Notification