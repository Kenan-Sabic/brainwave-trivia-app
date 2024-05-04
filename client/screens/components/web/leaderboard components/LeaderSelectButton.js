import React from 'react';
import { View, Text, StyleSheet, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';


export default function LeaderSelectButton ({title, screen}) {

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
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Multiple choice</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonText}>True/False</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonText}>Fill in the blank</Text>
                </Pressable>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.buttonText}>Mixed questions</Text>
            </Pressable>        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 1000,
    },
    button: {
        borderRadius: 15,
        padding: 10,
        alignItems: "center",
        backgroundColor: "#6EBFBB",
        marginTop: 16,
        width: '25%'
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Orbitron-Bold'
    },
})