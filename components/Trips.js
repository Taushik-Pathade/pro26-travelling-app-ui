import { View, Text, Image,TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Trips = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('SingleProduct')}>
      <View className="m-3">
        <Image
          source={require("../assets/image/img1.jpg")}
          className="w-60 h-40 rounded-2xl"
        />
        <Text className="font-bold text-lg mx-3 m-2">Banjar Kanal</Text>
        <Text className="font-semibold text-md mx-3 m-2 mt-0 text-gray-500">
          Mountains
        </Text>
        <View className="flex-row justify-between">
          <Text className="text-primary font-bold text-lg m-2 mt-0">200$</Text>
      <Ionicons name="heart-outline" size={25} style={{color:"#16a085"}}/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Trips;
