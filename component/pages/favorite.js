import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';  

const exchangeRate = 15000; 

const FavoriteScreen = () => {
  const categoryList = ['Casual', 'Training', 'Running', 'Basketball', 'Skateboarding'];
  const [productItems, setProductItems] = useState([
    {
      name: 'Casual',
      image: { uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b24bc11-4ea0-4ee5-8d16-aa58b518475b/AIR+FORCE+1+%2707+FRESH.png' },
      color: 'Brown',
      size: 'M',
      price: 1700000,
      rating: 4,
      ratingCount: 12,
      isFavorited: false,
      isOnSale: false,
      discountPercentage: 0,
      isNew: false,
    },
    {
      name: 'Training',
      image: { uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51b11036-888b-49c2-8f92-fd5eb97be361/M+AIR+MAX+ALPHA+TRAINER+6.png' },
      color: 'Red',
      size: 'L',
      price: 2500000,
      rating: 5,
      ratingCount: 18,
      isFavorited: false,
      isOnSale: true,
      discountPercentage: 20,
      isNew: false,
    },
    {
      name: 'Running',
      image: { uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fe70154-e4bb-4bcc-9cf0-2efda240916c/NIKE+ZOOMX+VAPORFLY+NEXT%25+3.png' },
      color: 'Black',
      size: 'L',
      price: 2000000,
      rating: 5,
      ratingCount: 42,
      isFavorited: false,
      isOnSale: false,
      discountPercentage: 0,
      isNew: false,
    },
    {
      name: 'Basketball',
      image: { uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1ad373-cfe3-4569-a730-16eb9e1783ae/ZM+LEBRON+NXXT+GEN+AMPD+EP.png' },
      color: 'Green',
      size: 'L',
      price: 5000000,
      rating: 3,
      ratingCount: 28,
      isFavorited: false,
      isOnSale: false,
      discountPercentage: 0,
      isNew: true,
    },
  ]);

  const renderRatingStars = (rating, count) => {
    const stars = Array.from({ length: 5 }).map((_, index) => (
      <FontAwesome
        key={index}
        name={index < rating ? 'star' : 'star-o'}
        size={16}
        color={index < rating ? '#FFD700' : '#ccc'}
      />
    ));
    return (
      <View style={styles.ratingWrapper}>
        {stars}
        <Text style={styles.ratingCount}>({count})</Text>
      </View>
    );
  };

  const toggleFavorite = (index) => {
    const updatedProducts = productItems.map((item, i) =>
      i === index ? { ...item, isFavorited: !item.isFavorited } : item
    );
    setProductItems(updatedProducts);
  };

  const sortByPrice = (ascending) => {
    const sortedItems = [...productItems].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
    setProductItems(sortedItems);
  };

  const formatCurrency = (amount) => {
    const amountInUSD = amount / exchangeRate;
    return `$${amountInUSD.toFixed(2)}`; // Format to two decimal places
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorites</Text>
        <MaterialIcons name="search" size={28} color="#333" style={styles.searchIcon} />
      </View>

      <ScrollView horizontal contentContainerStyle={styles.categoryList}>
        {categoryList.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryLabel}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.filterSection}>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortByPrice(true)}>
          <MaterialIcons name="filter-list" size={18} color="#333" style={styles.filterIcon} />
          <Text style={styles.filterLabel}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortByPrice(false)}>
          <MaterialIcons name="sort" size={18} color="#333" style={styles.filterIcon} />
          <Text style={styles.filterLabel}>Price: High to Low</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={productItems}
        renderItem={({ item, index }) => (
          <View style={styles.productCard}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.productImage} />
              {item.isOnSale && (
                <Text style={styles.saleTag}>{item.discountPercentage}%</Text>
              )}
              {item.isNew && <Text style={styles.newTag}>New</Text>}
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.name}</Text>
              <Text style={styles.productDetail}>Color: {item.color}</Text>
              <Text style={styles.productDetail}>Size: {item.size}</Text>
              {renderRatingStars(item.rating, item.ratingCount)}
              <Text style={styles.productPrice}>{formatCurrency(item.price)}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(index)} style={styles.favoriteButton}>
              <FontAwesome
                name={item.isFavorited ? 'heart' : 'heart-o'}
                size={24}
                color={item.isFavorited ? 'red' : '#ccc'}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => String(index)}
        style={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 18,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 36,
    fontWeight: '700',
  },
  searchIcon: {
    width: 26,
    height: 26,
  },
  categoryList: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#000',
    marginHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
    minWidth: 80,  
    height: 50,  
  },
  categoryLabel: {
    fontSize: 18,
    color: '#FFF',
  },
  filterSection: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  filterButton: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 4,
    paddingHorizontal: 20,
    backgroundColor: '#ddd',
    borderRadius: 8,
    borderColor: '#bbb',
    borderWidth: 4,
  },
  filterIcon: {
    marginRight: 8, 
  },
  filterLabel: {
    fontSize: 14,
    color: '#333',
  },
  productList: {
    marginTop: 10,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 12,
  },
  saleTag: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: 'red',
    color: 'white',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
  newTag: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  productDetail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingCount: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  favoriteButton: {
    padding: 6,
  },
});

export default FavoriteScreen;