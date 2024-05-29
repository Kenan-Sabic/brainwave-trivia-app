import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import useStore from '../../useStore';

export default function HeaderLargeScreen({ title }) {
  const navigation = useNavigation();
  const username = useStore(state => state.user?.username);

  let [fontsLoaded] = useFonts({
    'Orbitron-Bold': require('../assets/fonts/Orbitron-Bold.ttf'),
    'Monofett-Regular': require('../assets/fonts/Monofett-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.header}>
      <Image source={require('../assets/images/brain.svg')} />
      <Text style={styles.title1}>BRAINWAVE</Text>
      <Pressable onPress={() => navigation.navigate('PlayMenu')}>
        <Text style={styles.navigationPressable}>Home</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Leaderboard')}>
        <Text style={styles.navigationPressable}>Leaderboard</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Info')}>
        <Text style={styles.navigationPressable}>Info</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.navigationPressable}>Log out</Text>
      </Pressable>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.title2}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title1: {
    color: 'white',
    fontSize: 55,
    fontFamily: 'Monofett-Regular',
  },
  title2: {
    position: 'absolute',
    right: 0,
    marginRight: 15,
    color: 'white',
    fontFamily: 'Orbitron-Bold',
    fontSize: 40,
  },
  navigationPressable: {
    marginHorizontal: 15,
    color: 'white',
    fontFamily: 'Orbitron-Bold',
    fontSize: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(110, 191, 187, 0.7)',
    width: '100%',
    marginBottom: 20,
  },
  username: {
    position: 'absolute',
    right: 150, // Adjust this value as needed
    color: 'white',
    fontFamily: 'Orbitron-Bold',
    fontSize: 25,
  },
});
