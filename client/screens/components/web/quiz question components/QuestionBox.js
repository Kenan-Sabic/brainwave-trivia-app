import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { useFonts } from 'expo-font'


export default function QuestionBox ({question}) {


    let [fontsLoaded] = useFonts({
        'Monofett-Regular': require('../../../assets/fonts/Monofett-Regular.ttf'),
        'Orbitron-Bold': require('../../../assets/fonts/Orbitron-Bold.ttf'),
      });
    
      if (!fontsLoaded) {
        return null;
      }

      return (
        <View style={styles.container}>
            <Text style={styles.text}>{question}</Text>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        width: 1100,
        backgroundColor: "rgba(110, 191, 187, 0.7)",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,   
    },
    text: {
        fontSize: 18,
        fontFamily: 'Orbitron-Bold',
        textAlign: 'center'
    },
})