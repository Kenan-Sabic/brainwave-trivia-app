import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

//Components

//Web components
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import AnswerOption from './components/web/quiz question components/AnswerOption';
import QuestionBox from './components/web/quiz question components/QuestionBox';
import QuestionNumber from './components/web/quiz question components/QuestionNumber';
import SubmitAnswer from './components/web/quiz question components/SubmitAnswer';

//Mobile components

import AnswerOptionMobile from './components/mobile/quiz question components/AnswerOptionMobile';
import QuestionBoxMobile from './components/mobile/quiz question components/QuestionBoxMobile';
import QuestionNumberMobile from './components/mobile/quiz question components/QuestionNumberMobile';
import SubmitAnswerMobile from './components/mobile/quiz question components/SubmitAnswerMobile';

export default function QuizMCQScreen() {
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
        <View style={styles.layer}>            
            
            {screenWidth > 800 && (
            
              //THIS IS THE WEB VIEW
             
              <HeaderLargeScreen title={'MCQ Quiz'}></HeaderLargeScreen>
            
            )}
            {screenWidth > 800 && (
              <View style={styles.container2}>
                <QuestionNumber question={'Question 22'}></QuestionNumber>
                <QuestionBox question={'Which element is known as the "building block of life" due to its essential role in forming organic compounds?'}></QuestionBox>
                <View style={styles.buttons}>
                  <AnswerOption answer={'Oxygen'}></AnswerOption>
                  <AnswerOption answer={'Carbon'}></AnswerOption>
                </View>
                <View style={styles.buttons}>
                  <AnswerOption answer={'Hydrogen'}></AnswerOption>
                  <AnswerOption answer={'Nitrogen'}></AnswerOption>
                </View>
                  <SubmitAnswer></SubmitAnswer>
              </View>
            )}


            {screenWidth <= 800 && (

              //THIS IS MOBILE VIEW

              <View style={styles.container2}>
                <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}/>
                <Text style={styles.title1}>BRAINWAVE</Text>
                <QuestionNumberMobile question={'Question 22'}></QuestionNumberMobile>
                <QuestionBoxMobile question={'Which element is known as the "building block of life" due to its essential role in forming organic compounds?'}></QuestionBoxMobile>
                <View style={styles.buttonsMobile}>
                  <AnswerOptionMobile answer={'Oxygen'}></AnswerOptionMobile>
                  <AnswerOptionMobile answer={'Carbon'}></AnswerOptionMobile>
                </View>
                <View style={styles.buttonsMobile}>
                  <AnswerOptionMobile answer={'Hydrogen'}></AnswerOptionMobile>
                  <AnswerOptionMobile answer={'Nitrogen'}></AnswerOptionMobile>
                </View>
                <SubmitAnswerMobile></SubmitAnswerMobile>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  layer: { 
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logoBanner: {
    width: 325,
    height: 140,
    resizeMode: 'contain',
  },
  title1: {
    fontSize: 55,
    fontFamily: 'Monofett-Regular',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 1100,
    marginTop: 10
  },
  buttonsMobile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 8
  },
});
