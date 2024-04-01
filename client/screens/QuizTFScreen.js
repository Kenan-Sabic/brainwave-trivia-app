import React, { useState } from 'react';
import {StyleSheet,Text,View,Image,ImageBackground,Dimensions,} from 'react-native';
import { useFonts } from 'expo-font';

export default function QuizTFScreen() {
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
          <View style={[styles.container2, screenWidth > 800 && styles.container2Desktop]}>
            {screenWidth <= 800 && <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner} />}
            {screenWidth <= 800 && <Text style={styles.title1}>BRAINWAVE</Text>}
            {screenWidth > 800 && (
              <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('./assets/images/brain.svg')} style={styles.brain} />
                  <Text style={styles.title1Desk}>BRAINWAVE</Text>
                </View>
                <Text style={styles.title2Desk}>T/F Questions</Text>
              </View>
            )}

            <Text style={styles.questionText}>Question 22</Text>
            
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}> Example of question : Albert Einstein was awarded the Nobel Prize in Physics in 1921.</Text>
              </View>
            </View>
          </View>
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
    top: 0,
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#4B8F8C',
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title1Desk: {
    color: 'white',
    fontSize: 55,
    fontFamily: 'Monofett-Regular',
  },
  title2Desk: {
    fontSize: 55,
    color: 'white',
    marginRight: 30,
    fontWeight: 'bold',
  },
  questionText: {
    padding: 20,
    backgroundColor: 'rgba(110, 191, 187, 0.5)',
    color: 'white',
    fontSize: 20,
    borderRadius: 20,
    fontFamily: 'Orbitron-Bold',
    fontWeight: 10,
    marginBottom:10,
  },
  questionTextDesktop: {
    padding: 20,
    fontSize: 30,
    borderRadius: 20,
    fontWeight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  modalContent: {
    backgroundColor: "#6EBFBB",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
    fontFamily: 'Orbitron-Bold',
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#6EBFBB",
  },
  modalButtonText: {
    color: "white",
    textAlign: "center",
    fontFamily: 'Orbitron-Bold',
  },
  questionBox: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    maxWidth: '80%',
    marginTop: 20,
  },
  questionText1: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Orbitron-Bold',
},
});
