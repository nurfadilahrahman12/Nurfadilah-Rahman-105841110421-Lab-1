import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  { id: '1', name: 'Nike Air Max', price: 110, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ce5353ba-1a90-44a2-9540-a7e7e561ab23/W+NIKE+AIR+MAX+NUAXIS.png', rating: 4.5, discount: false },
  { id: '2', name: 'Nike Blazer Mid', price: 135, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5804adcd-94a4-41f6-b29b-509a07e86d47/W+BLAZER+LOW+%2777.png', rating: 4.7, discount: true },
  { id: '3', name: 'Nike Air Force 1', price: 115, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/357a58df-1861-41a0-ac8f-fb7c47d52e3d/WMNS+AIR+FORCE+1+%2707.png', rating: 4.8, discount: false },
  { id: '4', name: 'Nike React', price: 125, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cb132e5c-9202-488b-a69f-19d013c0f8cf/NIKE+REACT+VISION.png', rating: 4.6, discount: true },
];

const sortOptions = [
  'Popular',
  'Newest',
  'Customer review',
  'Price: lowest to high',
  'Price: highest to low',
];

const categories = ['All', 'Running', 'Casual', 'Basketball', 'Training', 'Golf Shoes'];

const ProductScreen = () => {
  const [selectedSort, setSelectedSort] = useState('Price: lowest to high');
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setSortModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Men's Nike Shoes</Text>
        <Ionicons name="search-outline" size={24} color="black" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((category) => (
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

      <View style={styles.filterSortContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter-outline" size={20} color="black" />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton} onPress={() => setSortModalVisible(true)}>
          <Text style={styles.sortText}>{selectedSort}</Text>
          <Ionicons name="chevron-down" size={18} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>
              {item.discount ? (
                <>
                  <Text style={styles.originalPrice}>${item.price + 20}</Text> ${item.price}
                </>
              ) : (
                `$${item.price}`
              )}
            </Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="gold" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
          </View>
        )}
      />

      <Modal visible={sortModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.sortModal}>
            <Text style={styles.modalTitle}>Sort by</Text>
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.sortOption,
                  selectedSort === option && styles.selectedSortOption,
                ]}
                onPress={() => handleSortSelect(option)}
              >
                <Text
                  style={[
                    styles.sortOptionText,
                    selectedSort === option && styles.selectedSortOptionText,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 40, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20, 
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  categoryContainer: {
    marginBottom: 20,
    marginLeft: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
  },
  selectedCategoryButton: {
    backgroundColor: '#000000',
  },
  categoryText: {
    fontSize: 14,
    color: '#000000',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
  filterSortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginLeft: 8,
    fontSize: 16,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 4,
  },
  sortText: {
    marginRight: 4,
    fontSize: 16,
  },
  productCard: {
    flex: 1,
    margin: 8,
    padding: 8,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 4,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#A9A9A9',
    marginRight: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sortModal: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  sortOption: {
    paddingVertical: 10,
  },
  selectedSortOption: {
    backgroundColor: '#FF0000',
    borderRadius: 8,
  },
  sortOptionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  selectedSortOptionText: {
    color: '#FFFFFF',
  },
});

export default ProductScreen;
