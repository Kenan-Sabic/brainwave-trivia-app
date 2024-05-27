import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function SubmitAnswer({ onSubmit }) {
    let [fontsLoaded] = useFonts({
        'Monofett-Regular': require('../../../assets/fonts/Monofett-Regular.ttf'),
        'Orbitron-Bold': require('../../../assets/fonts/Orbitron-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ height: 90, width: 1100 }}>
            <Pressable style={styles.container} onPress={onSubmit}>
                <Text style={styles.text}>Submit Answer</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'rgb(75, 143, 140)',
        flex: 1,
        marginVertical: 10,
        borderRadius: 20,
        padding: 22,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        fontFamily: 'Orbitron-Bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
