import React from 'react';
import { View, Text, StyleSheet, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';


export default function ButtonWeb ({title, screen}) {

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
            <Pressable style={styles.button} onPress={() => navigation.navigate(screen)}><Text style={styles.buttonText}>{title}</Text></Pressable>
        </View>
    )
//            <TouchableOpacity style={[styles.button, screenWidth > 800 && styles.buttonDesktop]} >
//   <Text style={[styles.buttonText, screenWidth > 800 && styles.buttonTextDesktop]} onPress={() => navigation.navigate('QuizMCQ')}>Multiple Choice</Text>
//  </TouchableOpacity>

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6EBFBB',  
        width: 316,
        height: 50,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Orbitron-Bold'
    },
})