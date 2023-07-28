import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Buttons = ({ btn_text}) => {
    const navigation = useNavigation();
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#32d191', width: '100%', height:40,marginBottom:0,borderRadius:10, marginTop:10}} 
            onPress={() => navigation.replace('HomePage')}
            >
                <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',fontFamily:'OpenSans-SemiBold',color:'#fff'}} >{btn_text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons

const styles = StyleSheet.create({})