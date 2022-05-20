import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Homescreen';

export default function App() {
  return (
    <>
    <StatusBar style='auto'/>
    <View style ={styles.container}>
    
    <HomeScreen/>
    
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  }
 
});
