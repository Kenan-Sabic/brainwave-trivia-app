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
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false,
            presentation: 'card', animationTypeForReplace: 'push', animation:'simple_push'}} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false, presentation: 'card', animationTypeForReplace: 'push',animation: 'simple_push'}} />
            <Stack.Screen name="PlayMenu" component={PlayMenuScreen}  options={{headerShown: false}}/>
            <Stack.Screen name="Leaderboard" component={LeaderBoardMenuScreen} options={{headerShown: false}} />
            <Stack.Screen name="QuizMCQ" component={QuizMCQScreen} options={{headerShown: false}} />
            <Stack.Screen name="QuizTF" component={QuizTFScreen} options={{headerShown: false}} />
            <Stack.Screen name="GameOver" component={GameOverScreen}  options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AppNavigator;