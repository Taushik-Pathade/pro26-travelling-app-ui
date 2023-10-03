import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, SimpleLineIcons } from "../Icon";
import Carousel from "./Carousel";
import Trips from "../components/Trips";
import Categories from "../components/Categories";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        <View className="mx-1 my-4 flex-row items-end  border-2 border-gray-600 w-96 h-10 rounded-2xl p-1">
            <View  className=" mr-4">
            
            <Ionicons
                 size={25}
                 name="search"
                 
                
                 
               />
            </View>
            <TextInput placeholder="Search Here" className="text-xl " placeholderTextColor={"#bdc3c7"}/>
           
         
          
            </View>

          <Carousel />
         
          <View>
            <Text className="text-lg m-4 font-extrabold">Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <Categories />
            <Categories />
            <Categories />
            <Categories />
            <Categories />
            <Categories />
            <Categories />
</ScrollView>
            <View>
              <View className="m-3 mt-5 flex-row justify-between">
                <Text className="text-lg font-extrabold ">Top Trips</Text>
                <TouchableOpacity>
                  <Text>
                    Explore{" "}
                    <SimpleLineIcons
                      name="arrow-right"
                      size={8}
                      color="black"
                      className="mx-2 "
                    />
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Trips />
                <Trips />
                <Trips />
                <Trips />
                <Trips />
                <Trips />
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
