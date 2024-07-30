import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './component/pages/Signup';
import Login from './component/pages/login';
import ForgotPassword from './component/pages/forgotPassword';
import MainPage from './component/pages/mainPages';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign Up">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Sign Up" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{headerShown: false}}/>
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
