import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import SelectButtonMobile from './SelectButtonMobile';


export default function LeaderboardMobile (){

    let [fontsLoaded] = useFonts({
    
        'Orbitron-Bold': require('../../../assets/fonts/Orbitron-Bold.ttf'),
        'Monofett-Regular': require('../../../assets/fonts/Monofett-Regular.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={styles.container}>
            <SelectButtonMobile></SelectButtonMobile>
            <View style={styles.leaderboard}>
                <View>
                    <Text style={styles.leaderboardText}>Username</Text>
                    <Text style={styles.leaderboardUser}>1.</Text>
                    <Text style={styles.leaderboardUser}>2.</Text>
                    <Text style={styles.leaderboardUser}>3.</Text>
                    <Text style={styles.leaderboardUser}>4.</Text>
                    <Text style={styles.leaderboardUser}>5.</Text>
                    <Text style={styles.leaderboardUser}>6.</Text>
                    <Text style={styles.leaderboardUser}>7.</Text>
                    <Text style={styles.leaderboardUser}>8.</Text>
                    <Text style={styles.leaderboardUser}>9.</Text>
                    <Text style={styles.leaderboardUser}>10.</Text>
                </View>
                <View>
                    <Text style={styles.leaderboardText}>Points</Text>
                    <Text style={styles.leaderboardUser}>pts</Text>
                    <Text style={styles.leaderboardUser}>pts</Text>
                    <Text style={styles.leaderboardUser}>pts</Text>
                    <Text style={styles.leaderboardUser}>pts</Text>
                    <Text style={styles.leaderboardUser}>pts</Text>
                    <Text style={styles.leaderboardUser}>pts</Text>
                    <Text style={styles.leaderboardUser}>pts</Text>
                    <Text style={styles.leaderboardUser}>pts</Text>
                    <Text style={styles.leaderboardUser}>pts</Text>
                    <Text style={styles.leaderboardUser}>pts</Text>
            </View>
        </View>
      </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    leaderboard: {
        marginTop: 24,
        backgroundColor: '#6EBFBB',
        width: 316,
        height: 450,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        marginBottom: 30
    },
    leaderboardText: {
        fontSize: 25,
        marginHorizontal: 20,
        marginTop: 10,
        fontFamily: 'Orbitron-Bold'
    },
      leaderboardUser: {
        fontSize: 24,
        marginHorizontal: 20,
    },
})