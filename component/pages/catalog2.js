import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../NavBar/bottomNavbar';

const products = [
  { id: '1', name: 'Nike Air Max', price: 110, discountPrice: 95, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/475ee33b-475d-476d-86d3-363d873792ba/air-max-ishod-shoes-pJPHs6.png', rating: 4.5, isFavorite: false, popularity: 80, dateAdded: '2024-01-01' },
  { id: '2', name: 'Nike Blazer Mid', price: 135, discountPrice: 120, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5804adcd-94a4-41f6-b29b-509a07e86d47/W+BLAZER+LOW+%2777.png', rating: 4.7, isFavorite: false, popularity: 95, dateAdded: '2023-12-01' },
  { id: '3', name: 'Nike Air Force 1', price: 115, discountPrice: 100, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/357a58df-1861-41a0-ac8f-fb7c47d52e3d/WMNS+AIR+FORCE+1+%2707.png', rating: 4.8, isFavorite: true, popularity: 90, dateAdded: '2023-11-15' },
  { id: '4', name: 'Nike React', price: 125, discountPrice: 110, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cb132e5c-9202-488b-a69f-19d013c0f8cf/NIKE+REACT+VISION.png', rating: 4.6, isFavorite: false, popularity: 85, dateAdded: '2023-12-20' },
];

const Catalog2 = ({ navigation }) => {
  const [favoriteProducts, setFavoriteProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('Sneakers');
  const [sortOrder, setSortOrder] = useState('popular');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleFavorite = (id) => {
    const updatedProducts = favoriteProducts.map(product => {
      if (product.id === id) {
        return { ...product, isFavorite: !product.isFavorite };
      }
      return product;
    });
    setFavoriteProducts(updatedProducts);
  };

  // Function to sort products based on different criteria
  const sortProducts = (order) => {
    let sortedProducts = [...favoriteProducts];
    switch (order) {
      case 'popular':
        sortedProducts.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'newest':
        sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case 'customer':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        sortedProducts.sort((a, b) => a.discountPrice - b.discountPrice);
        break;
      case 'highest':
        sortedProducts.sort((a, b) => b.discountPrice - a.discountPrice);
        break;
    }
    setFavoriteProducts(sortedProducts);
  };

  const toggleSortOrder = (order) => {
    setSortOrder(order);
    sortProducts(order);
    setIsModalVisible(false); // Close modal after selecting order
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      
      {/* Show discount badge only for product id 2 and 4 */}
      {(item.id === '2' || item.id === '4') && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>-20%</Text>
        </View>
      )}
  
      <TouchableOpacity style={styles.favoriteIcon} onPress={() => toggleFavorite(item.id)}>
        <Ionicons
          name={item.isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={item.isFavorite ? "red" : "gray"}
        />
      </TouchableOpacity>
  
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.priceContainer}>
        {item.price !== item.discountPrice && (
          <Text style={styles.oldPrice}>${item.price}</Text>
        )}
        <Text style={styles.productPrice}>${item.discountPrice}</Text>
      </View>
  
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="gold" />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Men Nike Shoes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.filterSortContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter-outline" size={20} color="black" />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.sortText}>Sort by: {sortOrder.charAt(0).toUpperCase() + sortOrder.slice(1)}</Text>
          <Ionicons name="chevron-down" size={16} color="black" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {['All', 'Running', 'Casual', 'Basketball', 'Training'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={favoriteProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />

      {/* Modal for sorting options */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide" // Updated to 'slide' for the bottom-up animation
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsModalVisible(false)}>
          <View style={styles.bottomSheetContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Sort by</Text>
              <TouchableOpacity onPress={() => toggleSortOrder('popular')}>
                <Text style={[styles.modalOption, sortOrder === 'popular' && styles.selectedModalOption]}>Popular</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSortOrder('newest')}>
                <Text style={[styles.modalOption, sortOrder === 'newest' && styles.selectedModalOption]}>Newest</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSortOrder('customer')}>
                <Text style={[styles.modalOption, sortOrder === 'customer' && styles.selectedModalOption]}>Customer Rating</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSortOrder('lowest')}>
                <Text style={[styles.modalOption, sortOrder === 'lowest' && styles.selectedModalOption]}>Price: Lowest to Highest</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSortOrder('highest')}>
                <Text style={[styles.modalOption, sortOrder === 'highest' && styles.selectedModalOption]}>Price: Highest to Lowest</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Bottom Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 80, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterSortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginLeft: 8,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    marginRight: 8,
  },
  categories: {
    paddingLeft: 16,
    paddingBottom: 8,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 16,
  },
  selectedCategoryButton: {
    backgroundColor: 'black',
  },
  categoryText: {
    color: 'black',
  },
  selectedCategoryText: {
    color: 'white',
  },
  productList: {
    padding: 16,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    padding: 4,
    borderRadius: 4,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    marginRight: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
  },
  bottomSheetContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '40%', // Limit the height to around 40% of the screen
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: {
    fontSize: 16,
    paddingVertical: 10,
  },
  selectedModalOption: {
    fontWeight: 'bold',
    color: 'red',
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Catalog2;
