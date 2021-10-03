import React from "react";
import {View, Text, StyleSheet,FlatList, Button , TouchableOpacity} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props =>{


    const renderGridItem = itemData => {
        return( 
            <CategoryGridTile 
            title={itemData.item.title}
            onSelect={()=> props.navigation.navigate('CategoryMeals',{ itemId:itemData.item.id })}
            color= {itemData.item.color}
            />
            );
    };



    return (
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Categories',
    headerStyle : {
        backgroundColor: Colors.color1,
    }
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    gridItem:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 10,
        margin:15,
        height:150,
        borderRadius:5,
        borderWidth:1,
        borderColor:"#23759d"

    }

})

export default CategoriesScreen;