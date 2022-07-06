import React from 'react';
import { StyleSheet, Text, View,ImageBackground,FlatList,SafeAreaView } from 'react-native';
import {HomeHeader,NFTcard,Focusedstatus} from "../Components/Indexcomp";
import asset from '../Datast_local/asset';
import {NFTData} from "../Datast_local/dummy";


import { 
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';
import { useFonts } from 'expo-font';


const Home = () => {

  const [loaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });
  if (!loaded) return null;
  
  console.log("NFTData-",NFTData);
  return (
    <SafeAreaView style={Styledhome.container}>
      <ImageBackground source={asset.bgvioletimage} style={Styledhome.backimg} resizeMode="cover">
        <Text style={Styledhome.textwrapper01}>Home from and to </Text>
          <FlatList data={NFTData} 
          renderItem={({item}) => (<Text >{item.name}</Text>)}
        />
        </ImageBackground>
    </SafeAreaView>
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
  },
  backimg:{
    height:'100vh',
    width:'100vw',
    display:'flex',
    flexDirection:'column',
    justifyContent:"space-between",
    alignItems:'center',
    alignContent:'center',
  },
  textwrapper01:{
    fontSize:"28px",
    
    fontFamily: 'Montserrat_400Regular',
    
  }

})