import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navbar from '../NavBar/bottomNavbar'; 
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome

const { width } = Dimensions.get('window');

const saleItems = [
    { id: '1', title: 'Women Air Jordan 1 Low', discount: '20%', oldPrice: '156', newPrice: '125', rating: 4.5, imageUri: 'https://static.nike.com/a/images/t_prod_ss/w_480,c_limit,f_auto,q_auto/4f48d937-652d-41a4-8b3e-a9dd73588a11/women-s-air-jordan-1-low-oxidised-green-cz0775-133-release-date.jpg' },
    { id: '2', title: 'Air Jordan 1 High OG', discount: '15%', oldPrice: '226', newPrice: '193', rating: 4, imageUri: 'https://static.nike.com/a/images/t_prod_ss/w_480,c_limit,f_auto,q_auto/ccd61769-040b-464f-babb-d797ac6ba36e/air-jordan-1-high-og-black-and-gold-dz5485-071-release-date.jpg' },
    { id: '3', title: 'Nike Dunk Low Women', discount: '10%', oldPrice: '200', newPrice: '195', rating: 3.5, imageUri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/150fafa5-6dea-43e1-ae4f-7f523128ccb9/W+DUNK+LOW+NEXT+NATURE.png' },
    { id: '4', title: 'Nike Attack Premium', discount: '20%', oldPrice: '250', newPrice: '235', rating: 5, imageUri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/73fda131-721a-48da-87b7-de739ffdaccf/NIKE+ATTACK+PRM.png' },
];

const newItems = [
    { id: '1', title: 'Nike SB Dunk Low Pro White', oldPrice: '200', newPrice: '175', rating: 4.5, imageUri: 'https://static.nike.com/a/images/t_prod_ss/w_480,c_limit,f_auto,q_auto/42696c49-8fa5-454c-954d-2efee174a3d1/nike-sb-dunk-low-pro-white-fj1674-100-release-date.jpg' },
    { id: '2', title: 'Field General 82 SP White and Black', oldPrice: '175', newPrice: '150', rating: 4, imageUri: 'https://static.nike.com/a/images/t_prod_ss/w_480,c_limit,f_auto,q_auto/fcdf7f42-727b-4ea8-b771-d887371e5c16/field-general-82-sp-white-and-black-hf5603-101-release-date.jpg' },
    { id: '3', title: 'Nike Court Vision Low', newPrice: '175', rating: 4.2, imageUri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/64c495ca-4b36-407b-ade5-67b08b2178ac/NIKE+COURT+VISION+LO.png'},
    { id: '4', title: 'Nike Full Force Low', newPrice: '135', rating: 4.8, imageUri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d066f8c9-ff24-4771-a206-fa381eb8f203/NIKE+FULL+FORCE+LO.png' },
];

function ShopPage({ navigation }) {
    const [fontsLoaded] = useFonts({
        'Metropolis-SemiBold': require('../../assets/font/Metropolis-SemiBold.otf'),
        'Metropolis-Bold': require('../../assets/font/Metropolis-Bold.otf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                    <Icon name="search-outline" size={24} color="black" style={{ marginRight: 25 }} /> 
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    if (!fontsLoaded) {
        return null; 
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <ImageBackground
                    source={{ uri: 'https://i.pinimg.com/564x/40/32/ef/4032ef4710ddf044d81f65040aaf72aa.jpg' }}
                    style={styles.headerImage}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.headerText}>Street Shoes</Text>
                    </View>
                </ImageBackground>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Sale</Text>
                    <Text style={styles.sectionSubtitle}>Super summer sale</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SalePage')}>
                        <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={saleItems}
                        horizontal
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.saleItem}>
                                <View style={styles.imageContainer}>
                                    <Image source={{ uri: item.imageUri }} style={styles.itemImage} />
                                    <TouchableOpacity style={styles.favoriteIcon}>
                                        <Icon name="heart-outline" size={24} color="white" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <View style={styles.priceRow}>
                                    <Icon name="pricetag-outline" size={16} color="gray" />
                                    <Text style={styles.itemPrice}>
                                        <Text style={styles.oldPrice}>{item.oldPrice} </Text>
                                        {item.newPrice}
                                    </Text>
                                </View>
                                <View style={styles.ratingRow}>
                                    <FontAwesome name="star" size={16} color="#FFD700" />
                                    <Text style={styles.ratingText}>{item.rating}</Text>
                                </View>
                                <TouchableOpacity style={styles.discountBadge}>
                                    <Text style={styles.discountText}>{item.discount}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>New</Text>
                    <Text style={styles.sectionSubtitle}>You've never seen it before!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('NewPage')}>
                        <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={newItems}
                        horizontal
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.newItem}>
                                <View style={styles.imageContainer}>
                                    <Image source={{ uri: item.imageUri }} style={styles.itemImage} />
                                    <TouchableOpacity style={styles.favoriteIcon}>
                                        <Icon name="heart-outline" size={24} color="white" />
                                    </TouchableOpacity>
                                    {/* Tambahkan tulisan "New" di sini */}
                                    <TouchableOpacity style={styles.newBadge}>
                                        <Text style={styles.newText}>New</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <View style={styles.priceRow}>
                                    <Icon name="pricetag-outline" size={16} color="gray" />
                                    <Text style={styles.itemPrice}>{item.newPrice}</Text>
                                </View>
                                <View style={styles.ratingRow}>
                                    <FontAwesome name="star" size={16} color="#FFD700" />
                                    <Text style={styles.ratingText}>{item.rating}</Text>
                                </View>
                            </View>
                        )}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>

            <View style={styles.navbarContainer}>
                <Navbar />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollViewContent: {
        paddingBottom: 80, 
    },
    headerImage: {
        width: '100%',
        height: width * 0.6,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    headerText: {
        fontSize: 36,
        color: '#fff',
        fontFamily: 'Metropolis-Bold',
        top: 85
    },
    sectionContainer: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontFamily: 'Metropolis-Bold',
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 10,
    },
    viewAllText: {
        color: 'blue',
        textAlign: 'right',
    },
    saleItem: {
        width: 200,
        marginRight: 20,
    },
    newItem: {
        width: 200,
        marginRight: 20,
    },
    imageContainer: {
        position: 'relative',
    },
    itemImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    favoriteIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'gray',
        borderRadius: 10
    },
    discountBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'red',
        paddingHorizontal: 5,
        paddingVertical: 4,
        borderRadius: 4,
    },
    discountText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    newBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'gray',
        paddingHorizontal: 5,
        paddingVertical: 4,
        borderRadius: 4,
    },
    newText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    itemTitle: {
        fontSize: 16,
        fontFamily: 'Metropolis-SemiBold',
        marginTop: 10,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    itemPrice: {
        marginLeft: 5,
        fontSize: 16,
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    ratingText: {
        marginLeft: 5,
    },
    navbarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default ShopPage;

