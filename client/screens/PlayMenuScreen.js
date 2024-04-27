import React from 'react';
import { View, ImageBackground, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function PlayMenuScreen() {

  const navigation = useNavigation();
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
      <View style={[styles.container2, screenWidth > 800 && styles.container2Desktop]}>
      {screenWidth <= 800 && (<Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}  /> )}
      {screenWidth <= 800 && (<Text style={styles.title1}>BRAINWAVE</Text>)}
       {screenWidth > 800 && (<View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('./assets/images/brain.svg')} style={styles.brain}/>
          <Text style={styles.title1Desk}>BRAINWAVE</Text>
        </View>
        <Text style={styles.title2Desk}>Play modes</Text>
       </View>)}
          <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button1, screenWidth > 800 && styles.button1Desktop]} onPress={() => navigation.navigate('PlayMenu')} >
            <Text style={[styles.buttonText, screenWidth > 800 && styles.buttonTextDesktop]} onPress={() => navigation.navigate('PlayMenu')}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button2, screenWidth > 800 && styles.button2Desktop]} onPress={() => navigation.navigate('Leaderboard')}>
            <Text style={[styles.buttonText, screenWidth > 800 && styles.buttonTextDesktop]} onPress={() => navigation.navigate('Leaderboard')}>Leaderboard</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.questionsContainer}>
            <TouchableOpacity style={[styles.button, screenWidth > 800 && styles.buttonDesktop]} >
              <Text style={[styles.buttonText, screenWidth > 800 && styles.buttonTextDesktop]} onPress={() => navigation.navigate('QuizMCQ')}>Multiple Choice</Text>
            </TouchableOpacity>
         
            <TouchableOpacity style={[styles.button, screenWidth > 800 && styles.buttonDesktop]}>
              <Text style={[styles.buttonText, screenWidth > 800 && styles.buttonTextDesktop]} onPress={() => navigation.navigate('QuizTF')}>True/False</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, screenWidth > 800 && styles.buttonDesktop]}>
              <Text style={[styles.buttonText, screenWidth > 800 && styles.buttonTextDesktop]}>Fill in the blank</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, screenWidth > 800 && styles.buttonDesktop]}>
              <Text style={[styles.buttonText, screenWidth > 800 && styles.buttonTextDesktop]}>Mixed</Text>
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
    // marginTop: 50
  },
  container2Desktop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  questionsContainer: {
    width: 616,
    marginTop: 30,
  },
  button: {
    backgroundColor: '#6EBFBB',  
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
  buttonDesktop: {
    backgroundColor: '#6EBFBB',  
    width: 616,
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
    borderBottomEndRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button2Desktop: {
    height: 70,
    width: 300,
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
  button1Desktop: {
    height: 70,
    width: 300,
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
  buttonTextDesktop: {
    fontSize: 30,
    fontFamily: 'Orbitron-Bold'
  },
  logoBanner:{
    width:325,
    height:140,
    resizeMode: 'contain'
  },
  title1: {
    fontSize:55,
    color: 'black',
    fontFamily: 'Monofett-Regular' 
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#4B8F8C',
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title1Desk: {
    color: 'white',
    fontSize:55,
    fontFamily: 'Monofett-Regular'
  },
  title2Desk: {
    fontSize: 55,
    color: 'white',
    marginRight: 30,
    fontWeight: 'bold'
  },
});
