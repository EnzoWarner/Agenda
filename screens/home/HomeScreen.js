import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '../../components/Logo/Logo';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', 
    alignItems: 'center' }}>
        <Logo />
      <Text>Home Screen</Text>
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
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    picker: {
      height: 50,
      width: 200,
    },
    logo:{
        width: 100,
        height: 100,
        marginBottom: 20
    }
  });
export default HomeScreen;
