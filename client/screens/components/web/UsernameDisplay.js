import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useStore from '../../../useStore';

export default function UsernameDisplay() {
  const user = useStore((state) => state.user);

  console.log('Current user in store:', user); // Log the current user
  
  if (!user) {
    return null;
  }

  return (
    <View style={styles.usernameContainer}>
      <Text style={styles.usernameText}>{user.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  usernameContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  usernameText: {
    color: 'white',
    fontSize: 20,
  },
});

