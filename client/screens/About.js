import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native';
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import { useFonts } from 'expo-font';

export default function AboutScreen(){

    let [fontsLoaded] = useFonts({
    
        'Orbitron-Bold': require('../../assets/fonts/Orbitron-Bold.ttf'),
        'Monofett-Regular': require('../../assets/fonts/Monofett-Regular.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={styles.container}>
            <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
                
                <View style={styles.infobox}>
                <HeaderLargeScreen title={'About us'}></HeaderLargeScreen>
                    <Text style={styles.title1}>About us</Text>
                    <Text>Brainwave is a trivia application made to test your knowledge and challenge your brain. </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

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
        backgroundColor: 'rgba(75,143,140,0.6)',
    },
    title1: {
        fontFamily: 'Orbitron-Bold',
        fontSize: 20
    },
    title2: {
        fontFamily: 'Orbitron-Bold',
        fontSize: 18
    },
})





