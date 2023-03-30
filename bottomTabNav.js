import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/Home.js"
import SearchScreen from "../screens/Search.js";
import loginScreen from "../screens/login.js";
import ReelScreen from "../screens/Reel.js";
import ProfileScreen from "../screens/Profile.js";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
    render() {
      return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
  
                if (route.name === "Home") {
                  iconName = "home";
                } else if (route.name === "Search") {
                  iconName = "search";
                } else if (route.name === "Profile"){
                iconName ="person-circle-outline";
                }else if(route.name === "Reel"){
                    iconName = "color-filter-outline"
                }
  
                // You can return any component that you like here!
                return (
                  <Ionicons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              }
            })}
            tabBarOptions={{
              activeTintColor: "#FFFFFF",
              inactiveTintColor: "black",
              style: {
                height: 130,
                borderTopWidth: 0,
                backgroundColor: "#5653d4"
              },
              labelStyle: {
                fontSize: 20,
              },
              labelPosition: "beside-icon",
             
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Reel" component={ReelScreen}/>

          </Tab.Navigator>
        </NavigationContainer>
      );
    }
  }
  