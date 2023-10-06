import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { updateProfile } from '../redux/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditName = () => {
    const navigation = useNavigation();
    const { user, isLoading, error, isLogin, message } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [name, setName] = useState(user?.profile?.name);
    const [token, settoken] = useState(user?.token);

    const getfcmToken = async () => {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        console.log(`get fcm token ${fcmToken}`);
    }

    useEffect(() => {
        getfcmToken();
      }, []);

      const handleSubmit = async () => {

        console.log('handleSubmit', name)

        try {
            const { data } = await axios.post('https://www.learnsbuy.com/api/postName', {
                token , name
            })
            if(data.status === 200){
                console.log('response', data?.data)
                dispatch(updateProfile(data?.data))
                navigation.goBack()
            }
            
          } catch (err) {
            console.log('err xx00--> ', err)
            return err.response.data
          }

        // const response = await postName(name)
        // console.log('response', response)
        //   if(response.status === 200){
    
        //     navigation.navigate('Profile')
        //   }
      }

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar backgroundColor="#32d191" />
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                    borderBottomColor: "#dadde1",
                                borderBottomWidth: 1,
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        padding: 5,
                    }}
                >
                    <Icon
                        name="arrow-back-outline"
                        size={28}
                        color="#666"
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontFamily: "IBMPlexSansThai-Bold",
                        fontSize: 16,
                        color: "#666",
                    }}
                >
                    แก้ไขข้อมูล
                </Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                    }}
                >
                   
                </TouchableOpacity>
            </View>
            <View style={{
                    paddingHorizontal: 10,
                }}>
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#ffffff',paddingTop:10,paddingHorizontal:'3%', marginTop: 20}} >
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                    <Text 
                    style={{
                        fontFamily: "IBMPlexSansThai-Bold",
                        fontSize:22,
                        color: '#000000'
                        }} >ชื่อ - นามสกุล</Text>
                </View>
               
                <View style={{flexDirection:'column',paddingTop:10}} >
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:'#ededed',
                        width:'100%',
                        borderRadius:10,
                        height:60,
                        paddingLeft:15}} >
                        <Icon name="person-outline" size={22} color="#818181" />
                        <TextInput  
                        style={styles.input} 
                        placeholder="ป้อนชื่อ - นามสกุล" 
                        placeholderTextColor="#818181" 
                        value={name}
                        onChangeText={(text) => setName(text)} 
                        />

                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity 
                        style={{justifyContent:'center',backgroundColor:'#32d191', width: '100%', height:40,marginBottom:0,borderRadius:10, marginTop:10}} 
                        onPress={() => handleSubmit()}
                        >
                            <Text style={{
                                fontSize:15,
                                letterSpacing:1.5,
                                textAlign:'center',
                                position:'relative',
                                fontFamily: "IBMPlexSansThai-Bold",
                                color:'#fff'}} >บันทึก</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            </View>



        </ScrollView>
    )

}

export default EditName

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        fontFamily: "IBMPlexSansThai-Regular",
        paddingLeft:20,
    },
    social_btn:{
        height:55,
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#dddddd',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    social_img:{
        width:25,
        height:25,
        marginLeft:15
    }
})