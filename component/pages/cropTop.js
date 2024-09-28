import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function CropPhotoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/c08423f2-fd4b-4695-8ac0-6ebfaac41d5f/nike-lookbook.jpg' }}
          style={styles.image}
        />
        <View style={styles.cropOverlay}>
          <View style={styles.cropFrame} />
        </View>
      </View>
      <View style={styles.cameraControls}>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => navigation.navigate('Categories')}
        >
          <Ionicons name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cropOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropFrame: {
    width: 200,
    height: 250,
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  cameraControls: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#000',
  },
  cameraButton: {
    backgroundColor: '#FF3B30',
    padding: 20,
    borderRadius: 50,
  },
});

export default CropPhotoScreen;
