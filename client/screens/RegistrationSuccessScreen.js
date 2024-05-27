// RegistrationSuccessScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const RegistrationSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Registration Successful!</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default RegistrationSuccessScreen;
