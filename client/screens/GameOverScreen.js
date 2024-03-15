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
          
          <View style={styles.container2}>

          <View style={styles.textBlock1}>
            <Text style={styles.text1}>GAME OVER!</Text>

            
            
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlayMenu')} >
              <Text style={styles.buttonText}>PLAY AGAIN</Text>
            </TouchableOpacity> 
        </View>
        

        
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
    marginBottom:0,
    paddingBottom:0,
    fontFamily: 'Monofett-Regular',
        marginTop: 25,
    fontSize: 45,
    //fontWeight: 'bold',
    color: 'black', 
  },
  container2: { //for the game over text, and for the score text also 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //opacity:0.7,
  },
  textBlock1: {
    backgroundColor: 'rgba(243, 179, 109, 0.65)', //matches the color of sand 
    padding: 50,
    borderRadius: 10,
    
  },
  text1: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 25,
    color: 'black',
    //
  },
  button: { //reused from register
    //marginTop: 10,
    backgroundColor:"#6EBFBB",
    paddingLeft:50,
    paddingRight:50,
    paddingTop:20,
    paddingBottom:20,
    width:'80%',
    margin:5,
    borderRadius:10,
    
    color:"white",
    fontSize:24,
    fontFamily:"Orbitron-Bold",
    alignItems:"center",
   },
      buttonText:{
        fontSize: 25,
        fontFamily: 'Orbitron-Bold'
  
      }, 
    
});
