import React from 'react';
import { View } from 'react-native';
import Login from './component/pages/login'; 

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
      <Login/>
    </View>
  );
};

export default App;