import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';



import Home from "./Screens/Home";
import Details from './Screens/Detail';

const Stack = createStackNavigator();

const bgvioletimage = { uri: "https://uploads-ssl.webflow.com/5ec207a448d573153616868a/60e32bec31b8e89caf3fbe59_Mesh%2086.jpg" };

const Themez1 = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"transparent"
  }
}
export default function App() {

  // const [loaded] = useFonts({
  //   "montserrat": require("./assets/fonts/Montserrat-Regular.ttf"),
  //   "montserratlight": require("./assets/fonts/montserratlight.ttf"),
  //   "montserratbold": require("./assets/fonts/Montserrat-Bold.ttf"),
  //   "montserratthin": require("./assets/fonts/Montserrat-Thin.ttf"),
  //   "montserratitalic": require("./assets/fonts/Montserrat-Italic.ttf"),
  // });

//  if (!loaded) return null;

  return (
  <NavigationContainer theme={Themez1}>
    <Stack.Navigator screenOptions={{headerShown:false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}









//****************styling cascade */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent:"center"
    
//   },
//   bgvioletimaged:{
//     flex: 1,
//     justifyContent: "center"
//   },
//   textbase:{
//     color: "white",
//     fontSize: 22,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
    
//   },
 
  
// });


{/* <ImageBackground source={bgvioletimage} resizeMode="cover"  style={styles.bgvioletimaged}>
<Text style={styles.textbase} >Open up App.js to start working on your app!hi boss

</Text>

</ImageBackground> */}
