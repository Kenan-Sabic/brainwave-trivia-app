import React from 'react';
import { View, ImageBackground, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';


export default function HeaderLargeScreen (){

    return(
        <View style={styles.header}>

        <Text>HEADER</Text>


        </View>


    )


}

const {width,height}= Dimensions.get('window');
const isLargeScreen = width>=768;

const styles = StyleSheet.create({
    header:{
        display:isLargeScreen ? block : none,
        width:"100vw",
        backgroundColor:'#4B8F8C',
        position:'absolute',
        top:0,
        left:0,
    }


})