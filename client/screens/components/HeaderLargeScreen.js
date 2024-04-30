import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';


export default function HeaderLargeScreen (){
    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({
    
        'Orbitron-Bold': require('../assets/fonts/Orbitron-Bold.ttf'),
        'Monofett-Regular': require('../assets/fonts/Monofett-Regular.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={styles.header}>
        <Image source={require('../assets/images/brain.svg')}/>
        <Text style={styles.title1Desk}>BRAINWAVE</Text>
        <Pressable><Text style={styles.navigationPressable}  onPress={() => navigation.navigate('Welcome')}>Home</Text></Pressable>
        <Pressable><Text style={styles.navigationPressable}  onPress={() => navigation.navigate('Leaderboard')}>Leaderboard</Text></Pressable>
        <Pressable><Text style={styles.navigationPressable}  onPress={() => navigation.navigate('Info')}>Info</Text></Pressable>
      </View>


    )


}

const {width,height}= Dimensions.get('window');
const isLargeScreen = width>=768;

const styles = StyleSheet.create({
    title1Desk: {
        color: 'white',
        fontSize:55,
        fontFamily: 'Monofett-Regular',
      },
      navigationPressable:{
        marginHorizontal:5,
        color:'white',
        fontFamily:'Orbitron-Bold',
        fontSize:25,
      },
      header:{flexDirection: 'row', 
      alignItems: 'center',
       backgroundColor:'rgba(110,191,187,0.7)',
      display:isLargeScreen ? 'flex' : 'none',
    },


})