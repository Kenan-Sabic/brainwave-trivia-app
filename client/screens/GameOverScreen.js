import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import ButtonWeb from './components/web/ButtonWeb';

export default function QuizMCQScreen() {
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
        <View style={styles.layer}>
            {screenWidth <= 800 && <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner} />}
            {screenWidth <= 800 && <Text style={styles.title1}>BRAINWAVE</Text>}
           
           
            {screenWidth > 800 && (
              <HeaderLargeScreen title={'Game over'}></HeaderLargeScreen>
            )}   


            {screenWidth > 800 && (
              <View style={styles.container2}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContainer2}>
                      <Text style={styles.modalText}> GAME OVER </Text>
                    </View>
                    <ButtonWeb title={'Return to home'} screen={'PlayMenu'}></ButtonWeb>
                  </View>
              </View>
            )}      
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
  container2Desktop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  background: {
    height: '100%',
    width: '100%',
  },
  layer: { //just over backgorund, for all question screens 
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
  title1Desktop: {
    color: 'white',
    fontSize: 55,
    fontFamily: 'Monofett-Regular',
  },
  title2Desktop: {
    fontSize: 55,
    color: 'white',
    marginRight: 30,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#4B8F8C',
    marginBottom: 55,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brain: {
    width: 70,
    height: 70,
  },
  
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width:'50%',
  },
  modalContainer2: {
    width:616,
    backgroundColor: "rgba(255, 230, 179, 0.8)", //need to check colour of the sand to match 
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: 'Orbitron-Bold',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
 
 
  returnButton: {
    backgroundColor: 'rgba(75, 143, 140, 1)',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  returnText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Orbitron-Bold',
    justifyContent:'center',
    alignItems:'center',
  },
});
