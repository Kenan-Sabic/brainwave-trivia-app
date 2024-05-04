import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Modal, Dimensions, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import LeaderWithButtons from './components/web/leaderboard components/LeaderWithButtons';
import PlayNavButton from './components/web/PlayNavButton';
import LeaderNavButton from './components/web/LeaderNavButton';


export default function LeaderBoardMenuScreen () {
  
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  const [modalVisible, setModalVisible] = useState(false);

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
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container2}>
       {screenWidth <= 800 && (<Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}  /> )}
       {screenWidth <= 800 && (<Text style={styles.title1}>BRAINWAVE</Text>)}
     
        {screenWidth <= 800 && (
          <TouchableOpacity style={styles.button3}>
            <Text style={styles.buttonText} onPress={() => setModalVisible(true)}>Question type</Text>
        </TouchableOpacity>
        )}

        {screenWidth <= 800 && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          
          onRequestClose={() => setModalVisible(false) }
        >
          <TouchableOpacity  style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          
          <View style={styles.modalContent}>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Multiple choice</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.modalButtonText}>True/False</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                // onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.modalButtonText}>Fill in the blank</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                // onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.modalButtonText}>Mixed questions</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          </TouchableOpacity>
        </Modal>
        )}
        {screenWidth > 800 && (<HeaderLargeScreen title="Leaderboard"></HeaderLargeScreen>)}
        {screenWidth > 800 && (
          <View style={styles.container2Desktop}>
          <View style={styles.buttonsContainer}>
          <PlayNavButton></PlayNavButton>
          <LeaderNavButton></LeaderNavButton>
          </View>
          <LeaderWithButtons></LeaderWithButtons>
          </View>
        )}        
      </View>
      </ScrollView>
     </ImageBackground>
    </View>
    
  );
};

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
  logoBanner:{
    width:325,
    height:140,
    resizeMode: 'contain',
    marginTop: 56,
    marginBottom: 32
  },
  title1:{
    fontSize:55,
    fontFamily: 'Monofett-Regular'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32
  },
  button1: {
    height: 50,
    width: 150,
    marginHorizontal: 8,
    backgroundColor: 'rgba(110, 191, 187, 0.5)',
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
  button2: {
    height: 50,
    width: 150,
    marginHorizontal: 8,
    backgroundColor: '#6EBFBB',
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


  button3: {
    height: 40,
    width: 316,
    marginTop: 32,
    backgroundColor: '#6EBFBB',
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonText: {
    fontSize: 20,
    fontFamily: 'Orbitron-Bold'
  },
  leaderboard: {
    backgroundColor: '#6EBFBB',
    width: 316,
    paddingBottom: 20,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 316,
    alignSelf: 'center',
  },
  modalContent: {
    backgroundColor: "#6EBFBB",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    paddingHorizontal: 5
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: 'Orbitron-Bold'
  },
  modalButton: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
    backgroundColor: "#6EBFBB",
    width: 316,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButtonText: {
    color: "black",
    fontSize: 15,
    fontFamily: 'Orbitron-Bold',
  },

  title1Desk: {
    color: 'white',
    fontSize:55,
    fontFamily: 'Monofett-Regular'
  },
});

