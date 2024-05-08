import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import ButtonMobile from './components/mobile/ButtonMobile'
import ButtonWeb from './components/web/ButtonWeb';

export default function WelcomeScreen () {
  const screenWidth = Dimensions.get('window').width;
  
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

        
        {screenWidth > 800 && (

          //THIS IS THE WEB VIEW

          <HeaderLargeScreen title="Welcome"></HeaderLargeScreen>       
        )}
        {screenWidth > 800 && (
          <View style={styles.container2}>
            <Text style={styles.titleWeb}>Welcome to Brainwave</Text>
            <ButtonWeb title={'Login'} screen={'Login'}></ButtonWeb>
            <ButtonWeb title={'Sign up'} screen={'Register'}></ButtonWeb>
            <ButtonWeb title={'Play as guest'} screen={'PlayMenu'}></ButtonWeb>
          </View>
        )}

        {screenWidth <= 800 && (
        
        //THIS IS MOBILE VIEW

        <View style={styles. container2}>
          <View style={styles.logo}>
            <Image source={require('./assets/images/Logo.png')}></Image>
          </View>
          <Text style={styles.title}>BRAINWAVE</Text>
          <View style={styles.buttonsContainer}>
            <ButtonMobile title={'Login'} screen={'Login'}></ButtonMobile>
            <ButtonMobile title={'Sign up'} screen={'Register'}></ButtonMobile>
            <ButtonMobile title={'Play as guest'} screen={'PlayMenu'}></ButtonMobile>
          </View>
          <View style={styles.blejac}>
            <Image source={require('./assets/images/blejac.png')}></Image>
          </View>
        </View>
        )}

      
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
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    height: '100%',
    width: '100%',
  },
  logo: {
    marginTop: 50
  },
  buttonsContainer: {
    marginBottom: 150
  },
  blejac: {
    position: 'absolute',
    bottom: 0,
  },
  title: {
    marginVertical: 30,
    fontSize: 55,
    color: 'black',
    fontFamily: 'Monofett-Regular'
  },
  titleWeb: {
    fontSize: 55,
    fontFamily: 'Orbitron-Bold',
    marginBottom: 50  
  }
});

