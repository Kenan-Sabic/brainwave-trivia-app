import React from 'react'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';

export default function LoginScreen  () {

  let [fontsLoaded] = useFonts({
    
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
    'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  const navigation = useNavigation();



  return (
    <View >
      <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
        <View style={styles.container}>
          <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}  />
          <Text style={styles.title}>Brainwave</Text>
          <Text style={styles.loginMessage}>Log Into your account</Text>
          <TextInput value="User Name" style={styles.inputField}></TextInput>
          <TextInput value="Password" style={styles.inputField}></TextInput>
        
        </View>
      </ImageBackground>
    </View>
    
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop:30,
    alignItems: 'center',

  },
  background: {
    height: '100%',
    width: '100%',
  },
  logoBanner:{
    flex:0,
    width:325,
    height:140,
    resizeMode: 'contain'
  },
  title:{
    padding:10,
    fontSize:55,
    fontFamily: "Monofett-Regular"
  },
  loginMessage:{
    padding:10,
    fontFamily:"Orbitron-Bold",
    fontSize:18
  },
  inputField:{
    backgroundColor:"#6EBFBB",
    padding:20,
    width:"80%",
    margin:5,
    borderRadius:10,
    textAlign:"center",
    color:"black",
    fontSize:24,
    fontFamily:"Orbitron-Bold",
  },
  
})