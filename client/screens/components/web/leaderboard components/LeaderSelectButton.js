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
    backgroundColor: '#6EBFBB',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    fontSize: 20,
  },
});
