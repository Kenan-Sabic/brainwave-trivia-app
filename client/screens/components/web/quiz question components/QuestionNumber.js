import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { useFonts } from 'expo-font'


export default function QuestionNumber ({question}) {


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
        padding: 20,
        backgroundColor: 'rgba(110, 191, 187, 0.7)',
        borderRadius: 10,
        marginBottom: 15,    
    },
    text: {
        fontSize: 20,
        fontFamily: 'Orbitron-Bold',
        color: 'white'
    },
})