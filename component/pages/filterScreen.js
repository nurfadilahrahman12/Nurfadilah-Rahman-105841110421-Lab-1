import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';

const FilterScreen = ({ navigation }) => {
  const [minPrice, setMinPrice] = useState(78);
  const [maxPrice, setMaxPrice] = useState(143);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const colors = ['#000000', '#ffffff', '#ff0000', '#e0e0e0', '#d4af37', '#1f1fff'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const categories = ['All', 'Women', 'Men', 'Boys', 'Girls'];

  // Function to handle Apply button click
  const handleApply = () => {
    // Here you can apply filter logic or pass data back if needed
    navigation.goBack(); // Go back to the Catalog2 screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Price Range */}
      <View style={styles.section}>
        <Text style={styles.label}>Price Range</Text>
        <View style={styles.sliderContainer}>
          <Text style={styles.priceText}>Min: ${minPrice}</Text>
          <Slider
            minimumValue={50}
            maximumValue={maxPrice}
            step={1}
            value={minPrice}
            onValueChange={(value) => setMinPrice(value)}
            style={styles.slider}
            minimumTrackTintColor="#FF6347"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#FF6347"
          />
          <Text style={styles.priceText}>Max: ${maxPrice}</Text>
          <Slider
            minimumValue={minPrice}
            maximumValue={200}
            step={1}
            value={maxPrice}
            onValueChange={(value) => setMaxPrice(value)}
            style={styles.slider}
            minimumTrackTintColor="#FF6347"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#FF6347"
          />
        </View>
      </View>

      {/* Colors */}
      <View style={styles.section}>
        <Text style={styles.label}>Colors</Text>
        <View style={styles.colorsContainer}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorCircle,
                { backgroundColor: color, borderWidth: selectedColor === color ? 3 : 1 },
              ]}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </View>
      </View>

      {/* Sizes */}
      <View style={styles.section}>
        <Text style={styles.label}>Sizes</Text>
        <View style={styles.sizesContainer}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                { backgroundColor: selectedSize === size ? '#FF6347' : '#f5f5f5' },
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text style={styles.sizeText}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.label}>Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                { backgroundColor: selectedCategory === category ? '#FF6347' : '#f5f5f5' },
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Apply and Discard Buttons */}
      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.discardButton}>
          <Text style={styles.footerButtonText}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.footerButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 80, 
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sliderContainer: {
    alignItems: 'center',
  },
  slider: {
    width: '100%',
  },
  priceText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  colorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#d3d3d3',
  },
  sizesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  sizeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
  sizeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 10,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  discardButton: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 30,
    marginRight: 10,
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 10,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilterScreen;
