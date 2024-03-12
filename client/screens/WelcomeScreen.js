import React from 'react'
import { Button, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';


export default function WelcomeScreen () {
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
        <Image source={require('./assets/images/Logo.png')}></Image>
        </View>
        <Text style={styles.title}>BRAINWAVE</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Play as guest</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blejac}>
          <Image source={require('./assets/images/blejac.png')}></Image>
        </View>
      </View>
      </ImageBackground>
    </View>
    
  );
};

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
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginBottom: 50
  },
  button: {
    backgroundColor: '#6EBFBB',
    width: 310,
    height: 50,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    
  },
  buttonsContainer: {
    marginBottom: 150
  },
  buttonText: {
    fontSize: 25,
    fontFamily: 'Orbitron-Bold'
  },
  blejac: {
    position: 'absolute',
    bottom: 0
  },
  title: {
    marginBottom: 50,
    fontSize: 50,
    color: 'white'
  }
});

