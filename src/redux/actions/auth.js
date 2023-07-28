import * as type from '../types/auth';
import axios from 'axios'
const apiUrl = `https://61c823f0adee460017260ba9.mockapi.io/api/azer29/users`
import { setCookie } from 'cookies-next';


export const login = (user) => async dispatch => {
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
            console.log('@@@Login response xxx:: ', response?.data?.status);
                  dispatch({
                     type: type.GET_USERS_SUCCESS,
                     payload: response?.data?.data
                   });
                   dispatch({
                    type: type.LOGIN_SUCCESS,
                    payload: response?.data?.data
                });
                navigation.navigate("HomePage")

          } else {

            dispatch({
              type: type.CREATE_USER_FAILED,
              payload: error,
            });

          }

          })
          .catch((response) => {
            dispatch({
              type: type.LOGIN_FAILED,
              payload: 'Email Not Found'
            });
          })
         
  
          // const data =  fetch( apiUrl, {
          //   method: 'GET',
          //   headers: {
          //     Accept: "application/json, text/plain, */*",
          //     "Content-Type": "application/json;charset=UTF-8",
          //   },
          //   // body: JSON.stringify(formData)
          // })
          //   data.then(response => {
          //       return response.json();
          //   }).then(result => {
          
              
          //     dispatch({
          //       type: type.GET_USERS_SUCCESS,
          //       payload: result
          //     });
            
          //       if (result.find(o => o.email === formLogin.email) == null) {
          //         dispatch({
          //           type: type.LOGIN_FAILED,
          //           payload: 'Email Not Found'
          //         });
          //       } else {
          //           let user = result.find(o => o.email === formLogin.email);
          //           if (user.password === formLogin.password) {
          //             dispatch({
          //               type: type.LOGIN_SUCCESS,
          //               payload: user
          //           });
          //           } else {
          //             dispatch({
          //               type: type.LOGIN_FAILED,
          //               payload: 'Wrong Password'
          //             });
          //           }
                    
    
          //       }
 
          // });
       

     
    
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
          navigation.navigate("HomePage")

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





  




