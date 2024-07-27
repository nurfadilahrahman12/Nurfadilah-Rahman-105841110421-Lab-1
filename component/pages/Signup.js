import { Text, View, Image } from 'react-native';
import React from 'react';
import ButtonComponent from '../button/button';
import Inputan from '../TextInput/Inputan';

const SignUp = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EEEEEE'}}>
    <View style={{ 
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: 25,
      marginTop: 80
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
      <Inputan name= "Email" color="black"/>
      <Inputan name= "Username" color="black"/>
      <Inputan name= "Password" color="black"/>

      <Text style={{
        fontSize: 14,
        marginTop: 5,
        marginBottom: 30,
        textAlign: 'right',
        marginLeft: 175
      }}onPress={()=> navigation.navigate('Login')}>Already have an account?</Text>
      <ButtonComponent title="Sign Up" color="red" onPress={()=> navigation.navigate('Login')}/>
    </View>

    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
      }}>
      <Text style={{
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
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
        borderRadius: 5,
        width: 90,
        height: 80,
        marginRight: 15
      }}>
        <Image source={require('../../assets/google.png')}
        style={{ width: 50, height: 50}}/>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 90,
        height: 80,
        marginRight: 15
      }}>
        <Image source={require('../../assets/facebook.png')}
        style={{width: 50, height: 50}}/>
      </View>
      </View>
    </View>
    </View>

  );
};

export default SignUp;