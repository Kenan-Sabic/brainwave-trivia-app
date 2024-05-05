import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Modal, Dimensions, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useState } from 'react';

//Components

//Web components
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import LeaderWithButtons from './components/web/leaderboard components/LeaderWithButtons';
import PlayNavButton from './components/web/PlayNavButton';
import LeaderNavButton from './components/web/LeaderNavButton';

//Mobile components
import LeaderboardMobile from './components/mobile/leaderboard components mobile/LeaderboardMobile';
import PlayNavButtonMobile from './components/mobile/PlayNavButtonMobile';
import LeaderNavButtonMobile from './components/mobile/LeaderNavButtonMobile';


export default function LeaderBoardMenuScreen () {
  
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
      <ScrollView showsVerticalScrollIndicator={false}>

        {screenWidth > 800 && (
        
        //THIS IS THE WEB VIEW

        <HeaderLargeScreen title="Leaderboard"></HeaderLargeScreen>)}
        
        {screenWidth > 800 && (
          <View style={styles.container2Desktop}>
          <View style={styles.buttonsContainer}>
          <PlayNavButton opacity={0.7}></PlayNavButton>
          <LeaderNavButton opacity={1}></LeaderNavButton>
          </View>
          <LeaderWithButtons></LeaderWithButtons>
          </View>
        )}

        {screenWidth <= 800 && (
        
        //THIS IS MOBILE VIEW

        <View style={styles.container2}>

          <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner}/> 
          <Text style={styles.title1}>BRAINWAVE</Text>
          <View style={styles.buttonsContainer}>
            <PlayNavButtonMobile opacity={0.7}></PlayNavButtonMobile>
            <LeaderNavButtonMobile opacity={1}></LeaderNavButtonMobile>
          </View>
            <LeaderboardMobile></LeaderboardMobile>
        </View>
       )} 

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
});

