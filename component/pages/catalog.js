import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../NavBar/bottomNavbar'; 
import { useNavigation } from '@react-navigation/native';

const categories = ['All', 'Running', 'Casual', 'Basketball', 'Training'];

const initialProducts = [
  { id: '1', name: 'Nike Air Max', price: 110, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/475ee33b-475d-476d-86d3-363d873792ba/air-max-ishod-shoes-pJPHs6.png', rating: 4.5, isFavorite: false },
  { id: '2', name: 'Nike Blazer Mid', price: 135, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5804adcd-94a4-41f6-b29b-509a07e86d47/W+BLAZER+LOW+%2777.png', rating: 4.7, isFavorite: false },
  { id: '3', name: 'Nike Air Force 1', price: 115, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/357a58df-1861-41a0-ac8f-fb7c47d52e3d/WMNS+AIR+FORCE+1+%2707.png', rating: 4.8, isFavorite: false },
  { id: '4', name: 'Nike React', price: 125, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cb132e5c-9202-488b-a69f-19d013c0f8cf/NIKE+REACT+VISION.png', rating: 4.6, isFavorite: false },
];

const ProductScreen = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigation = useNavigation();

  // Function to toggle favorite status
  const toggleFavorite = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
    ));
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="gold" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>

      {/* Favorite Icon */}
      <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteIcon}>
        <Ionicons
          name={item.isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={item.isFavorite ? "red" : "gray"}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Men's Nike Shoes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Catalog2')}>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonSelected,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextSelected,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Filter and Sorting */}
      <View style={styles.filterSortContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter-outline" size={20} color="black" />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <Ionicons name="swap-vertical-outline" size={20} color="black" />
          <Text style={styles.filterText}>Price: low to high</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridButton}>
          <Ionicons name="grid-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />

      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 100, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 16,
  },
  categoryButton: {
    paddingVertical: 2,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    marginRight: 10,
  },
  categoryButtonSelected: {
    backgroundColor: '#000',
  },
  categoryText: {
    color: '#000',
    fontSize: 14,
    top: 10
  },
  categoryTextSelected: {
    color: '#FFF',
  },
  filterSortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridButton: {
    paddingHorizontal: 5,
  },
  productCard: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    position: 'relative',
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  productDetails: {
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 14,
    color: '#777',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#777',
  },
  favoriteIcon: {
    position: 'absolute',
    right: 16,
    top: 20,
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ProductScreen;
