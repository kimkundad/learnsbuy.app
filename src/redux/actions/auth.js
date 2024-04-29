import * as type from '../types/auth';
import React, { useState, useEffect } from "react";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {requestUserPermission, getFcmToken, getNoti} from '../../utils/notificationHelper';

const apiUrl = `https://61c823f0adee460017260ba9.mockapi.io/api/azer29/users`


export const updateProfile = (user) => async dispatch => {

  dispatch({
    type: type.UPDATEPRO_SUCCESS,
    payload: user
});

}

export const update_userprofile = (user,navigation) => async dispatch => {

    console.log('token update', user)

    try {

      axios.request({
        method: "POST",
        url: 'https://www.learnsbuy.com/api/update_userprofile',
        data: user,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
     })
     .then(function (response) {
      console.log('update_userprofile', response?.data?.data);
      if (response?.data?.status === 200) { 

        dispatch({
          type: type.GET_USERS_SUCCESS,
          payload: response?.data?.data
        });
        dispatch({
         type: type.LOGIN_SUCCESS,
         payload: response?.data?.data
     });

      }

     })
     .catch((response) => { })

    } catch (error) {}

}

export const login = (user,navigation) => async dispatch => {
        dispatch({
          type: type.LOGIN_REQUEST,
        });

        try {

          axios.request({
            method: "POST",
            url: 'https://www.learnsbuy.com/api/login',
            data: user,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
         })
         .then(function (response) {

          if (response?.data?.status == 200) { 
            console.log('LOGIN_SUCCESS');
                  AsyncStorage.setItem('token_web', response?.data?.data?.token);
                  requestUserPermission();
                  getFcmToken()
             
                  dispatch({
                     type: type.GET_USERS_SUCCESS,
                     payload: response?.data?.data
                   });
                   dispatch({
                    type: type.LOGIN_SUCCESS,
                    payload: response?.data?.data
                });
                console.log('HomePage');
                navigation.navigate("HomePage")

          } else {
            console.log('LOGIN_FAILED');
            dispatch({
              type: type.LOGIN_FAILED,
              payload: response?.data?.message,
            });

          }

          })
          .catch((response) => {
            dispatch({
              type: type.LOGIN_FAILED,
              payload: 'Email Not Found'
            });
          })
         

     
    
    } catch (error) {
      dispatch({
        type: type.LOGIN_FAILED,
        payload: 'Login Error'
      });
    }
  };

  export const logout = (formLogin) => async dispatch => {
    console.log('@@@logout: ')
    dispatch({
      type: type.SET_LOGOUT,
 
    });

  }

  export const changeTheme = (theme) => async dispatch => {
    dispatch({
      type: type.SET_THEME,
      payload: theme
 
    });

  }

  export const registerUser = (user,navigation) => async dispatch => {
    dispatch({
      type: type.CREATE_USER_REQUEST,
    });

    
      try {
        console.log('@@@Register user 1 ', user);
        axios.request({
          method: "POST",
          url: 'https://www.learnsbuy.com/api/register',
          data: user,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
       })
       .then(function (response) {
        console.log('@@@Register user 2', response?.data);
        if (response?.data?.status == 200) { 
          
          AsyncStorage.setItem('token_web', response?.data?.data?.token);
          requestUserPermission();
          getFcmToken()

          dispatch({
            type: type.GET_USERS_SUCCESS,
            payload: response?.data?.data
          });
          dispatch({
            type: type.LOGIN_SUCCESS,
            payload: response?.data?.data
        });
          dispatch({
            type: type.CREATE_USER_SUCCESS,
            payload: response?.data?.data
          });
          navigation.navigate("VerificationPhone")

        }else{
          dispatch({
            type: type.CREATE_USER_FAILED,
            payload: response?.data?.message
          });
          
        }

       })
       .catch((response) => {
          dispatch({
            type: type.CREATE_USER_FAILED,
            payload: error,
            message: response?.data?.message
          });
       })
  
              // const response =  await fetch(apiUrl, {
              //   method: 'POST',
              //   headers: {
              //     Accept: "application/json, text/plain, */*",
              //     "content-type": "application/json; charset=utf-8",
  
           
              //   },
              //   body: JSON.stringify(values)
              
              // })
              // const result = await response.json();
              //   dispatch({
              //   type: type.CREATE_USER_SUCCESS,
              //   payload: result
              // });
              // navigation.navigate("Login")

       
      } catch (error) {
        dispatch({
          type: type.CREATE_USER_FAILED,
          payload: error
        });
  }
  };





  




