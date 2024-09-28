import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('VisualSearch')}>
        <Icon name="search" size={50} color="#FF3B30" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.text}>Finding similar results...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
});
