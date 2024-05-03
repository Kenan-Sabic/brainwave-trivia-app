import React from 'react';
import { View, Text, Image, StyleSheet, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';


export default function HeaderLargeScreen ({title}){
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
    
        'Orbitron-Bold': require('../../assets/fonts/Orbitron-Bold.ttf'),
        'Monofett-Regular': require('../../assets/fonts/Monofett-Regular.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={styles.header}>
          <Image source={require('../../assets/images/brain.svg')}/>
          <Text style={styles.title1}>BRAINWAVE</Text>
          <Pressable><Text style={styles.navigationPressable}  onPress={() => navigation.navigate('Welcome')}>Home</Text></Pressable>
          <Pressable><Text style={styles.navigationPressable}  onPress={() => navigation.navigate('Leaderboard')}>Leaderboard</Text></Pressable>
          <Pressable><Text style={styles.navigationPressable}  onPress={() => navigation.navigate('Info')}>Info</Text></Pressable>
          <Text style={styles.title2}>{title}</Text>
        </View>


    )


}



const styles = StyleSheet.create({
    title1: {
        color: 'white',
        fontSize:55,
        fontFamily: 'Monofett-Regular',
      },
      title2: {
        position: 'absolute',
        right: 0,
        marginRight: 15,
        color:'white',
        fontFamily:'Orbitron-Bold',
        fontSize:40,
      },
      navigationPressable:{
        marginLeft:15,
        color:'white',
        fontFamily:'Orbitron-Bold',
        fontSize:25,
      },
      header:{
        flexDirection: 'row', 
        alignItems: 'center',
        backgroundColor:'rgba(110,191,187,0.7)',
        width: '100%',
        marginBottom: 30
      },


})