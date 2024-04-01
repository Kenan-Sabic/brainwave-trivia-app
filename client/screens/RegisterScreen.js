

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function RegisterScreen() {

  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const isLargeScreen = width >= 800;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let [fontsLoaded] = useFonts({
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
    'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
        <View style={styles.container2}>
          <View style={[styles.input1, isLargeScreen && styles.input2]}>
            <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner} />
            <Text style={styles.title}>BRAINWAVE</Text>
             {/* navbar components above. rest layout of the screen.*/}
            <Text style={styles.loginMessage}>Create Your Account</Text>
            <TextInput 
              placeholder="Username" 
              value={username} 
              onChangeText={setUsername} //navigating backend will be easier this wayy 
              style={styles.inputField} 
            />
            <TextInput 
              placeholder="Password" 
              value={password} 
              onChangeText={setPassword} 
              style={styles.inputField} 
              secureTextEntry={true} // securing passwords, still will be handy for backend 
            />
            <TextInput 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChangeText={setConfirmPassword} 
              style={styles.inputField} 
              secureTextEntry={true} 
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlayMenu')}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   // justifyContent:'center',
    //alignContent :' center', 
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input1: { //for phoneadapt 
    alignItems: 'center',
    backgroundColor: 'rgba(75,143,140,0.2)',
    borderRadius: 11,
    padding: 18,
  },
  input2: { //for desktop adapt
    maxWidth: 500,
    padding: 30,
    paddingHorizontal: 60,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  logoBanner: {
    width: 325,
    height: 140,
    resizeMode: 'contain',
  },
  title: {
    padding: 10,
    fontSize: 55,
    fontFamily: 'Monofett-Regular',
  },
  loginMessage: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
  },
  inputField: {
    backgroundColor: '#6EBFBB',
    padding: 20,
    width: '80%',
    margin: 5,
    borderRadius: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    fontFamily: 'Orbitron-Bold',
    opacity: 0.7, //idk if we should add opacity 
  },

  button: {
    marginTop: 40,
    backgroundColor: '#6EBFBB',
    padding: 20,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 25,
    fontFamily: 'Orbitron-Bold',
    textAlign: 'center',
  },
});
