import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

export default function LeaderSelectButton({ title, onPress, selected }) {
  return (
    <Pressable 
      onPress={onPress} 
      style={[styles.button, selected && styles.selectedButton]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6EBFBB',
    padding: 10,
    margin: 5,
    width: 200,
    borderRadius: 15,
  },
  selectedButton: {
    backgroundColor: '#F5D7AE',
  },
  buttonText: {
    fontSize: 20,
  },
});
