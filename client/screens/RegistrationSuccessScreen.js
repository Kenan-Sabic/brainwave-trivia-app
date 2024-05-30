import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
  
export default function GameOverScreen() {
  const screenWidth = Dimensions.get('window').width;
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
        <View style={styles.layer}>
          <View style={[styles.container2, screenWidth > 800 && styles.container2Desktop]}>
              <Text style={styles.message}>Registration Successfull!</Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}> GO TO LOGIN </Text>
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
  },
  container2: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  background: {
    height: '100%',
    width: '100%',
  },
  layer: { 
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  message: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  button: {
    backgroundColor: 'rgba(75, 143, 140, 1)',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
