import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

const Home = () => {
  return (
    <View style={Styledhome.container}>
        <Text>Home from and to </Text>
        <Text>Home from and to </Text>
        <Text>Home from and to </Text>
    </View>
  )
}

export default Home;

const Styledhome = StyleSheet.create({
  container:{
    height:'100vh',
    width:'100vw',
    backgroundColor:"pink",
    display:'flex',
    flexDirection:'column',
    justifyContent:"space-between",
    alignItems:'center',
    alignContent:'center',
  }
})