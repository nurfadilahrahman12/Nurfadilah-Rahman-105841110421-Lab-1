import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image } from 'react-native';
import homeActive from '../../assets/home-activated.png';
import homeInactive from '../../assets/home-inactive.png';
import shopActive from '../../assets/shop-activated.png';
import shopInactive from '../../assets/shop-inactive.png';
import bagActive from '../../assets/bag-activated.png';
import bagInactive from '../../assets/bag-inactive.png';
import favoritesActive from '../../assets/favorites-activated.png';
import favoritesInactive from '../../assets/favorites-inactive.png';
import profileActive from '../../assets/profil-activated.png';
import profileInactive from '../../assets/profil-inactive.png';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
        </View>
    );
}

function ShopScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Shop</Text>
        </View>
    );
}

function BagScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bag</Text>
        </View>
    );
}

function FavoriteScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Favorite</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Navbar() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let icon;

                    switch (route.name) {
                        case 'Home':
                            icon = focused ? homeActive : homeInactive;
                            break;
                        case 'Shop':
                            icon = focused ? shopActive : shopInactive;
                            break;
                        case 'Bag':
                            icon = focused ? bagActive : bagInactive;
                            break;
                        case 'Favorites':
                            icon = focused ? favoritesActive : favoritesInactive;
                            break;
                        case 'Profile':
                            icon = focused ? profileActive : profileInactive;
                            break;
                        default:
                            icon = focused ? homeActive : homeInactive;
                    }

                    return <Image source={icon} style={{ width: 24, height: 24 }} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Shop" component={ShopScreen} />
            <Tab.Screen name="Bag" component={BagScreen} />
            <Tab.Screen name="Favorites" component={FavoriteScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
