import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions } from 'react-native';

//Components

//Web components
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import ButtonWeb from './components/web/ButtonWeb';

//Mobile components
import ButtonMobile from './components/mobile/ButtonMobile';

export default function LoginScreen() {
  const screenWidth = Dimensions.get('window').width;

  const [nickname, setNickname] = useState('');
  const navigation = useNavigation();
  
  let [fontsLoaded] = useFonts({
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
    'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  const generateNickname = () => {
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let generatedNickname = '';
    for (let i = 0; i < 7; i++) {
      const random = Math.floor(Math.random() * char.length);
      generatedNickname += char[random];
    }
    setNickname(generatedNickname);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
        {screenWidth > 800 && (
          //THE WEB VIEW
          <HeaderLargeScreen title="Login"></HeaderLargeScreen>
        )}

        <View style={styles.container2}>
          {screenWidth <= 800 && (
            <View style={styles.logo}>
              <Image source={require('./assets/images/Logo.png')}></Image>
            </View>
          )}
          <View style={screenWidth > 800 ? styles.inputForm : styles.inputFormMobile}>
            <Text style={screenWidth > 800 ? styles.loginMessage : styles.loginMessageMobile}>Enter your nickname</Text>
            <TextInput
              placeholder="Nickname"
              value={nickname}
              onChangeText={setNickname}
              style={screenWidth > 800 ? styles.inputField : styles.inputFieldMobile}
            />
            <Pressable style={screenWidth > 800 ? styles.generateButton : styles.generateButtonMobile} onPress={generateNickname}>
              <Text style={screenWidth > 800 ? styles.generateButtonText : styles.generateButtonTextMobile}>Generate</Text>
            </Pressable>
            <Pressable style={screenWidth > 800 ? styles.playButton : styles.playButtonMobile} onPress={() => navigation.navigate('PlayMenu')}>
              <Text style={screenWidth > 800 ? styles.playButtonText : styles.playButtonTextMobile}>Play</Text>
            </Pressable>
          </View>
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
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputForm: {
    maxWidth: 1000,
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
    padding: 20,
    paddingBottom: 30,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: 0,
    marginBottom: 100,
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
  generateButton: {
    marginTop: 20,
    backgroundColor: '#4B8F8C',
    borderRadius: 15,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  generateButtonMobile: {
    marginTop: 20,
    backgroundColor: '#4B8F8C',
    borderRadius: 15,
    padding: 15,
    width: 316,
    alignItems: 'center',
  },
  generateButtonText: {
    color: 'white',
    fontFamily: 'Orbitron-Bold',
    fontSize: 24,
  },
  generateButtonTextMobile: {
    color: 'white',
    fontFamily: 'Orbitron-Bold',
    fontSize: 20,
  },
  playButton: {
    marginTop: 20,
    backgroundColor: '#4B8F8C',
    borderRadius: 15,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  playButtonMobile: {
    marginTop: 20,
    backgroundColor: '#4B8F8C',
    borderRadius: 15,
    padding: 15,
    width: 316,
    alignItems: 'center',
  },
  playButtonText: {
    color: 'white',
    fontFamily: 'Orbitron-Bold',
    fontSize: 24,
  },
  playButtonTextMobile: {
    color: 'white',
    fontFamily: 'Orbitron-Bold',
    fontSize: 20,
  },
});

