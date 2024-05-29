import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { getRandomFillBlankQuestions } from '../services/apiService';
import { useNavigation } from '@react-navigation/native';

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

export default function QuizFillInTheBlankScreen() {
    const screenWidth = Dimensions.get('window').width;
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [error, setError] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),
        'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
    });

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await getRandomFillBlankQuestions(10);
                setQuestions(response);
                setCurrentQuestion(response[0]);
                setQuestionNumber(1);
                setSelectedAnswer(null);
                setShowResult(false);
            } catch (error) {
                setError(error);
                console.error('Error fetching questions:', error);
            }
        }

        fetchQuestions();
    }, []);

    const handleAnswerPress = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleSubmit = () => {
        setShowResult(true);
        setTimeout(() => {
            setShowResult(false);
            if (!isCorrectAnswer(selectedAnswer)) {
                navigation.navigate('GameOver');
            } else {
                setSelectedAnswer(null);
                const nextQuestion = questions[(questions.indexOf(currentQuestion) + 1) % questions.length];
                setCurrentQuestion(nextQuestion);
                setQuestionNumber((prevNumber) => prevNumber + 1);
            }
        }, 3000);
    };

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    if (!fontsLoaded || !currentQuestion) {
        return <Text>Loading...</Text>;
    }

    const isCorrectAnswer = (answer) => answer === currentQuestion.correctAnswer;

    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
                <View style={styles.layer}>
                    {screenWidth > 800 ? (
                        <>
                            <HeaderLargeScreen title={'QuizFB'} />
                            <View style={styles.container2}>
                                <QuestionNumber question={`Question ${questionNumber}`} />
                                <QuestionBox question={currentQuestion.text} />
                                <View style={styles.buttons}>
                                    <View style={styles.row}>
                                        <AnswerOption 
                                            answer={currentQuestion.options[0]} 
                                            onPress={() => handleAnswerPress(currentQuestion.options[0])} 
                                            isSelected={selectedAnswer === currentQuestion.options[0]} 
                                            isCorrect={isCorrectAnswer(currentQuestion.options[0])} 
                                            showResult={showResult} 
                                        />
                                        <AnswerOption 
                                            answer={currentQuestion.options[1]} 
                                            onPress={() => handleAnswerPress(currentQuestion.options[1])} 
                                            isSelected={selectedAnswer === currentQuestion.options[1]} 
                                            isCorrect={isCorrectAnswer(currentQuestion.options[1])} 
                                            showResult={showResult} 
                                        />
                                    </View>
                                    <View style={styles.row}>
                                        <AnswerOption 
                                            answer={currentQuestion.options[2]} 
                                            onPress={() => handleAnswerPress(currentQuestion.options[2])} 
                                            isSelected={selectedAnswer === currentQuestion.options[2]} 
                                            isCorrect={isCorrectAnswer(currentQuestion.options[2])} 
                                            showResult={showResult} 
                                        />
                                        <AnswerOption 
                                            answer={currentQuestion.options[3]} 
                                            onPress={() => handleAnswerPress(currentQuestion.options[3])} 
                                            isSelected={selectedAnswer === currentQuestion.options[3]} 
                                            isCorrect={isCorrectAnswer(currentQuestion.options[3])} 
                                            showResult={showResult} 
                                        />
                                    </View>
                                </View>
                                <SubmitAnswer onSubmit={handleSubmit} />
                            </View>
                        </>
                    ) : (
                        <View style={styles.container2}>
                            <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner} />
                            <Text style={styles.title1}>BRAINWAVE</Text>
                            <QuestionNumberMobile question={`Question ${questionNumber}`} />
                            <QuestionBoxMobile question={currentQuestion.text} />
                            <View style={styles.buttonsMobile}>
                                <View style={styles.rowMobile}>
                                    <AnswerOptionMobile 
                                        answer={currentQuestion.options[0]} 
                                        onPress={() => handleAnswerPress(currentQuestion.options[0])} 
                                        isSelected={selectedAnswer === currentQuestion.options[0]} 
                                        isCorrect={isCorrectAnswer(currentQuestion.options[0])} 
                                        showResult={showResult} 
                                    />
                                    <AnswerOptionMobile 
                                        answer={currentQuestion.options[1]} 
                                        onPress={() => handleAnswerPress(currentQuestion.options[1])} 
                                        isSelected={selectedAnswer === currentQuestion.options[1]} 
                                        isCorrect={isCorrectAnswer(currentQuestion.options[1])} 
                                        showResult={showResult} 
                                    />
                                </View>
                                <View style={styles.rowMobile}>
                                    <AnswerOptionMobile 
                                        answer={currentQuestion.options[2]} 
                                        onPress={() => handleAnswerPress(currentQuestion.options[2])} 
                                        isSelected={selectedAnswer === currentQuestion.options[2]} 
                                        isCorrect={isCorrectAnswer(currentQuestion.options[2])} 
                                        showResult={showResult} 
                                    />
                                    <AnswerOptionMobile 
                                        answer={currentQuestion.options[3]} 
                                        onPress={() => handleAnswerPress(currentQuestion.options[3])} 
                                        isSelected={selectedAnswer === currentQuestion.options[3]} 
                                        isCorrect={isCorrectAnswer(currentQuestion.options[3])} 
                                        showResult={showResult} 
                                    />
                                </View>
                            </View>
                            <SubmitAnswerMobile onSubmit={handleSubmit} />
                        </View>
                    )}
                    
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
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 1100,
        marginTop: 10,
    },
    buttonsMobile: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
    },
    rowMobile: {
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
