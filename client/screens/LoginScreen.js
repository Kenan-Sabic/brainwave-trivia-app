import React from 'react'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native';

export default function LoginScreen  () {

  const navigation = useNavigation();

  handleLogin = () => {
    // Implement your login logic here, e.g., call an authentication API
    const { email, password } = this.state;

    // Example: Check if the email and password are valid
    if (email && password) {
      // Successfully logged in, navigate to the next screen
      this.props.navigation.navigate('MainStackNavigator', {screen: 'HomeScreen'});
    } else {
      // Handle login failure, show an error message
      alert('Invalid email or password. Please try again.');
    }
  }
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
          <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}  />
          <Text style={styles.title}>BRAINWAVE</Text>
          <Text style={styles.loginMessage}>Log Into your account</Text>
          <TextInput style={styles.inputField}  placeholder="Username"></TextInput>
          <TextInput style={styles.inputField}  placeholder="Password" secureTextEntry></TextInput>
        
        </View>
      </ImageBackground>
    </View>
    
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
    marginTop: 50
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
    backgroundColor:"#6EBFBB",
    padding:20,
    width:"80%",
    margin:5,
    borderRadius:10,
    textAlign:"center",
    color:"black",
    fontSize:24,
    fontFamily:"Orbitron-Bold",
    opacity: 0.7, 
  },
  
})