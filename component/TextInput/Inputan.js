import { Text, View, Image, TextInput } from 'react-native';
import React from 'react';

const Inputan = ({ nama, color})=> {
    return (
        <TextInput 
        placeholder={`${nama}`}
        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
        style={{
            borderWidth: 1,
            borderColor: 'transparent',
            borderRadius: 2,
            width: 350,
            height: 70,
            marginVertical: 10,
            padding: 10,
            paddingTop: 20,
            backgroundColor:'white',
            color: color,
            fontSize: 16,
            textAlignVertical: 'top',
            textAlign: 'left',
        }}
        />
    )
}

export default Inputan;