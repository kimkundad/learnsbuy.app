import React from 'react'
import { Text, View,StatusBar,Image } from 'react-native'

const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('OnboardingScreen')
    },3000)
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#32d191'}} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#465bd8" />
            <Image source={require('../assets/img/Learnsbuy_new_web_logo_v2.png')} style={{width:250,height:85}}  /> 
        </View>
    )
}

export default Splash
