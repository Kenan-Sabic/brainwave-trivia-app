import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Modal, Dimensions, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useState } from 'react';


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
    <View style={[styles.container2, screenWidth > 800 && styles.container2Desktop]}>
      {screenWidth <= 800 && (<Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}  /> )}
       {screenWidth <= 800 && (<Text style={styles.title1}>BRAINWAVE</Text>)}
       {screenWidth > 800 && (<View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('./assets/images/brain.svg')} style={styles.brain}/>
          <Text style={styles.title1Desk}>BRAINWAVE</Text>
        </View>
        <Text style={styles.title2Desk}>Leaderboards</Text>
       </View>)}
      
       
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button1, screenWidth > 800 && styles.button1Desktop]} onPress={() => navigation.navigate('PlayMenu')} >
            <Text style={[styles.buttonText, screenWidth > 800 && styles.buttonTextDesktop]} onPress={() => navigation.navigate('PlayMenu')}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button2, screenWidth > 800 && styles.button2Desktop]} onPress={() => navigation.navigate('Leaderboard')}>
            <Text style={[styles.buttonText, screenWidth > 800 && styles.buttonTextDesktop]} onPress={() => navigation.navigate('Leaderboard')}>Leaderboard</Text>
          </TouchableOpacity>
        </View>
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
        {screenWidth > 800 && (
          <View style={styles.leaderboardButtons}>
            <TouchableOpacity
                style={styles.leaderButton}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.modalButtonText}>Multiple choice</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.leaderButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.modalButtonText}>True/False</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.leaderButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.modalButtonText}>Fill in the blank</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.leaderButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.modalButtonText}>Mixed questions</Text>
              </TouchableOpacity>
          </View>
        )}
        <View style={[styles.leaderboard, screenWidth > 800 && styles.leaderboardDesktop]}>
          <View>
            <Text style={styles.leaderboardText}>Username</Text>
            <Text style={styles.leaderboardUser}>1.</Text>
            <Text style={styles.leaderboardUser}>2.</Text>
            <Text style={styles.leaderboardUser}>3.</Text>
            <Text style={styles.leaderboardUser}>4.</Text>
            <Text style={styles.leaderboardUser}>5.</Text>
            <Text style={styles.leaderboardUser}>6.</Text>
            <Text style={styles.leaderboardUser}>7.</Text>
            <Text style={styles.leaderboardUser}>8.</Text>
            <Text style={styles.leaderboardUser}>9.</Text>
            <Text style={styles.leaderboardUser}>10.</Text>
          </View>
          <View>
            <Text style={styles.leaderboardText}>Points</Text>
            <Text style={styles.leaderboardUser}>pts</Text>
            <Text style={styles.leaderboardUser}>pts</Text>
            <Text style={styles.leaderboardUser}>pts</Text>
            <Text style={styles.leaderboardUser}>pts</Text>
            <Text style={styles.leaderboardUser}>pts</Text>
            <Text style={styles.leaderboardUser}>pts</Text>
            <Text style={styles.leaderboardUser}>pts</Text>
            <Text style={styles.leaderboardUser}>pts</Text>
            <Text style={styles.leaderboardUser}>pts</Text>
            <Text style={styles.leaderboardUser}>pts</Text>
          </View>
        </View>
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

  },
  title1:{
    fontSize:55,
    fontFamily: 'Monofett-Regular'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  button1Desktop: {
    height: 70,
    width: 300,
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
  button2Desktop: {
    height: 70,
    width: 300,
    marginHorizontal: 8,
    backgroundColor: '#6EBFBB',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomEndRadius: 15
  },
  buttonTextDesktop: {
    fontSize: 30,
    fontFamily: 'Orbitron-Bold'
  },
  button3: {
    height: 40,
    width: 316,
    marginTop: 16,
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
    height: '60%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15
  },
  leaderboardDesktop: {
    backgroundColor: '#6EBFBB',
    width: 1000,
    height: 600,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 30
  },
  leaderboardText: {
    fontSize: 25,
    marginHorizontal: 20,
    marginTop: 10,
    fontFamily: 'Orbitron-Bold'
  },
  leaderboardUser: {
    fontSize: 30,
    marginHorizontal: 20,
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
  leaderboardButtons: {
    flexDirection: 'row',
    width: 1000,
  },
  leaderButton: {
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#6EBFBB",
    marginTop: 16,
    width: '25%'
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

