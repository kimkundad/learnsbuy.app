import React from 'react';
import {View,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash'
import HomePage from './src/screens/HomePage'
import OnboardingScreen from './src/screens/OnboardingScreen'
import ProductDetail from './src/screens/ProductDetail'
import VideoPage from './src/screens/VideoPage'

const Stack = createNativeStackNavigator();
const App = ()=>{
  return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
              
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
              <Stack.Screen name="HomePage" component={HomePage} />
              <Stack.Screen name="Product-detail" component={ProductDetail} />
              <Stack.Screen name="VideoPage" component={VideoPage} />
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App;
