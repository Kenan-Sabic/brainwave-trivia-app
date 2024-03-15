import React from 'react';
import { View, ImageBackground, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function PlayMenuScreen() {

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
      <View style={styles.container2}>
          <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}  />
          
          <Text style={styles.title}>BRAINWAVE</Text>
          <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button1} >
            <Text style={styles.buttonText} onPress={() => navigation.navigate('PlayMenu')}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Leaderboard')}>Leaderboard</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.questionsContainer}>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText} onPress={() => navigation.navigate('QuizMCQ')}>Multiple Choice</Text>
            </TouchableOpacity>
         
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => navigation.navigate('QuizTF')}>True/False</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Fill in the blank</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Mixed</Text>
            </TouchableOpacity>
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
    justifyContent: 'center'
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
  darkness: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
    paddingTop: 50
  },
  questionsContainer: {
    width: 316,
    marginTop: 30,
  },
  button: {
    backgroundColor: '#6EBFBB',  //could be changed to more vibrant 
    width: 316,
    height: 50,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    borderBottomEndRadius: 15
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
    borderBottomStartRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Orbitron-Bold' //need to find figma one 
  },
  logoBanner:{
    width:325,
    height:140,
    resizeMode: 'contain'
  },
  title: {
    padding:10,
    fontSize:55,
    color: 'black',
    fontFamily: 'Monofett-Regular' 
  }
});
