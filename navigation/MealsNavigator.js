import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import CategoriesScreen from '../screens/CategoriesScreen'
import CategorieMealsScreen from '../screens/CategorieMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import 'react-native-gesture-handler';
import Colors from '../constants/Colors';


const Stack = createStackNavigator();
function MealsNavigator () {

    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen 
          name="Categories" 
          component={CategoriesScreen} 
          options={{
            headerTitle: 'Meals Category',
            headerStyle:{
                backgroundColor: Platform.OS==='android' ? Colors.color2 : Colors.color0,
              },
            headerTintColor: Platform.OS==='android' ? Colors.color0 : Colors.color2,
            }} 
          />
          <Stack.Screen 
          name="CategoryMeals" 
          component={CategorieMealsScreen}   
          options={{
            headerTitle: 'Meals',
            headerStyle:{
              backgroundColor: Platform.OS==='android' ? Colors.color2 : Colors.color0,
            },
            headerTintColor: Platform.OS==='android' ? Colors.color0 : Colors.color2,
          }} 
          />
          <Stack.Screen 

          name="MealDetails"  
          component={MealDetailsScreen}           
          options={{
            headerTitle: 'Meals Details',
            headerRight: ()=>(<Text>FAV!!!</Text>),
            headerStyle:{
              backgroundColor: Platform.OS==='android' ? Colors.color2 : Colors.color0,
            },
            headerTintColor: Platform.OS==='android' ? Colors.color0 : Colors.color2,
          }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

  }

export default MealsNavigator;