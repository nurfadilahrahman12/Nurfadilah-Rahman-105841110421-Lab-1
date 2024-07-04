import { Text, View, Image } from 'react-native';
import React from 'react';
import ButtonComponent from '../button/button';
import Inputan from '../TextInput/Inputan';

const SignUp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5'}}>
    <View style={{ 
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: 15,
      marginTop: 90
    }}>
      <Text style={{ 
        fontWeight: 'bold', 
        fontSize: 40 
        }}>Sign Up</Text>
    </View>

    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      marginBottom: 100
    }}>
      <Inputan nama= "Email" color="black"/>
      <Inputan nama= "Username" color="black"/>
      <Inputan nama= "Password" color="black"/>

      <Text style={{
        fontSize: 14,
        marginTop: 5,
        marginBottom: 30,
        textAlign: 'right',
        marginLeft: 175
      }}>Already have an account?</Text>
      <ButtonComponent title="Sign Up" color="red"/>
    </View>

    <View style={{ 
      flex: 1, 
      justifyContent: 'flex-start', 
      alignItems: 'center'
      }}>
      <Text style={{
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
        justifyContent: 'space-evenly',
      }}>Or sign up with social account</Text>
      
      <View style={{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}>

      <View style={{
        flex: 1, 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 10,
        width: 120,
        height: 80,
        marginRight: 15
      }}>
        <Image source={require('../../assets/google.png')}
        style={{ width: 30, height: 30}}/>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 120,
        height: 80,
        marginRight: 15
      }}>
        <Image source={require('../../assets/facebook.png')}
        style={{width: 30, height: 30}}/>
      </View>
      </View>
    </View>
    </View>

  );
};

export default SignUp;
