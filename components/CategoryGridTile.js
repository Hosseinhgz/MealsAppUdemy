import React from "react";
import {View, Text, StyleSheet,FlatList, Button , TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';

import Colors from '../constants/Colors'



const CategoryGridTile = props => {
let TouchableCom = TouchableOpacity;
if (Platform.OS === 'android' && Platform.Version>=21){
    TouchableCom = TouchableNativeFeedback;
}

return (
    <View style={styles.gridItem} >
    <TouchableCom 
        style={{flex:1,}}
        onPress={props.onSelect}
        >
            <View style={{...styles.container , ...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
            </View>
    </TouchableCom>
    </View>
)
};

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:160,
        borderWidth:0,
        borderRadius:10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation:5,

    },
    container:{
        flex:1,
        padding: 15,
        shadowOpacity: 0.26,
        shadowOffset: {width:0 , height:2},
        shadowRadius: 10,
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        borderRadius:5,
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign:'right',
    }

})

export default CategoryGridTile;
