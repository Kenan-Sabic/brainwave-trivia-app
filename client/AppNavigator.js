import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PlayMenuScreen from './screens/PlayMenuScreen';
import LeaderBoardMenuScreen from './screens/LeaderboardMenuScreen';
import QuizMCQScreen from './screens/QuizMCQScreen';
import QuizTFScreen from './screens/QuizTFScreen';
import GameOverScreen from './screens/GameOverScreen';



const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="PlayMenu" component={PlayMenuScreen} />
            <Stack.Screen name="Leaderboard" component={LeaderBoardMenuScreen} />
            <Stack.Screen name="QuizMCQ" component={QuizMCQScreen} />
            <Stack.Screen name="QuizTF" component={QuizTFScreen} />
            <Stack.Screen name="GameOver" component={GameOverScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigator;