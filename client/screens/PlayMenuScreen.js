import React from 'react';
import { View, ImageBackground, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

//Components

//Web
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import ButtonWeb from './components/web/ButtonWeb';
import PlayNavButton from './components/web/PlayNavButton';
import LeaderNavButton from './components/web/LeaderNavButton';

//Mobile
import ButtonMobile from './components/mobile/ButtonMobile';
import PlayNavButtonMobile from './components/mobile/PlayNavButtonMobile';
import LeaderNavButtonMobile from './components/mobile/LeaderNavButtonMobile';


export default function PlayMenuScreen() {

  const screenWidth = Dimensions.get('window').width;

  let [fontsLoaded] = useFonts({
    'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
      
     
      {screenWidth > 800 && (<HeaderLargeScreen title="Play modes"></HeaderLargeScreen>)}
      {screenWidth > 800 && ( 
          <View style={styles.container2Desktop}> 
            <View style={styles.buttonsContainer}>
              <PlayNavButton></PlayNavButton>
              <LeaderNavButton></LeaderNavButton>
            </View>     
            <View style={styles.questionsContainer}>
              <ButtonWeb screen='QuizMCQ' title="Multiple choice"></ButtonWeb>
              <ButtonWeb screen='QuizTF' title="True/False"></ButtonWeb>
              <ButtonWeb title="Fill in the blank"></ButtonWeb>
              <ButtonWeb title="Mixed"></ButtonWeb>
            </View>
          </View>
      )}

      <View style={styles.container2}>
        {screenWidth <= 800 && (<Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}  /> )}
        {screenWidth <= 800 && (<Text style={styles.title1}>BRAINWAVE</Text>)}
        
        {screenWidth <= 800 && (
            <View>
              <View style={styles.buttonsContainer}>
                <PlayNavButtonMobile></PlayNavButtonMobile>
                <LeaderNavButtonMobile></LeaderNavButtonMobile>
              </View>
              <View style={styles.questionsContainer}>
                <ButtonMobile screen='QuizMCQ' title="Multiple choice"></ButtonMobile>
                <ButtonMobile screen='QuizTF' title="True/False"></ButtonMobile>
                <ButtonMobile title="Fill in the blank"></ButtonMobile> 
                <ButtonMobile title="Mixed"></ButtonMobile>
              </View>
            </View>
        )}
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
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
  },
  container2Desktop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  questionsContainer: {
    marginTop: 32,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32
  },
  logoBanner:{
    width:325,
    height:140,
    resizeMode: 'contain',
    marginTop: 56,
    marginBottom: 32
  },
  title1: {
    fontSize:55,
    color: 'black',
    fontFamily: 'Monofett-Regular' 
  },
});
