import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from "./Icon";
import HomeScreen from "./screens/HomeScreen";
import BookMark from "./screens/BookMark";
import Search from "./screens/Notification";
import UserScreen from "./screens/UserScreen";
import SingleProductPage from "./screens/SingleProductPage";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const tabBarIconStyle = (focused) => {
    return {
      color: focused ? '#ffba00' : 'gray',
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel:false,headerShown:false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            
            tabBarIcon: ({ focused }) => (
              <Ionicons name="home-outline" size={30} style={tabBarIconStyle(focused)} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="notifications-outline" size={30} style={tabBarIconStyle(focused)} />
            ),
          }}
        />
        <Tab.Screen
          name="SingleProduct"
          component={SingleProductPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="compass" size={30} style={tabBarIconStyle(focused)} />
            ),
          }}
        />
        <Tab.Screen
          name="BookMark"
          component={BookMark}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="bookmark-outline" size={30} style={tabBarIconStyle(focused)} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="person-outline" size={30} style={tabBarIconStyle(focused)} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;