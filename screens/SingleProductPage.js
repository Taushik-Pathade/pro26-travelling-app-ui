import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
const SingleProductPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
<ScrollView showsVerticalScrollIndicator={false}>
<View>
        <View className="mx-3">
          <View>
            <Image
              source={require("../assets/image1.jpg")}
              className="h-96 w-full rounded-3xl"
            />
            <View className="absolute top-6 mx-3 flex-row justify-between w-11/12">
              <MaterialCommunityIcons
                name="arrow-left-thin"
                size={35}
                color="white"
                onPress={() => navigation.goBack()}
              />
              <MaterialCommunityIcons
                name="bookmark"
                size={30}
                color="white"
                onPress={() => navigation.navigate("BookMark")}
              />
            </View>
          </View>
        </View>

        <View className="m-5">
          <Text className="text-2xl font-bold">Banjar Kanal</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-5 mt-5"
          >
            <View className="bg-white rounded-3xl p-4 items-center">
              <View className="bg-primary p-1 rounded-full">
                <FontAwesome name="dollar" size={20} color="white" />
              </View>
              <Text className="m-4 text-lg font-semibold">$230</Text>
            </View>
            <View className="bg-white rounded-3xl p-4 items-center">
              <View className="bg-primary p-1 rounded-full">
                <Ionicons name="location" size={20} color="white" />
              </View>
              <Text className="m-4 text-lg font-semibold">5.4h</Text>
            </View>
            <View className="bg-white rounded-3xl p-4 items-center">
              <View className="bg-primary p-1 rounded-full">
                <Ionicons name="star" size={20} color="white" />
              </View>
              <Text className="m-4 text-lg font-semibold">3.2k</Text>
            </View>
           
          </ScrollView>
          <View className="mt-5">
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </Text>
            </View>
        </View>
      </View>
</ScrollView>
    </SafeAreaView>
  );
};

export default SingleProductPage;
