import React from 'react'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import HeaderLargeScreen from './components/web/HeaderLargeScreen';

export default function LoginScreen  () {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
    'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  



  return (
    <View style={styles.container} >
   
      <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
        <HeaderLargeScreen></HeaderLargeScreen>
        <View style={styles.innerContainer}>
        <View style={styles.inputForm}>
          <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}  />
          <Text style={styles.title}>Brainwave</Text>
          
          <Text style={styles.loginMessage}>Log Into your account</Text>
          <TextInput value="Username" style={styles.inputField}></TextInput>
          <TextInput value="Password" style={styles.inputField}></TextInput>
          <Pressable onPress={() => navigation.navigate('PlayMenu')} style={styles.loginButton}><Text style={styles.loginText}>Log In</Text></Pressable>
          <Pressable onPress={() => navigation.navigate('PlayMenu')} style={styles.loginButton}><Text style={styles.loginText}>Play as guest</Text></Pressable>
            <View style={styles.signup}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <Pressable><Text style={styles.signupPressable} onPress={() => navigation.navigate('Register')}>Sign up</Text></Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    
  );
};

const {width,height}= Dimensions.get('window');
const isLargeScreen = width>=768;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop:0,



  },
  innerContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:40,
    

  },
  inputForm:{
    Maxwidth:1000,
    alignItems:'center',
    backgroundColor:isLargeScreen ? 'rgba(75,143,140,0.6)':'none',
    borderRadius:10,
    padding:isLargeScreen ? 30: 0,
    paddingHorizontal:isLargeScreen ? 60: 0,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  logoBanner: {
    flex:0,
    width:325,
    height:140,
    resizeMode: 'contain',
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
    backgroundColor:"rgba(250,250,250,0.6)",
    padding:20,
    width:'100%',
    margin:5,
    borderRadius:10,
    textAlign:"center",
    color:"black",
    fontSize:24,
    fontFamily:"Orbitron-Bold",
    opacity: 0.7, 
  },
  loginButton:{
    marginTop:15,
    backgroundColor:"#6EBFBB",
    width:"90%",
    padding:10,
    textAlign:"center",
    borderRadius:5

  },
  loginText:{
    textAlign:"center",
    width:"100%",
    fontFamily:"Orbitron-Bold",
    fontSize:20
  },
  signup:{
    flex:1,
    flexDirection:'row',
    paddingTop:15,
    
  },
  signupText:{
    fontFamily:"Orbitron-Bold",
    fontSize:18,
    color:'black',
    paddingRight:5
  },
  signupPressable:{
    fontFamily:"Orbitron-Bold",
    fontSize:18,
    color:'white',
    
  }
})