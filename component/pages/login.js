import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ButtonComponent from '../button/button';
import Inputan from '../TextInput/Inputan';

const Login = ()=> {
    return (
        <View style = {{
            flex: 1,
            backgroundColor: '#EEEEEE',
            paddingHorizontal: 30,
            paddingTop: 10,
        }}>
        <TouchableOpacity style = {{
                position: 'absolute',
                top: 60,
                left: 20,
        }}>
        <Image 
            source={require('../../assets/back.png')}
            style={{ width: 30, height: 30}}/>
        </TouchableOpacity>
            <View style = {{
                marginBottom: 60, 
                marginTop: 40,
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 50,
                top: 65
        }}>Login</Text>
            <View style={{
                marginBottom: 10,
                top: 60
        }}>
            <Inputan name="Email" color="black"/>
            <Inputan name="Password" color="black"/>
        
        <TouchableOpacity>
            <Text style={{
                fontSize: 14,
                color: 'black',
                marginTop: 5,
                marginBottom: 50,
                textAlign: 'right',
                top: 60
            }}>Forgot your password?
            </Text>
        </TouchableOpacity>
        </View>
        <ButtonComponent title="LOGIN" color="red"/>
            <Text style={{
                fontSize:14,
                color: 'black',
                textAlign: 'center',
                marginTop: 90,
                marginBottom: 20
        }}>Or login with social account
            </Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
        }}>
            <TouchableOpacity style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                width: 93,
                height:65,
                marginHorizontal: 10
            }}>
                 <Image
                source={require('../../assets/google.png')}
                style={{ width: 50, height: 50}}
            />
        
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                width: 93,
                height: 65,
                marginHorizontal: 10
            }}>
                <Image
                    source={require('../../assets/facebook.png')}
                    style={{ width: 50, height: 50}}
                />
            </TouchableOpacity>
        </View>
        </View>
        </View>
    )
}

export default Login;