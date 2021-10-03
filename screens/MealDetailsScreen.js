import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = props =>{
    const { mealId } = props.route.params;
    const selectedMealId = mealId;
     const selectedMeal = MEALS.find(cat => cat.id === selectedMealId);

     props.navigation.setOptions({ 
         headerTitle: selectedMeal.title,});

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go to Categories" onPress={()=>{
                props.navigation.popToTop();
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }

})

export default MealDetailsScreen;