import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Mengimpor useNavigation hook
import Navbar from '../NavBar/bottomNavbar';

const Categories = () => {
  const navigation = useNavigation(); // Inisialisasi navigation

  const data = [
    {
      label: 'Running Shoes',
      image: { uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fbe575e0-b8c7-45ea-8a71-fa20ae683c06/infinityrn-4-electric-road-running-shoes-FkGQcG.png' },
    },
    {
      label: 'Basketball Shoes',
      image: { uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c7a5b6f-b57f-4f39-a03a-0083796e8d6a/kobe-9-elite-high-protro-basketball-shoes-5hWjXm.png' },
    },
    {
      label: 'Lifestyle Shoes',
      image: { uri: 'https://static.nike.com/a/images/t_default/32c3e67a-be38-4001-bdca-23743dfd9715/air-max-2013-shoes-ptfbp0.png' },
    },
    {
      label: 'Training Shoes',
      image: { uri: 'https://static.nike.com/a/images/t_default/fd4376e6-e2af-422e-ab93-a09daab09375/metcon-1-og-workout-shoes-tz6pbf.png' },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          {/* Tombol Kembali */}
          <TouchableOpacity style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Categories</Text>
          {/* Ikon Pencarian */}
          <TouchableOpacity
            style={styles.searchIconContainer}
            onPress={() => navigation.navigate('Categories2')} 
          >
            <MaterialIcons name="search" size={24} color="#333333" />
          </TouchableOpacity>
        </View>

        {/* Bar Pencarian */}
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={20} color="#888888" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>

        {/* Tabs Kategori */}
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Women</Text>
            <View style={styles.underline} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bagian Penjualan */}
      <View style={styles.salesContainer}>
        <Text style={styles.salesText}>NIKE SALE</Text>
        <Text style={styles.salesSubText}>Up to 40% off</Text>
      </View>

      <FlatList
  data={data}
  keyExtractor={(item) => item.label}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.categoryItemList}>
      <View style={styles.categoryLabelContainer}>
        <Text style={styles.categoryLabel}>{item.label}</Text>
      </View>
      <Image source={item.image} style={styles.categoryImage} />
    </TouchableOpacity>
  )}
  style={styles.categoryList}
/>


      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};

// Styles untuk layar Categories
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  backButton: {
    paddingRight: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
    textAlign: 'center',
  },
  searchIconContainer: {
    paddingLeft: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  categoryItem: {
    alignItems: 'center',
    flex: 1,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  underline: {
    marginTop: 4,
    height: 2,
    backgroundColor: 'red',
    width: '100%',
  },
  salesContainer: {
    backgroundColor: 'red',
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  salesText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  salesSubText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
  categoryList: {
    paddingHorizontal: 16,
    marginTop: 16,
    flex: 1,  // Untuk memastikan FlatList mengambil space yang tersedia
  },
  categoryItemList: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  categoryImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Categories;
