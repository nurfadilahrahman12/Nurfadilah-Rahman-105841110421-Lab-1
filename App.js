import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './component/pages/Signup';
import Login from './component/pages/login';
import ForgotPassword from './component/pages/forgotPassword';
import MainPage from './component/pages/mainPages';
import ShopPage from './component/pages/ShopPage';
import CategoriesScreen from './component/pages/categories';
import SearchScreen from './component/pages/search';  
import VisualSearchPage from './component/pages/VisualSearch'; 
import TakePhotoScreen from './component/pages/takePhoto';
import CropPhotoScreen from './component/pages/cropTop';
import CategoriesScreen2 from './component/pages/categories2';
import ProductScreen from './component/pages/catalog';
import Catalog2 from './component/pages/catalog2';
import FilterScreen from './component/pages/filterScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign Up">
        <Stack.Screen name="Login" component={Login} options={{headerShown: true}}/>
        <Stack.Screen name="Sign Up" component={SignUp} options={{headerShown: true}}/>
        <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{headerShown: true}}/>
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: true}}/>
        <Stack.Screen name="ShopPage" component={ShopPage} options={{ headerShown: true}}/>
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ headerShown: true }}/>
        <Stack.Screen name="Categories2" component={CategoriesScreen2} options={{ headerShown: true }}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: true }}/> 
        <Stack.Screen name="VisualSearch" component={VisualSearchPage} options={{ headerShown: true }}/>
        <Stack.Screen name="takePhoto" component={TakePhotoScreen} options={{ headerShown: true }}/>
        <Stack.Screen name="CropPhotoScreen" component={CropPhotoScreen} options={{ headerShown: true }}/>
        <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: true }}/>
        <Stack.Screen name="Catalog2" component={Catalog2} options={{ headerShown: true }}/>
        <Stack.Screen name="FilterScreen" component={FilterScreen} options={{ headerShown: true }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
