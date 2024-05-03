import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import HeaderLargeScreen from './components/web/HeaderLargeScreen';


export default function WelcomeScreen () {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  
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
      <HeaderLargeScreen title="Welcome"></HeaderLargeScreen>
      <View style={styles.container2}>
        <View style={styles.logo}>
        <Image source={require('./assets/images/Logo.png')}></Image>
        </View>
        <Text style={styles.title}>BRAINWAVE</Text>
        <View style={styles.buttonsContainer}>
          <Pressable style={[styles.button, screenWidth > 800 && styles.buttonDesktop]} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable style={[styles.button, screenWidth > 800 && styles.buttonDesktop]} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Register')}>Sign up</Text>
          </Pressable>
          <Pressable style={[styles.button, screenWidth > 800 && styles.buttonDesktop]} onPress={() => navigation.navigate('PlayMenu')}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('PlayMenu')}>Play as guest</Text>
          </Pressable>
        </View>
        {screenWidth <= 800 && (
        <View style={styles.blejac}>
          <Image source={require('./assets/images/blejac.png')}></Image>
        </View>
        )}
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
    
  },
  background: {
    height: '100%',
    width: '100%',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
  },
  logo: {
  },
  button: {
    backgroundColor: '#6EBFBB',
    width: 310,
    height: 50,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonDesktop: {
    backgroundColor: '#6EBFBB',
    width: 700,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    bottom: 0,
  },
  title: {
    marginBottom: 20,
    fontSize: 55,
    color: 'black',
    fontFamily: 'Monofett-Regular'
  }
});

