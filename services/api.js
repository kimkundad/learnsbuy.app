import axios from 'axios';

export const fetcher = async (url) => {
    const { data } = await axios.get(url)
    return data
}

export const resetPassword = async (email) => {
    try {
      const { data } = await axios.post('https://www.learnsbuy.com/api/resetPassword', {
        email
      })
      
      return data
    } catch (err) {
      return err.response.data
    }
  }