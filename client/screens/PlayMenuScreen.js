import React from 'react';
import { View, ImageBackground, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

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
        {screenWidth > 800 && (
          <HeaderLargeScreen title="Play modes"></HeaderLargeScreen>
        )}
        {screenWidth > 800 && (
          <View style={styles.container2}>
            <View style={styles.buttonsContainer}>
              <PlayNavButton opacity={1}></PlayNavButton>
              <LeaderNavButton opacity={0.7}></LeaderNavButton>
            </View>
            <View style={styles.questionsContainer}>
              <ButtonWeb screen='QuizMCQ' title="Multiple choice"></ButtonWeb>
              <ButtonWeb screen='QuizTF' title="True/False"></ButtonWeb>
              <ButtonWeb screen='QuizFB' title="Fill in the blank"></ButtonWeb>
            </View>
          </View>
        )}
        {screenWidth <= 800 && (
          <View style={styles.container2}>
            <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner} />
            <Text style={styles.title1}>BRAINWAVE</Text>
            <View>
              <View style={styles.buttonsContainer}>
                <PlayNavButtonMobile opacity={1}></PlayNavButtonMobile>
                <LeaderNavButtonMobile opacity={0.7}></LeaderNavButtonMobile>
              </View>
              <View style={styles.questionsContainer}>
                <ButtonMobile screen='QuizMCQ' title="Multiple choice"></ButtonMobile>
                <ButtonMobile screen='QuizTF' title="True/False"></ButtonMobile>
                <ButtonMobile screen='QuizFB' title="Fill in the blank"></ButtonMobile>
              </View>
            </View>
          </View>
        )}
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
  logoBanner: {
    width: 325,
    height: 140,
    resizeMode: 'contain',
    marginTop: 56,
    marginBottom: 32
  },
  title1: {
    fontSize: 55,
    color: 'black',
    fontFamily: 'Monofett-Regular'
  },
});
