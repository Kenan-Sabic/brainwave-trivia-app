import React from 'react';
import { View, Text, StyleSheet, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';


export default function LeaderNavButton ({opacity}) {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
    
        'Orbitron-Bold': require('../../assets/fonts/Orbitron-Bold.ttf'),
        'Monofett-Regular': require('../../assets/fonts/Monofett-Regular.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View>
            <Pressable style={[styles.button, {opacity: opacity}]} onPress={() => navigation.navigate('Leaderboard')}><Text style={styles.buttonText}>Leaderboard</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 70,
        width: 300,
        marginHorizontal: 8,
        backgroundColor: 'rgb(110, 191, 187)',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomEndRadius: 15
    },
    buttonText: {
        fontSize: 30,
        fontFamily: 'Orbitron-Bold'
    },
})