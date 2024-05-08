import React, {useState}from 'react'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions } from 'react-native';
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import ButtonMobile from './components/mobile/ButtonMobile'
import ButtonWeb from './components/web/ButtonWeb';


export default function RegisterScreen  () {
  const screenWidth = Dimensions.get('window').width;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState ('')

  const navigation = useNavigation();
  
  let [fontsLoaded] = useFonts({
    
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
    'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container} >
      <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>

        {screenWidth > 800 && (

          //THIS IS THE WEB VIEW

          <HeaderLargeScreen title="Register"></HeaderLargeScreen>       
        )}
        
        {screenWidth > 800 && (
          <View style={styles.container2}>
          <View style={styles.inputForm}>          
            <Text style={styles.loginMessage}>Create your account</Text>
            <TextInput
               placeholder="Username" 
               value={username} 
               onChangeText={setUsername} //navigating backend will be easier this wayy 
               style={styles.inputField} 
            />
            <TextInput
               placeholder="Password" 
               value={password} 
               onChangeText={setPassword} //navigating backend will be easier this wayy 
               style={styles.inputField}
               secureTextEntry={true}
            />
            <TextInput
               placeholder="Confirm Password" 
               value={confirmPassword} 
               onChangeText={setConfirmPassword} //navigating backend will be easier this wayy 
               style={styles.inputField}
               secureTextEntry={true}
            />
            <ButtonWeb title={'Sign up'} screen={'Login'}></ButtonWeb>
            </View>
          </View>
        )}

        {screenWidth <= 800 && (

            //THIS IS MOBILE VIEW

          <View style={styles.container2}>
            <View style={styles.logo}>
              <Image source={require('./assets/images/Logo.png')}></Image>
            </View>
            <View style={styles.inputFormMobile}>          
              <Text style={styles.loginMessageMobile}>Create your account</Text>
              <TextInput
                placeholder="Username" 
                value={username} 
                onChangeText={setUsername} //navigating backend will be easier this wayy 
                style={styles.inputFieldMobile} 
              />
              <TextInput
                placeholder="Password" 
                value={password} 
                onChangeText={setPassword} //navigating backend will be easier this wayy 
                style={styles.inputFieldMobile}
                secureTextEntry={true}
              />
              <TextInput
                placeholder="Confirm password" 
                value={confirmPassword} 
                onChangeText={setConfirmPassword} //navigating backend will be easier this wayy 
                style={styles.inputFieldMobile} 
                secureTextEntry={true}
              />
              <ButtonMobile title={'Sign up'} screen={'Login'}></ButtonMobile>
            </View>
          </View>
        )}

      </ImageBackground>
    </View>
    
  );
};

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
  signup:{
    flex:1,
    flexDirection:'row',
    paddingTop: 20    
  },
  signupText:{
    fontFamily: "Orbitron-Bold",
    fontSize: 18,
    paddingRight:5
  },
  signupPressable:{
    fontFamily: "Orbitron-Bold",
    fontSize: 18,
    color: 'white',
  }
})
