import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Navbar from '../NavBar/bottomNavbar'; // Assuming you have a Navbar component

const CategoriesScreen2 = ({ navigation }) => {
  const categories = [
    { key: 'Running Shoes' }, { key: 'Basketball Shoes' }, { key: 'Lifestyle Shoes' },
    { key: 'Training Shoes' }, { key: 'Soccer Shoes' }, { key: 'Skateboarding Shoes' },
    { key: 'Golf Shoes' }, { key: 'Tennis Shoes' }, { key: 'Sandals & Slides' }, 
    { key: 'Kids Shoes' },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          {/* Back Icon */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          {/* Title */}
          <Text style={styles.screenTitle}>Nike Shoes</Text>
          {/* Search Icon */}
          <TouchableOpacity
            style={styles.searchIconContainer}
            onPress={() => navigation.navigate('ProductScreen')} // Navigate to ProductScreen
          >
            <MaterialIcons name="search" size={24} color="#333333" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.buttonAll}>
        <Text style={styles.buttonAllText}>VIEW ALL NIKE SHOES</Text>
      </TouchableOpacity>

      <FlatList 
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.key}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 16,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    paddingRight: 8,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
    textAlign: 'center',
  },
  searchIconContainer: {
    paddingLeft: 8,
  },
  buttonAll: {
    backgroundColor: '#FF0000',
    paddingVertical: 16,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonAllText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
  listItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CategoriesScreen2;
