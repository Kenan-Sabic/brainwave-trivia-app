import React, {useState} from 'react';
import { View, Text, StyleSheet, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';


export default function LeaderSelectButton ({title}) {

    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({
    
        'Orbitron-Bold': require('../../../assets/fonts/Orbitron-Bold.ttf'),
        'Monofett-Regular': require('../../../assets/fonts/Monofett-Regular.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }
    return(
        <View style={styles.container}>
                <Pressable
                    style={[styles.button]}
                >
                    <Text style={styles.buttonText}>{title}</Text>
                </Pressable>       
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 250,
    },
    button: {
        borderRadius: 15,
        padding: 10,
        alignItems: "center",
        marginTop: 16,
        width: '100%',
        backgroundColor: 'rgb(110, 191, 187)',
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Orbitron-Bold'
    },
})