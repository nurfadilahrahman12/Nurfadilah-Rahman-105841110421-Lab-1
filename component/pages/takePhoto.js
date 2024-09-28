import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function TakePhotoScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/c08423f2-fd4b-4695-8ac0-6ebfaac41d5f/nike-lookbook.jpg' }}
                style={styles.image}
            />
            <View style={styles.cameraControls}>
                <Ionicons name="flashlight" size={30} color="white" />
                <TouchableOpacity
                    style={styles.cameraButton}
                    onPress={() => navigation.navigate('CropPhotoScreen')}
                >
                    <Ionicons name="camera" size={30} color="white" />
                </TouchableOpacity>
                <Ionicons name="reload" size={30} color="white" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: '80%',
        resizeMode: 'cover',
    },
    cameraControls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#000',
    },
    cameraButton: {
        backgroundColor: '#FF3B30',
        padding: 20,
        borderRadius: 50,
    },
});

export default TakePhotoScreen;
