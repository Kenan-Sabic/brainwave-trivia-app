import React, {useState} from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';


export default function SelectButtonMobile () {
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({
    
        'Orbitron-Bold': require('../../../assets/fonts/Orbitron-Bold.ttf'),
        'Monofett-Regular': require('../../../assets/fonts/Monofett-Regular.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }
    return(
        <View style={styles.container}>
                <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Question type</Text>
                </Pressable> 
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          
          onRequestClose={() => setModalVisible(false) }
        >
          <Pressable  style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          
          <View style={styles.modalContent}>
            <View style={styles.modalButtonsContainer}>
              <Pressable
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonTextModal}>Multiple choice</Text>
              </Pressable>
              <Pressable
                style={styles.modalButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.buttonTextModal}>True/False</Text>
              </Pressable>
              <Pressable
                style={styles.modalButton}
                // onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.buttonTextModal}>Fill in the blank</Text>
              </Pressable>
              <Pressable
                style={styles.modalButton}
                // onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.buttonTextModal}>Mixed questions</Text>
              </Pressable>
            </View>
          </View>
          
          </Pressable>
        </Modal>      
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 24
    },
    button: {
        backgroundColor: '#6EBFBB',  
        width: 316,
        height: 50,
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
        fontSize: 20,
        fontFamily: 'Orbitron-Bold'
    },
    buttonTextModal:{
      fontSize: 16,
      fontFamily: 'Orbitron-Bold'
    },
    modalContainer: {
        marginTop: 110,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 316,
        alignSelf: 'center',
      },
    modalContent: {
        width: 316,
        backgroundColor: "#6EBFBB",
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: "center",
        paddingHorizontal: 5
      },
      modalButton: {
        borderRadius: 15,
        marginHorizontal: 8,
        padding: 10,
        marginVertical: 8,
        alignItems: "center",
        backgroundColor: "#6EBFBB",
        width: 316,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },

})