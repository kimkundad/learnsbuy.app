import React from 'react';
import { View, Text, StyleSheet, } from 'react-native'
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash'
import HomePage from './src/screens/HomePage'
import OnboardingScreen from './src/screens/OnboardingScreen'
import ProductDetail from './src/screens/ProductDetail'
import VideoPage from './src/screens/VideoPage'
import News from './src/screens/News'
import Profile from './src/screens/Profile'
import Course from './src/screens/Course'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Forgot from './src/screens/Forgot'
import EditName from './src/screens/EditName'
import ProfilePassword from './src/screens/ProfilePassword'
import MyCourse from './src/screens/MyCourse'
import BuyHistory from './src/screens/BuyHistory'
import About from './src/screens/About'
import Policy from './src/screens/Policy'
import Terms from './src/screens/Terms'
import PackageAll from './src/screens/PackageAll'
import PackageDetail from './src/screens/PackageDetail'
import BlogDetail from './src/screens/blogDetail'
import VerificationScreen from './src/screens/VerificationScreen'
import NewPassword from './src/screens/NewPassword'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from './src/redux/store';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeTabs} from './src/HomeTabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

// const HomeTabs = () => {
//   return (
//     <Tab.Navigator screenOptions={screenOptions}>
//       <Tab.Screen
//         name="HomePage"
//         component={HomePage}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             console.log('focused', focused)
//             return (
//               <View style={{ alignItems: "center", justifyContent: "center" }}>
//                 <Icon name="home-outline" size={24} color={focused ? "#33cc33" : "##111"} />
//                 <Text style={[focused ? styles.textfocused : styles.text]}>Home</Text>
//               </View>
//             )
//           }
//         }}
//       />
//       <Tab.Screen
//         name="Course"
//         component={Course}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             return (
//               <View style={{ alignItems: "center", justifyContent: "center" }}>
//                 <Icon name="library-outline" size={24} color={focused ? "#33cc33" : "#111"} />
//                 <Text style={[focused ? styles.textfocused : styles.text]}>คอร์สเรียน</Text>
//               </View>
//             )
//           }
//         }}
//       />
//       <Tab.Screen
//         name="MyCourse"
//         component={MyCourse}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             return (
//               <View style={{ alignItems: "center", justifyContent: "center",
//               backgroundColor: "#32d191",
//                   width: Platform.OS == "ios" ? 50 : 60,
//                   height: Platform.OS == "ios" ? 50 : 60,
//                   top: Platform.OS == "ios" ? -10 : -20,
//                   borderRadius: Platform.OS == "ios" ? 25 : 30 }}>
//                 <Icon name="school-outline" size={32} color={focused ? "#ffffff" : "#ffffff"} />
//               </View>
//             )
//           }
//         }}
//       />
//       <Tab.Screen
//         name="News"
//         component={News}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             return (
//               <View style={{ 
//                 alignItems: "center", 
//                 justifyContent: "center",
//                  }}>
//                 <Icon name="receipt-outline" size={24} color={focused ? "#33cc33" : "#111"} />
//                 <Text style={[focused ? styles.textfocused : styles.text]}>News</Text>
//               </View>
//             )
//           }
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             return (
//               <View style={{ alignItems: "center", justifyContent: "center" }}>
//                 <Icon name="person-outline" size={24} color={focused ? "#33cc33" : "#111"} />
//                 <Text style={[focused ? styles.textfocused : styles.text]}>Profile</Text>
//               </View>
//             )
//           }
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

const HomeStack = () => {

  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> 
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="HomePage" component={HomeTabs} />
            <Stack.Screen name="Product-detail" component={ProductDetail} />
            <Stack.Screen name="VideoPage" component={VideoPage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Forgot" component={Forgot} />
            <Stack.Screen name="EditName" component={EditName} />
            <Stack.Screen name="ProfilePassword" component={ProfilePassword} />
            <Stack.Screen name="MyCourse" component={MyCourse} />
            <Stack.Screen name="BuyHistory" component={BuyHistory} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Policy" component={Policy} />
            <Stack.Screen name="Terms" component={Terms} />
            <Stack.Screen name="Course" component={Course} />
            <Stack.Screen name="PackageAll" component={PackageAll} />
            <Stack.Screen name="PackageDetail" component={PackageDetail} />
            <Stack.Screen name="blogDetail" component={BlogDetail} />
            <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
        </PersistGate>
    </Provider>
  )

}

export default HomeStack;


const styles = StyleSheet.create({
  text: {
    fontSize: 12, color: "#000"
  },
  textfocused: {
    fontSize: 12, color: "#33cc33"
  },
});