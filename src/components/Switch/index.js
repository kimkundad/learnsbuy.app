import React, { useEffect, useState } from 'react'
import { Switch } from 'react-native-paper';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { updateProfile } from '../../redux/actions/auth';

const SwitchComponent = () => {

  const dispatch = useDispatch();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [dataNoti, setDataNoti] = React.useState(0);
  const { user, isLoading, error, isLogin, message } = useSelector(state => state.auth);
  const [getNynoti, setgetNynoti] = React.useState(user?.profile?.noti_status);
  const [token, settoken] = useState(user?.token);

  useEffect(() => {
    chwitch()
  },[]);
  const chwitch = async () => {
    if(getNynoti == 1){
      setIsSwitchOn(true)
    }else{
      setIsSwitchOn(false)
    }
  }

  const onToggleSwitch = async () => {
   //
    setIsSwitchOn(!isSwitchOn)
    try {
      const { data } = await axios.post('https://www.learnsbuy.com/api/updateNoti', {
          token
      })
      if(data.status === 200){
          console.log('response', data?.data?.profile)
          dispatch(updateProfile(data?.data))
          if(data?.data?.profile?.noti_status == 1){
            setIsSwitchOn(true)
          }else{
            setIsSwitchOn(false)
          }
      }
      
    } catch (err) {
      console.log('err xx00--> ', err)
      return err.response.data
    }

  };

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch}  />;
};

export default SwitchComponent;

