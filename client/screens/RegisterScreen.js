import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, Alert, Pressable } from 'react-native';
import { registerUser } from '../services/apiService';
import useStore from '../useStore';

// Components

// Web components
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import ButtonWeb from './components/web/ButtonWeb';

// Mobile components
import ButtonMobile from './components/mobile/ButtonMobile';

export default function RegisterScreen({ navigation }) {
  const screenWidth = Dimensions.get('window').width;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const setUser = useStore(state => state.setUser);
  const setToken = useStore(state => state.setToken);

  let [fontsLoaded] = useFonts({
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
    'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleRegister = async () => {
    console.log('Register button clicked');
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      console.log('Sending registration request', { username, password });
      const response = await registerUser({ username, password });
      console.log('Registration successful', response);
      setUser(response.user);
      setToken(response.token);
      Alert.alert('Success', 'Registration successful');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Registration error', error);
      Alert.alert('Registration Error', error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
        {screenWidth > 800 && (
          <HeaderLargeScreen title="Register" />
        )}
        
        {screenWidth > 800 && (
          <View style={styles.container2}>
            <View style={styles.inputForm}>
              <Text style={styles.loginMessage}>Create your account</Text>
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.inputField}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.inputField}
                secureTextEntry={true}
              />
              <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.inputField}
                secureTextEntry={true}
              />
              <Pressable onPress={handleRegister} disabled={loading} style={styles.button}>
                <Text style={styles.buttonText}>Sign up</Text>
              </Pressable>
            </View>
          </View>
        )}

        {screenWidth <= 800 && (
          <View style={styles.container2}>
            <View style={styles.logo}>
              <Image source={require('./assets/images/Logo.png')} />
            </View>
            <View style={styles.inputFormMobile}>
              <Text style={styles.loginMessageMobile}>Create your account</Text>
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.inputFieldMobile}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.inputFieldMobile}
                secureTextEntry={true}
              />
              <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.inputFieldMobile}
                secureTextEntry={true}
              />
              <Pressable onPress={handleRegister} disabled={loading} style={styles.buttonMobile}>
                <Text style={styles.buttonTextMobile}>Sign up</Text>
              </Pressable>
            </View>
          </View>
        )}
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
  container2:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  inputForm:{
    Maxwidth:1000,
    alignItems:'center',
    backgroundColor:'rgba(75,143,140,0.6)',
    borderRadius:10,
    padding: 30,
    paddingHorizontal: 60,
  },
  inputFormMobile:{
    width: 350,
    alignItems:'center',
    backgroundColor:'rgba(75,143,140,0.6)',
    borderRadius:10,
    padding: 30,
    height: 400,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: 50,
    marginBottom: 50
  },
  title:{
    padding:10,
    fontSize:55,
    fontFamily: "Monofett-Regular"
  },
  loginMessage:{
    padding:10,
    fontFamily:"Orbitron-Bold",
    fontSize: 30
  },
  loginMessageMobile:{
    fontFamily:"Orbitron-Bold",
    fontSize: 18,
    marginBottom: 10
  },

  inputField:{
    backgroundColor:"rgba(250,250,250,0.6)",
    padding:20,
    width:'100%',
    margin:5,
    borderRadius:15,
    textAlign:"center",
    color:"black",
    fontSize:24,
    fontFamily:"Orbitron-Bold",
    opacity: 0.7, 
  },
  inputFieldMobile:{
    backgroundColor: "rgba(250,250,250,0.6)",
    height: 60,
    width: 316,
    margin: 10,
    borderRadius: 15,
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontFamily: "Orbitron-Bold",
    opacity: 0.7, 
  },
  button:{
    backgroundColor: '#6EBFBB',  
        width: 616,
        height: 70,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
  },
  buttonText: {
    fontSize: 30,
    fontFamily: 'Orbitron-Bold'
},
})
