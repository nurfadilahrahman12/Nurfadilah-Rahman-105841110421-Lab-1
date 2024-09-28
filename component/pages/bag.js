import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const exchangeRate = 15000;

const BagScreen = () => {
    const [productItems, setProductItems] = useState([
        {
          name: 'Casual',
          image: { uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3d34b19a-00d0-4dd2-83d1-0ec839d92a2e/NIKE+CORTEZ.png' },
          color: 'White',
          size: 'L',
          price: 1700000,
          quantity: 1,
        },
        {
          name: 'Training',
         
          color: 'Broken White',
          size: 'L',
          price: 1500000,
          quantity: 1,
        },
        {
          name: 'Running',
          image: { uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5351ec85-027b-4421-a45c-3f47dfac60a9/PEGASUS+PLUS.png' },
          color: 'Purple',
          size: 'M',
          price: 2100000,
          quantity: 1,
        },
        {
          name: 'Basketball Shoes',
          image: { uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f1595398-a298-432e-a77e-51ed5edd41d9/G.T.+CUT+3+EP.png' },
          color: 'White,Black',
          size: 'M',
          price: 4230000,
          quantity: 1,
        },
      ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (index, change) => {
    const updatedProducts = productItems.map((item, i) => 
      i === index ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    );
    setProductItems(updatedProducts);
  };

  const calculateTotal = () => {
    return productItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatCurrency = (amount) => {
    const amountInUSD = amount / exchangeRate;
    return `$${amountInUSD.toFixed(2)}`; // Format to two decimal places
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Bag</Text>
        <MaterialIcons name="search" size={28} color="#333" style={styles.searchIcon} />
      </View>

      <FlatList
        data={productItems}
        renderItem={({ item, index }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.name}</Text>
              <Text style={styles.productDetail}>Color: {item.color}</Text>
              <Text style={styles.productDetail}>Size: {item.size}</Text>
              <Text style={styles.productPrice}>{formatCurrency(item.price)}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity onPress={() => updateQuantity(index, -1)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(index, 1)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => String(index)}
        style={styles.productList}
      />

      <View style={styles.promoSection}>
        <TextInput
          style={styles.promoInput}
          placeholder="Enter Promo Code"
          value={promoCode}
          onChangeText={(text) => setPromoCode(text)}
        />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summarySection}>
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmountText}>Total amount:</Text>
          <Text style={styles.totalAmountValue}>{formatCurrency(calculateTotal())}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>CHECK OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 6,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  searchIcon: {
    width: 28,
    height: 28,
  },
  productList: {
    marginTop: 12,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productDetail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#333',
  },
  quantityText: {
    fontSize: 16,
    color: '#333',
  },
  promoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  promoInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  applyButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  applyButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  summarySection: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalAmountContainer: {
    backgroundColor: 'white', 
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 20,
    alignItems: 'center',
  },
  totalAmountText: {
    fontSize: 18,
    color: '#333',
  },
  totalAmountValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  checkoutButton: {
    backgroundColor: 'black', 
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  checkoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BagScreen;