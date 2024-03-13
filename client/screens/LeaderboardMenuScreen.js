import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';



export default function LeaderBoardMenuScreen () {
  let [fontsLoaded] = useFonts({
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
    <View style={styles.container2}>
    <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}  /> 
        <Text style={styles.title}>Brainwave</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button1} >
            <Text style={styles.buttonText} onPress={() => navigation.navigate('PlayMenu')}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Leaderboard</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button3}>
            <Text style={styles.buttonText}>Question type</Text>
        </TouchableOpacity>
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
     </ImageBackground>
    </View>
    
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
    marginTop: 50
  },
  background: {
    height: '100%',
    width: '100%',
  },
  logoBanner:{
    width:325,
    height:140,
    resizeMode: 'contain',

  },
  title:{
    padding:10,
    fontSize:55,
    fontFamily: "monospace"
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button1: {
    height: 50,
    width: 150,
    marginHorizontal: 8,
    backgroundColor: 'rgba(110, 191, 187, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomStartRadius: 15
  },
  button2: {
    height: 50,
    width: 150,
    marginHorizontal: 8,
    backgroundColor: '#6EBFBB',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomEndRadius: 15,
  },
  button3: {
    height: 40,
    width: 316,
    marginTop: 16,
    backgroundColor: '#6EBFBB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  buttonText: {
    fontSize: 25
  },
  leaderboard: {
    backgroundColor: '#6EBFBB',
    width: 316,
    height: '60%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15
  },
  leaderboardText: {
    fontSize: 30,
    marginHorizontal: 20,
    marginTop: 10,
  },
  leaderboardUser: {
    fontSize: 30,
    marginHorizontal: 20,
  }
});

