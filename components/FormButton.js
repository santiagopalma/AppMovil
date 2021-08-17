
import React from 'react';
import {Text,TouchableOpacity,StyleSheet } from 'react-native';
import {windowHeight} from '../utils/dimensions';
const FormButton= ({buttonTitle,...rest}) =>{
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: windowHeight / 15,
      backgroundColor: '#1a6199',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      //fontWeight: 'bold',
      color: '#ffffff',
      fontFamily:'JosefinSans-Bold'
    },
  });