import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import FavoriteScreen from '../screens/FavoriteScreen'
import MealsNavigator from '../navigation/MealsNavigator'
import Colors from '../constants/Colors';


/* HH - Here we create BottomTab navigation for 5 main pages of application
These five pages are (HomeScreen , categoryScreen, search,
 MyItems and Profile page)
*/
const Tab = createBottomTabNavigator();
function BottomTabsNavigation () {
  return (
    <NavigationContainer>
        <Tab.Navigator  
        /* HH - in screenOptions you can some modification and design 
        to This bottomTab navigation */     
        screenOptions={({ route }) => ({

        // HH - in this part we are adding icons for BottomTabs
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
            iconName = focused
            ? 'home' : 'home';
        } else if (route.name === 'Favorite') {
            iconName = focused ? 'star' : 'star';
        }
        
        // You can return any component that you like here!
        return <MaterialCommunityIconsIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.color0,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: Colors.color2,
        tabBarInactiveBackgroundColor: Colors.color4,
        })}
      >
        
            <Tab.Screen 
            name="Home" 
            component={MealsNavigator} 
             options={{headerShown: false}}  
            />
            <Tab.Screen 
            name="Favorite" 
            component={FavoriteScreen} 
            options={{headerShown: false}}  
            />
        </Tab.Navigator>
    </NavigationContainer>

  );
}

export default BottomTabsNavigation;