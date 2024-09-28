import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Profile</Text>
                <TouchableOpacity style={styles.searchIconContainer}>
                    <Text style={styles.searchIcon}>🔍</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.profileContainer}>
                <Image
                    source={require('../../assets/dilla.jpg')} // Update sesuai dengan path gambar kamu
                    style={styles.profileImage}
                />
                <View style={styles.profileTextContainer}>
                    <Text style={styles.profileName}>Nurfadilah Rahman</Text>
                    <Text style={styles.profileEmail}>nurfadilahrhmn03@gmail.com</Text>
                </View>
            </View>

            <View style={styles.menuContainer}>
                <MenuItem title="My Orders" detail="Already have 3 orders" />
                <MenuItem title="Shipping Addresses" detail="5 addresses" />
                <MenuItem title="Payment Methods" detail="Visa **17" />
                <MenuItem title="Promocodes" detail="You have special promocodes" />
                <MenuItem title="My Reviews" detail="Reviews for 5 items" />
                <MenuItem title="Settings" detail="Notifications, password" />
            </View>
        </ScrollView>
    );
};

const MenuItem = ({ title, detail }) => (
    <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemContent}>
            <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>{title}</Text>
                <Text style={styles.menuDetail}>{detail}</Text>
            </View>
            <Text style={styles.menuArrow}>›</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 15,
        paddingVertical: 30,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000',
    },
    searchIconContainer: {
        padding: 10,
    },
    searchIcon: {
        fontSize: 28,
        color: '#fff',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginRight: 20,
        borderWidth: 3,
    },
    profileTextContainer: {
        flex: 1,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    profileEmail: {
        fontSize: 16,
        color: '#666',
    },
    menuContainer: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    menuItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 5,
        backgroundColor: 'transparent',
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    menuItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuTextContainer: {
        flex: 1,
    },
    menuText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
    },
    menuDetail: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    menuArrow: {
        fontSize: 20,
        color: '#333',
    },
});

export default ProfileScreen;
