import { Text, View, } from 'react-native';
import React from 'react';

const ButtonComponent = ({ title, color }) => {
    return (
        <View style={{ marginHorizontal: 10, alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
                <Text style={{
                width: 340,
                height: 50,
                color: 'white',
                backgroundColor: color,
                textAlign: 'center',
                lineHeight: 50,
                fontSize: 20,
                borderRadius: 50,
                top: 5
                }}>{title}</Text>
        </View>
    )
}
export default ButtonComponent;