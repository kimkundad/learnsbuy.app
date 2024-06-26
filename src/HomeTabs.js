import React from 'react';
import { View, Text, StyleSheet, } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from './screens/HomePage'
import Course from './screens/Course'
import MyCourse from './screens/MyCourse'
import News from './screens/News'
import Login from './screens/Login'
import Profile from './screens/Profile'
import Buffet from './screens/Buffet'
import Tests from './screens/Tests'
import { useSelector, useDispatch } from 'react-redux';

const Tab = createBottomTabNavigator();

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
    background: "#ffffff"
  }
}

export const HomeTabs = () =>  {

  const { user,isLogin} = useSelector(state => state.auth);

    return (
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="HomePage"
            component={HomePage}
            options={{
              tabBarIcon: ({ focused }) => {
                console.log('focused', focused)
                return (
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Icon name="home-outline" size={22} color={focused ? "#2ab37c" : "#111111"} />
                    <Text style={[focused ? styles.textfocused : styles.text]}>Home</Text>
                  </View>
                )
              }
            }}
          />
          <Tab.Screen
            name="Course"
            component={Course}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Icon name="library-outline" size={22} color={focused ? "#2ab37c" : "#111111"} />
                    <Text style={[focused ? styles.textfocused : styles.text]}>Course</Text>
                  </View>
                )
              }
            }}
          />
          <Tab.Screen
            name="Buffet"
            component={Buffet}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Icon name="book-outline" size={22} color={focused ? "#2ab37c" : "#111111"} />
                    <Text style={[focused ? styles.textfocused : styles.text]}>Buffet</Text>
                  </View>
                )
              }
            }}
          />
          {isLogin ?
          <Tab.Screen
          name="MyCourse"
          component={MyCourse}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center",
                backgroundColor: "#32d191",
                    width: Platform.OS == "ios" ? 45 : 55,
                    height: Platform.OS == "ios" ? 45 : 55,
                    top: Platform.OS == "ios" ? -10 : -20,
                    borderRadius: Platform.OS == "ios" ? 25 : 30 }}>
                  <Icon name="school-outline" size={32} color={focused ? "#ffffff" : "#ffffff"} />
                </View>
              )
            }
          }}
        />
    :
    <Tab.Screen
            name="Login"
            component={Login}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ alignItems: "center", justifyContent: "center",
                  backgroundColor: "#32d191",
                      width: Platform.OS == "ios" ? 45 : 55,
                      height: Platform.OS == "ios" ? 45 : 55,
                      top: Platform.OS == "ios" ? -10 : -20,
                      borderRadius: Platform.OS == "ios" ? 25 : 30 }}>
                    <Icon name="school-outline" size={32} color={focused ? "#ffffff" : "#ffffff"} />
                  </View>
                )
              }
            }}
          />
          }
          
          <Tab.Screen
            name="Tests"
            component={Tests}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ 
                    alignItems: "center", 
                    justifyContent: "center",
                     }}>
                    <Icon name="flashlight-outline" size={22} color={focused ? "#2ab37c" : "#111111"} />
                    <Text style={[focused ? styles.textfocused : styles.text]}>Tests</Text>
                  </View>
                )
              }
            }}
          />
          <Tab.Screen
            name="News"
            component={News}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ 
                    alignItems: "center", 
                    justifyContent: "center",
                     }}>
                    <Icon name="receipt-outline" size={22} color={focused ? "#2ab37c" : "#111111"} />
                    <Text style={[focused ? styles.textfocused : styles.text]}>News</Text>
                  </View>
                )
              }
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Icon name="person-outline" size={22} color={focused ? "#2ab37c" : "#111111"} />
                    <Text style={[focused ? styles.textfocused : styles.text]}>Profile</Text>
                  </View>
                )
              }
            }}
          />
        </Tab.Navigator>
      );

}

const styles = StyleSheet.create({
  text: {
    fontSize: 11, color: "#000000", fontFamily: "IBMPlexSansThai-Medium",
  },
  textfocused: {
    fontSize: 11, color: "#2ab37c"
  },
});