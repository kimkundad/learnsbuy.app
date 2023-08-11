import axios from 'axios';

export const fetcher = async (url) => {
    const { data } = await axios.get(url)
    return data
}

export const fetcherPost = async (url) => {
  const token = url[1];
  const { data } = await axios.post(url[0], token)
  return data
}

export const resetPassword = async (email) => {

  const emailx = email;
    try {
      const { data } = await axios.post('https://www.learnsbuy.com/api/resetPassword', emailx)

      return data
    } catch (err) {
      return err.response.data
    }
  }


  export const sendOtp = async ({otp, email}) => {
    console.log('otp xx--> ', otp)
    try {
      const { data } = await axios.post('https://www.learnsbuy.com/api/sendOtp', {
        otp, email
      })
      console.log('data xx--> ', data)
      return data
    } catch (err) {
      console.log('err xx--> ', err)
      return err.response.data
    }
  }

  export const newPasswords = async ({email, password}) => {
    try {
      const { data } = await axios.post('https://www.learnsbuy.com/api/newpassword2', {
        email , password
      })
      console.log('newPassword xx--> ', data)
      return data
    } catch (err) {
      console.log('err xx00--> ', err)
      return err.response.data
    }
  }

  export const newPasswords2 = async ({token, password}) => {
    try {
      const { data } = await axios.post('https://www.learnsbuy.com/api/newpassword3', {
        token , password
      })
      console.log('newPassword xx--> ', data)
      return data
    } catch (err) {
      console.log('err xx00--> ', err)
      return err.response.data
    }
  }


