import * as type from '../types/auth'
const initialStateAuth = {
    user: {},
    error: '',
    isLoading: false,
    isLogin: false,
    isFetching: false,
    theme: 'light',
    message: '',
    users:[]
   

  };

  function authReducer(state = initialStateAuth, action) {
    switch (action.type) {
                case type.LOGIN_REQUEST:  
                  return { 
                    ...state, 
                    isLoading: true,
                    error: '',
                    message: ''
                      };
                case type.LOGIN_SUCCESS:
                  return { 
                    ...state,
                    isLoading: false,
                    user: action.payload,
                    isLogin: true,
                    message: 'Login Success',
                    error: ''
                  };
                  case type.UPDATEPRO_SUCCESS:
                  return { 
                    ...state,
                    isLoading: false,
                    user: action.payload,
                    isLogin: true,
                    message: 'Login Success',
                    error: ''
                  };
                case type.LOGIN_FAILED:
                  return {
                    ...state,
                    isLoading: false,
                    error: action.payload,
                    message: 'LOGIN_FAILED',
                  };
                  case type.CREATE_USER_FAILED:
                  return {
                    ...state,
                    isLoading: false,
                    error: 'error',
                    message: action.payload,
                  };
                case type.SET_LOGOUT:
                  return {
                    ...state,
                    message: 'You have logged out',
                    user: {},
                    isLogin: false
                  }
                  case type.SET_THEME:

                    return {
                      ...state,
                      theme: action.payload
                    }

                    case type.CREATE_USER_REQUEST:  
                    return { 
                      ...state, 
                      isLoading: true,
                      error: ''
                        };
                  case type.CREATE_USER_SUCCESS:
                    return { 
                      ...state,
                      isLoading: false,
                      error: '',
                      isLogin: true,
                      user: action.payload,
                      message: 'Register Success',
                    };
                    case type.GET_USERS_SUCCESS:
                      return {
                        ...state,
                        users: action.payload
                      };
         
       
        

      default:
        return state;
    }
  }

  export default authReducer;