import React from 'react';
import { View, ImageBackground, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function PlayMenuScreen() {
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
        <View style={styles.darkness}>
          <View style={styles.logo}>
            <Image source={require('./assets/images/Logo.png')} />
          </View>
          <Text style={styles.title}>BRAINWAVE</Text>
          <View style={styles.buttonsContainer}>
          <View style={styles.buttonsContainer2}>
              <TouchableOpacity style={[styles.button, styles.TwoButtons]}>
                <Text style={styles.buttonText}>Play</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.TwoButtons]}>
                <Text style={styles.buttonText}>Leaderboard</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Multiple Choice</Text>
            </TouchableOpacity>
         
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>True/False</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Fill in the blank</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Mixed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    height: '100%',
    width: '100%',
  },
  darkness: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginBottom: 50
  },
  button: {
    backgroundColor: '#6EBFBB',  //could be changed to more vibrant 
    width: 320,
    height: 50,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  TwoButtons: {
    width: 170,  // even both, tried 150 but leaderboard doesnt fit 
  },
  buttonsContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', //space-between doesnt fit ? 
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  buttonsContainer: {
    marginBottom: 130,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Orbitron-Bold' //need to find figma one 
  },
  title: {
    marginBottom: 50,
    fontSize: 50,
    color: 'white' // need to add the front we used in figma 'nicomoi'  
  }
});
