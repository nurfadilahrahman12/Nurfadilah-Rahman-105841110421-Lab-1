import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        color:'black',
        fontStyle:'italic'
      }}>Nurfadilah Rahman</Text>
      <Text style={{
        fontSize:30,
        fontStyle:'italic',
        textDecorationLine:'underline',
        textShadowColor:'black',
        color:'green'
      }}>Informatika Unismuh</Text>
      <Text style={{
        fontSize:50,
        fontStyle:'bold',
        color:'blue'
      }}>2021</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
