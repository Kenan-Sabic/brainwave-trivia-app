import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PlayMenuScreen from './screens/PlayMenuScreen';
import LeaderBoardMenuScreen from './screens/LeaderboardMenuScreen';
import QuizMCQScreen from './screens/QuizMCQScreen';
import QuizTFScreen from './screens/QuizTFScreen';
import GameOverScreen from './screens/GameOverScreen';
import AboutScreen from './screens/About';
import GenerateNicknameScreen from './screens/GenerateNicknameScreen';
import RegistrationSuccessScreen from './screens/RegistrationSuccessScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName='Info'>
             <Stack.Screen name="QuizMCQ" component={QuizMCQScreen} options={{headerShown: false, animation: 'default'}} />
            <Stack.Screen name="QuizTF" component={QuizTFScreen} options={{headerShown: false, animation: 'default'}} />
            <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false, animation: 'default'}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false, animation: 'default'}} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false, animation: 'default'}} />
            <Stack.Screen name="Nickname" component={GenerateNicknameScreen} options={{headerShown: false, animation: 'default'}} />
            <Stack.Screen name="RegistrationSuccess" component={RegistrationSuccessScreen} options={{headerShown: false, animation: 'default'}}/>

            <Stack.Screen name="PlayMenu" component={PlayMenuScreen}  options={{headerShown: false, animation: 'default'}}/>
            <Stack.Screen name="Leaderboard" component={LeaderBoardMenuScreen} options={{headerShown: false, animation: 'default'}} />
           
           
            <Stack.Screen name="GameOver" component={GameOverScreen}  options={{headerShown: false, animation: 'default'}}/>
            <Stack.Screen name="About" component={AboutScreen}  options={{headerShown: false, animation: 'default'}}/>
        </Stack.Navigator>
    )
}

