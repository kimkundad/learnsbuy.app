import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { useSelector } from "react-redux";
import axios from 'axios'

// request permission for notification message
export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFcmToken();
  }
};

// get fcmToken to send notification
export const getFcmToken = async () => {
    console.log(`getFcmToken function called`);
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    try {
      const token = await messaging().getToken();

      if (token) {
        await AsyncStorage.setItem('fcmToken', token);
        console.log(`getFcmToken success ${token}`);

        let token_web = await AsyncStorage.getItem('token_web');


    axios.request({
        method: "POST",
        url: 'https://www.learnsbuy.com/api/updateFcmToken',
        data: { token: token_web, fcmToken: token},
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
     })
     .then(function (response) {

        if (response?.data?.status == 200) { 
            console.log(`updateFcmToken success`);
        }
     }).catch((response) => {
      console.log(`updateFcmToken error ${response}`);
      })

      }
    } catch (error) {
      console.log(`Can not get fcm token ${error}`);
    }
  }else{

    let token_web = await AsyncStorage.getItem('token_web');
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    // const keys = await AsyncStorage.getAllKeys();
    // const result = await AsyncStorage.mult.users

    console.log(`All token_web ${token_web}`);
    console.log(`All fcmToken ${fcmToken}`);

    axios.request({
        method: "POST",
        url: 'https://www.learnsbuy.com/api/updateFcmToken',
        data: { token: token_web, fcmToken: fcmToken},
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
     })
     .then(function (response) {

        if (response?.data?.status == 200) { 
            console.log(`updateFcmToken success`);
        }
     }).catch((response) => {
      console.log(`updateFcmToken error ${response}`);
      })

  }
};

export const getNoti = async () => {

    let token_web = await AsyncStorage.getItem('token_web');
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    // const keys = await AsyncStorage.getAllKeys();
    // const result = await AsyncStorage.mult.users

    console.log(`All token_web ${token_web}`);
    console.log(`All fcmToken ${fcmToken}`);

    axios.request({
        method: "POST",
        url: 'https://www.learnsbuy.com/api/updateFcmToken',
        data: { token: token_web, fcmToken: fcmToken},
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
     })
     .then(function (response) {

        if (response?.data?.status == 200) { 
            console.log(`updateFcmToken success`);
        }
     }).catch((response) => {
        
      })
}