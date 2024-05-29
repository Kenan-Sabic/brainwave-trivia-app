import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function AnswerOption({ answer, onPress, isSelected, isCorrect, showResult }) {
    let [fontsLoaded] = useFonts({
        'Monofett-Regular': require('../../../assets/fonts/Monofett-Regular.ttf'),
        'Orbitron-Bold': require('../../../assets/fonts/Orbitron-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const getBackgroundColor = () => {
        if (!showResult) {
            return isSelected ? 'rgba(110, 191, 187, 0.9)' : 'rgb(75, 143, 140)';
        }
        if (isSelected && isCorrect) return 'green';
        if (isSelected && !isCorrect) return 'red';
        return 'rgb(75, 143, 140)';
    };

    return (
        <View style={{ height: 90, width: '49%' }}>
            <Pressable style={[styles.container, { backgroundColor: getBackgroundColor() }]} onPress={onPress}>
                <Text style={styles.text}>{answer}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
        color: 'white'
    },
});
