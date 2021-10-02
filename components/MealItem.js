import React from "react";
import {View, Text, StyleSheet,FlatList, Button , TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';

import Colors from '../constants/Colors'



const MealItem = props => {

return (
    <View style={styles.mealItem}>
    <TouchableOpacity onpress={props.onSelectMeal} >
        <View>
            <View style={styles.mealRow}>
                <Text>Meals goes here!!</Text>
            </View>
            <View style={{...styles.container , ...{backgroundColor: props.color}}}>
                <Text style={styles.title} >{props.title}</Text>
            </View>
        </View>
    </TouchableOpacity>
    </View>
)
};

const styles = StyleSheet.create({
    mealItem:{
        height:200,
        width:'100%',
        borderWidth:0,
        borderRadius:5,
        overflow: 'hidden',
        backgroundColor: Colors.color4,
        padding: 10,
        marginVertical:10,
    },
    mealRow:{
        flexDirection: 'row',
    },
    // container:{
    //     flex:1,
    //     padding: 15,
    //     shadowOpacity: 0.26,
    //     shadowOffset: {width:0 , height:2},
    //     shadowRadius: 10,
    //     elevation:3,
    //     justifyContent: 'flex-end',
    //     alignItems:'flex-end',
    //     borderRadius:5,
    // },
    // title:{
    //     fontFamily: 'open-sans-bold',
    //     fontSize: 22,
    //     textAlign:'right',
    // }

})

export default MealItem;
