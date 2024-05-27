import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions } from 'react-native';
import { loginUser } from '../services/apiService'; // Assuming you have a loginUser function
import useStore from '../useStore';

// Components

// Web components
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import ButtonWeb from './components/web/ButtonWeb';

// Mobile components
import ButtonMobile from './components/mobile/ButtonMobile';

export default function LoginScreen() {
  const screenWidth = Dimensions.get('window').width;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const setUser = useStore((state) => state.setUser);
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
    'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleLogin = async () => {
    try {
      const response = await loginUser({ username, password });
      setUser({ username }); // Save the username in the global state
      console.log('Logged in user:', username); // Log the username to the console
      navigation.navigate('PlayMenu');
    } catch (error) {
      setMessage(`Login error: ${error.message}`);
      setVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
        {screenWidth > 800 && (
          // THIS IS THE WEB VIEW
          <HeaderLargeScreen title="Login"></HeaderLargeScreen>
        )}
        {screenWidth > 800 && (
          <View style={styles.container2}>
            <View style={styles.inputForm}>
              <Text style={styles.loginMessage}>Log into your account</Text>
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.inputField}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.inputField}
                secureTextEntry={true}
              />
              <Pressable onPress={handleLogin} disabled={loading} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Register')} style={styles.button}>
                <Text style={styles.buttonText}>Play as guest</Text>
              </Pressable>
              <View style={styles.signup}>
                <Text style={styles.signupText}>Don't have an account?</Text>
                <Pressable>
                  <Text style={styles.signupPressable} onPress={() => navigation.navigate('Register')}>
                    Sign up
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}

        {screenWidth <= 800 && (
          // THIS IS MOBILE VIEW
          <View style={styles.container2}>
            <View style={styles.logo}>
              <Image source={require('./assets/images/Logo.png')}></Image>
            </View>
            <View style={styles.inputFormMobile}>
              <Text style={styles.loginMessageMobile}>Log into your account</Text>
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.inputFieldMobile}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.inputFieldMobile}
                secureTextEntry={true}
              />
              <Pressable onPress={handleLogin} disabled={loading} style={styles.buttonMobile}>
                <Text style={styles.buttonTextMobile}>Login</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Register')} style={styles.buttonMobile}>
                <Text style={styles.buttonTextMobile}>Play as guest</Text>
              </Pressable>
              <View style={styles.signup}>
                <Text style={styles.signupText}>Don't have an account?</Text>
                <Pressable>
                  <Text style={styles.signupPressable} onPress={() => navigation.navigate('Register')}>
                    Sign up
                  </Text>
                </Pressable>
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
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputForm: {
    Maxwidth: 1000,
    alignItems: 'center',
    backgroundColor: 'rgba(75,143,140,0.6)',
    borderRadius: 10,
    padding: 30,
    paddingHorizontal: 60,
  },
  inputFormMobile: {
    width: 350,
    alignItems: 'center',
    backgroundColor: 'rgba(75,143,140,0.6)',
    borderRadius: 10,
    padding: 30,
    height: 450,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    padding: 10,
    fontSize: 55,
    fontFamily: 'Monofett-Regular',
  },
  loginMessage: {
    padding: 10,
    fontFamily: 'Orbitron-Bold',
    fontSize: 30,
  },
  loginMessageMobile: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
    marginBottom: 10,
  },
  inputField: {
    backgroundColor: 'rgba(250,250,250,0.6)',
    padding: 20,
    width: '100%',
    margin: 5,
    borderRadius: 15,
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    fontFamily: 'Orbitron-Bold',
    opacity: 0.7,
  },
  inputFieldMobile: {
    backgroundColor: 'rgba(250,250,250,0.6)',
    height: 60,
    width: 316,
    margin: 10,
    borderRadius: 15,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Orbitron-Bold',
    opacity: 0.7,
  },
  signup: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
  },
  signupText: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
    paddingRight: 5,
  },
  signupPressable: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
    color: 'white',
  },
  button: {
    backgroundColor: '#6EBFBB',
    width: 616,
    height: 70,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 30,
    fontFamily: 'Orbitron-Bold',
  },
  buttonMobile: {
    backgroundColor: '#6EBFBB',
    width: 316,
    height: 50,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonTextMobile: {
    fontSize: 20,
    fontFamily: 'Orbitron-Bold',
  },
});
