import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

function VisualSearchPage({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_932,c_limit/0859869b-955d-420a-9fbb-b265889c220f/image.jpg' }} 
                style={styles.backgroundImage}
            >
                <View style={styles.overlay}>
                    <Text style={styles.title}>Search for an outfit by taking a photo or uploading an image</Text>
                    <TouchableOpacity 
                        style={styles.takePhotoButton} 
                        onPress={() => navigation.navigate('takePhoto')} 
                    >
                        <Text style={styles.buttonText}>TAKE A PHOTO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.uploadImageButton} 
                        onPress={() => navigation.navigate('CropPhotoScreen')} 
                    >
                        <Text style={styles.buttonText}>UPLOAD AN IMAGE</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
    backgroundImage: {
        width: '100%',
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    takePhotoButton: {
        backgroundColor: '#FF3B30',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginBottom: 15,
    },
    uploadImageButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
        borderColor: '#FF3B30',
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default VisualSearchPage;
