import React from 'react'
import { Button, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


export default function GameOverScreen() {
  let [fontsLoaded] = useFonts({
    
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
    'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.banner}>
            <Text style={styles.bannerText}>BRAINWAVE</Text>
          </View>
          
          <Text>GAME OVER</Text>
        </View>
      </ImageBackground>
    </View> 
  );
};

const styles = StyleSheet.create({
  //Add fonts, add score, return button, and logo to the banner !! 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    height: '100%',
    width: '100%',
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#6EBFBB",
    paddingVertical: 50,
    //paddingHorizontal: 20,
    alignItems: 'center',
   //  flexDirection:"row", 
  },
  bannerText: {
    marginTop: 25,
    fontSize: 24,
    //fontWeight: 'bold',
    color: 'black', 
  },
});
