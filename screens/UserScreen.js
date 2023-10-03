import { View, Text, Image } from 'react-native'
import  React,{useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
const UserScreen = () => {
  const navigation = useNavigation()
  const opacity = useSharedValue(0); 

const imageStyle = useAnimatedStyle(() => {
  return {
    opacity: opacity.value,
   
  };
});
useEffect(() => {

  opacity.value = withTiming(2, { duration: 1000 });
}, []);

  return (
<SafeAreaView>
  
<ScrollView showsVerticalScrollIndicator={false}>
<View>
  <View  className="bg-black opacity-60 z-10 w-full h-96 absolute" ></View>


<Image source={require('../assets/building.jpg')} className="w-full h-96  "/>
<View className="absolute m-4 z-40  rounded-full p-1"><Ionicons onPress={()=>navigation.goBack()} name='arrow-back-sharp' size={25} style={{color:"#ffffff",}}/></View>
<View className="top-20 absolute mx-24 z-20 ">


<Text className=" text-white   font-bold text-3xl">Saadzi Sabbi</Text>
<Text className=" text-white   mx-1 font-semibold text-xl">engineer desinger</Text>
<View className="bg-white/80 rounded-full top-3 shadow-2xl p-1 shadow-white">
<Animated.Image source={require('../assets/profile1.png')} className="   w-44 h-44 rounded-full"  style={imageStyle}/>
</View>
</View>
</View>



<View className="w-full  h-64 pt-10 bg-white z-30 -mt-5 rounded-3xl   ">
<View className="mx-4 space-y-3">
<View>
<View className="flex-row    bg-primary  px-4 p-2 rounded-full  ">
<Text className="text-2xl text-white ml-4 ">Name: </Text><Text className="text-2xl text-white">Shinayal Russi</Text>

</View>

</View>
<View>
<View className="flex-row    bg-primary  px-4 p-2 rounded-full  ">
<Text className="text-2xl text-white ml-4 ">Email: </Text><Text className="text-2xl text-white">Shinayal@gmail.com</Text>

</View>

</View>
<View>
<View className="flex-row    bg-primary px-4 p-2 rounded-full  ">
<Text className="text-2xl text-white ml-4 ">Phone: </Text><Text className="text-2xl text-white">+91706534</Text>

</View>

</View>

</View>
</View>


</ScrollView>
</SafeAreaView>
  )
}

export default UserScreen