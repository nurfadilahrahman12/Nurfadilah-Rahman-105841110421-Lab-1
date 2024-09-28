import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import ButtonComponent from '../button/buttonMain';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navbar from '../NavBar/bottomNavbar'; 

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';

const bannerImage = { uri: "https://i.pinimg.com/564x/39/74/f0/3974f0090a50c4b4e75bed75473891b2.jpg" };
const { height } = Dimensions.get('window');

const imageData = [
    { id: '1', uri: image1 },
    { id: '2', uri: image2 },
    { id: '3', uri: image3 },
    { id: '4', uri: image4 },
    { id: '5', uri: image5 },
    { id: '6', uri: image6 },
    { id: '7', uri: image7 },
];

function MainPage({ navigation }) {
    const [fontsLoaded, error] = useFonts({
        'Metropolis-SemiBold': require('../../assets/font/Metropolis-SemiBold.otf'),
        'Metropolis-Bold': require('../../assets/font/Metropolis-Bold.otf'),
    });

    useEffect(() => {
        if (fontsLoaded || error) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <ImageBackground source={bannerImage} style={[styles.image, { height: height * 0.7 }]}>
                    <View style={styles.overlay}>
                        <View style={styles.bottomLeft}>
                            <Text style={styles.fashionText}>Nike Shoes</Text>
                            <Text style={styles.saleText}>Sale</Text>
                            <ButtonComponent title="Check" onPress={() => navigation.navigate('ShopPage')} color="#FF0000" borderRadius={2} />
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.newSection}>
                    <View style={styles.headerRow}>
                        <Text style={styles.newTitle}>New</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ViewAllPage')}>
                            <Text style={styles.viewAllText}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.newSubtitle}>You've never seen it before!</Text>
                    <FlatList
                        data={imageData}
                        horizontal
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ViewAllPage')}>
                                <View style={styles.imageContainer}>
                                    <Image source={item.uri} style={styles.sliderImage} resizeMode="cover" />
                                    <View style={styles.overlayText}>
                                        <Text style={styles.itemTitle}>New</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
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
        paddingBottom: 50,
    },
    image: {
        justifyContent: 'center',
        width: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    bottomLeft: {
        alignItems: 'flex-start',
    },
    fashionText: {
        fontSize: 46,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Metropolis-SemiBold',
    },
    saleText: {
        fontSize: 46,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -10,
        fontFamily: 'Metropolis-SemiBold',
        marginBottom: 10,
    },
    newSection: {
        paddingVertical: 20,
        backgroundColor: 'white',
        width: '100%',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    newTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        fontFamily: 'Metropolis-SemiBold',
    },
    viewAllText: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Metropolis-SemiBold',
    },
    newSubtitle: {
        fontSize: 16,
        color: 'gray',
        marginHorizontal: 15,
        marginBottom: 15,
    },
    imageContainer: {
        width: 150,
        height: 200,
        margin: 10, 
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    sliderImage: {
        width: '100%',
        height: '100%',
    },
    overlayText: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        borderRadius: 5,
    },
    itemTitle: {
        color: 'white',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: 14,
    },
    navbarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingVertical: 0,
        zIndex: 1, 
    },
});

export default MainPage;
