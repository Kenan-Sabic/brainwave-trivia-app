import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
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
                  <Text style={styles.title1Desktop}>BRAINWAVE</Text>
                </View>
                <Text style={styles.title2Desktop}>T/F Questions</Text>
              </View>
            )}

           {/* <Text style={styles.questionText}>Question 22</Text>*/}

            <View style={styles.modalContainer}>
            <Text style={styles.questionText}>Question 22</Text>
              <View style={styles.modalContainer2}>
                <Text style={styles.modalText}>Example of question: Albert Einstein was awarded the Nobel Prize in Physics in 1921.</Text>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.TFButton}>
                  <Text style={styles.buttonText}>True</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TFButton}>
                  <Text style={styles.buttonText}>False</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={[styles.submitButton, styles.buttons]}>
                <Text style={styles.submitText}>Submit Answer</Text>
              </TouchableOpacity>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', //over backgorun for questtions 
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
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#4B8F8C',
    marginBottom:55,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brain: {
    width: 70, 
    height: 70, 
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
  questionText: {
    padding: 20,
    backgroundColor: 'rgba(110, 191, 187, 0.5)',
    color: 'white',
    fontSize: 20,
    borderRadius: 20,
    fontFamily: 'Orbitron-Bold',
    fontWeight: '10',
    marginBottom: 10,
   // marginTop:50, 
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalContainer2: {
    backgroundColor: "rgba(110, 191, 187, 0.5)",
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
    marginBottom: 0,
    textAlign: "center",
    fontFamily: 'Orbitron-Bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%', 
    marginTop: 20,
  },
 
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Orbitron-Bold',
  },
 
  
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  TFButton: {
    backgroundColor: 'rgba(75, 143, 140,1)',
    flex: 1,
    margin: 10,
    borderRadius: 20,
    padding: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: 'rgba(75, 143, 140, 1)',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
 
  submitText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Orbitron-Bold',
  },
});
