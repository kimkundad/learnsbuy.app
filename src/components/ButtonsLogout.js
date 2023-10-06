import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../redux/actions/auth';

const Buttons = ({ btn_text}) => {

    const dispatch = useDispatch();

    const clicklogout = () => {

        dispatch(logout())
        navigation.navigate('Login')
    }

    const navigation = useNavigation();
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#ff0000', width: '60%', height:40,marginBottom:30,borderRadius:10, marginTop:10}} 
            onPress={() => clicklogout()}
            >
                <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',fontFamily:'OpenSans-SemiBold',color:'#fff', fontFamily: "IBMPlexSansThai-Bold",}} >{btn_text}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Buttons

const styles = StyleSheet.create({})