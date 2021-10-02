import React from "react";
import {View, Text, StyleSheet, FlatList, Button, Platform} from 'react-native';

import { CATEGORIES , MEALS } from "../data/dummy-data";
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem'

//  version of writting this component
const CategorieMealsScreen = props =>{
// props have two part {route and navigation}
// old version of writting this component
// const CategorieMealsScreen = props =>{
    console.log(props.navigation)



    // new version of passing parameters and changing header
     const { itemId } = props.route.params;
     const catId = itemId;
     const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
     props.navigation.setOptions({ headerTitle: selectedCategory.title })
    
    const displayMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0);

    const renderMealItem = itemData =>{
        return( 
            <MealItem 
            title={itemData.item.title} 
            onSelectMeal={()=>{}}
            />
            // <View>
            //     <Text>{itemData.item.title}</Text>
            //     <Button title="Go to Meal details" onPress={()=>{
            //         props.navigation.navigate('MealDetails');
            //     }} />
            // </View>
            );
    };


    return (
        <View style={styles.screen}>
            <FlatList
            data={displayMeals}
            keyExtractor={(item, index)=> item.id}
            renderItem={renderMealItem}
            style={{width:'100%', margin:10, }}
            />
        </View>
    );
};


// // old version of passing parameters and changing header( from Udemy course)
// // this way it didnt work for me
// CategorieMealsScreen.navigationOptions = (navigationData) => {

//      const catId = navigationData.navigation.getParam('categoryId');
//      const selectedCategory = CATEGORIES.find(cat => cat.id===catId);

//      return {
//          headerTitle : selectedCategory.title
//      };
// };


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        margin:10,
    }

})

export default CategorieMealsScreen;