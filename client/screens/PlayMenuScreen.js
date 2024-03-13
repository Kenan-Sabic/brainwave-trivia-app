import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function PlayMenuScreen () {
  let [fontsLoaded] = useFonts({
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  const navigation = useNavigation();
  return (
  <View style={styles.container}>
    <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
      <View style={styles.container2}>
        <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}  /> 
        <Text style={styles.title}>Brainwave</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button1} >
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Leaderboard')}>Leaderboard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </View>
  )
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
    top: 0,
    marginTop: 50
  },
  background: {
    height: '100%',
    width: '100%',
  },
  logoBanner:{
    width:325,
    height:140,
    resizeMode: 'contain',

  },
  title:{
    padding:10,
    fontSize:55,
    fontFamily: "monospace"
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button1: {
    height: 50,
    width: 150,
    marginHorizontal: 8,
    backgroundColor: '#6EBFBB',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomStartRadius: 15
  },
  button2: {
    height: 50,
    width: 150,
    marginHorizontal: 8,
    backgroundColor: 'rgba(110, 191, 187, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomEndRadius: 15,
  },
  buttonText: {
    fontSize: 25
  },
}
)