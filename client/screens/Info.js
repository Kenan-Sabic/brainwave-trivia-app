import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import HeaderLargeScreen from './components/web/HeaderLargeScreen';


export default function InfoScreen(){

return(
    <View style={styles.container}>
        <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
            <HeaderLargeScreen></HeaderLargeScreen>
            <View style={styles.infobox}>
                <Text>Info</Text>
                <Text>Brainwave is a trivia application made to test your knowledge and challenge your brain. </Text>
            </View>
        </ImageBackground>
    </View>
)}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
      },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
      },
    infobox:{
    flex:1,
    alignItems:'center',
    paddingTop:40,
    backgroundColor: 'rgba(75,143,140,0.6)',
    },


})





