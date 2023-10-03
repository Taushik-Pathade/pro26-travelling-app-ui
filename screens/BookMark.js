import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import BookMarkCompnent from '../components/BookMarkCompnent'

const BookMark = () => {
  return (
<SafeAreaView>


<View className="items-center    justify-center">
  <Text className="text-3xl font-light my-5"> BookMark</Text>
  <ScrollView showverticalScrollIndicator={false}>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/> 
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>
    <BookMarkCompnent/>



  </ScrollView> 
    </View>
</SafeAreaView>
    
  )
}

export default BookMark