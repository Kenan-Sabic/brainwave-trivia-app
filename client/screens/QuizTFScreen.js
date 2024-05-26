import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { getRandomTrueFalseQuestions } from '../services/apiService';  



// Components
import HeaderLargeScreen from './components/web/HeaderLargeScreen';  
import AnswerOption from './components/web/quiz question components/AnswerOption';  
import QuestionBox from './components/web/quiz question components/QuestionBox';  
import QuestionNumber from './components/web/quiz question components/QuestionNumber';  
import SubmitAnswer from './components/web/quiz question components/SubmitAnswer';  
import AnswerOptionMobile from './components/mobile/quiz question components/AnswerOptionMobile';  
import QuestionBoxMobile from './components/mobile/quiz question components/QuestionBoxMobile';  
import QuestionNumberMobile from './components/mobile/quiz question components/QuestionNumberMobile';  
import SubmitAnswerMobile from './components/mobile/quiz question components/SubmitAnswerMobile';  

export default function QuizTFScreen() {
  const screenWidth = Dimensions.get('window').width;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [error, setError] = useState(null);

  const [fontsLoaded] = useFonts({
    'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),  
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),  
  });

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await getRandomTrueFalseQuestions(1);
        setQuestions(response);
        setCurrentQuestion(response[0]);
      } catch (error) {
        setError(error);
        console.error('Error fetching questions:', error);
      }
    }

    fetchQuestions();
  }, []);

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!fontsLoaded || !currentQuestion) {
    return <Text>Loading...</Text>;  
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
        <View style={styles.layer}>
          {screenWidth > 800 && (
            <>
              <HeaderLargeScreen title={'MCQ Quiz'} />
              <View style={styles.container2}>
                <QuestionNumber question={`Question ${currentQuestion._id}`} />
                <QuestionBox question={currentQuestion.text} />
                <View style={styles.buttons}>
                  <AnswerOption answer={'True'} />
                  <AnswerOption answer={'False'} />
                </View>
                <SubmitAnswer />
              </View>
            </>
          )}

          {screenWidth <= 800 && (
            <View style={styles.container2}>
              <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner} />
              <Text style={styles.title1}>BRAINWAVE</Text>
              <QuestionNumberMobile question={`Question ${currentQuestion._id}`} />
              <QuestionBoxMobile question={currentQuestion.text} />
              <View style={styles.buttonsMobile}>
                <AnswerOptionMobile answer={'True'} />
                <AnswerOptionMobile answer={'False'} />
              </View>
              <SubmitAnswerMobile />
            </View>
          )}

          {/* Display number of questions '' ovdje nam vraca id tipa gjnedsjhew123 umjesto samo broja */}
          <Text style={styles.questionCount}>
            {`Total Questions Fetched: ${questions.length}`}
          </Text>
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
    marginTop: 10,
  },
  buttonsMobile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 8,
  },
  questionCount: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
  },
});
