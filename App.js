import { Text, View, Image, TextInput } from 'react-native';
import React from 'react';

const App = () => {
  const Inputan = ({ nama, color })=>{
    return(
      <TextInput 
      placeholder={`Masukkan ${nama}`}
      style={{
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 10,
        width: 300,
        height: 50,
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'beige',
        color: color,
      }}/>
    )
  }
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Inputan nama = "email" color = "white"/>
      <Inputan nama = "username" color = "white"/>
      <Inputan nama = "password" color = "black"/>
    </View>
  )  
}

export default App