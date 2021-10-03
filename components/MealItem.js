import React from "react";
import {View, Text, StyleSheet,FlatList, Button, ImageBackground , TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';

import Colors from '../constants/Colors'



const MealItem = props => {

return (
    <View style={styles.mealItem}>
    <TouchableOpacity onPress={props.onSelectMeal} >
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeder}}>
                <ImageBackground 
                source={{uri: props.image}} 
                style={styles.bgImage}
                >
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                    </View>
                </ImageBackground>

            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <Text >{props.duration}m</Text>
                <Text >{props.complexity.toUpperCase()}</Text>
                <Text >{props.affordability.toUpperCase()}</Text>

            </View>
        </View>
    </TouchableOpacity>
    </View>
)
};

const styles = StyleSheet.create({
    mealItem:{
        height:250,
        width:'100%',
        borderWidth:0,
        borderRadius:5,
        overflow: 'hidden',
        backgroundColor: Colors.color5,
        padding: 10,
        marginVertical:10,
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:20,
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize:20,
        color: Colors.color0,

        textAlign:'center',

    },
    mealRow:{
        flexDirection: 'row',
    },
    mealHeder:{
        height:'80%',
    },
    mealDetail:{
        height:'20%',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',

    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'

    },
});







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



export default MealItem;
