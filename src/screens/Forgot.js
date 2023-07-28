import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/ButtonsLogin'
import { resetPassword } from "../../services/api"

const Forgot = ({ navigation }) => {

    // เราได้ส่งลิงก์รีเซ็ตรหัสผ่านของคุณทางอีเมลแล้ว!
    const IMAGE_HEIGHT = 320;
    const [email, setEmail] = useState('');
    const [msgResponse, setMsgResponse] = useState('เราได้ส่งลิงก์รีเซ็ตรหัสผ่านของคุณทางอีเมลแล้ว!');
    const [loading, setLoading] = useState(false)
    const handleSubmit = async () => {
  
        const response = await resetPassword({
            email: email
          })
          console.log('response --> ',response.status)
          setMsgResponse(response.message)
          setLoading(true)
          if(response.status === 200){
            setLoading(false)
            navigation.replace('HomePage')
          }
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
            <StatusBar backgroundColor="#32d191" />
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 8,
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
                
            </View>
            <View style={{ flex: 2, flexDirection: 'column', backgroundColor: '#fff', paddingTop: 0, paddingHorizontal: '3%', marginTop: 0 }} >

                <View>
                <Image
                    style={{
                        width: "100%",
                        height: IMAGE_HEIGHT,
                        borderRadius: 10,
                    }}
                    source={require('../assets/img/forget_password.png')}
                />
                </View>
                {loading == true &&
                    <View
                        style={{
                            borderColor: "#0095e8",
                            backgroundColor: '#f1faff',
                            borderWidth: 1,
                            paddingVertical: 10,
                            paddingHorizontal: 8,
                            borderRadius: 10,
                            marginBottom: 10,
                            borderStyle: 'dotted',
                        }}
                    >
                        <View style={{
                            flexDirection: "row",
                            marginRight: 10,
                            alignItems: "center",
                        }}>
                            <Icon name="mail-outline" size={25} color="#0095e8" />
                            <Text style={{
                                color: '#0095e8',
                                marginLeft: 10,
                            }}> {msgResponse}  </Text>
                        </View>
                    </View>
                }
    

                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop:10 }} >
                <Text 
                    style={{ 
                        fontSize: 22, 
                        fontWeight:700,
                        color: '#000' 
                        }} >
                        ลืมรหัสผ่าน ?</Text>
                    <Text 
                    style={{ 
                        fontSize: 16, 
                        color: '#000' 
                        }} >
                        ใส่อีเมลของคุณเพื่อรีเซ็ตรหัสผ่านของคุณ.</Text>
                </View>



                <View style={{ flexDirection: 'column', paddingTop: 10 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ededed', width: '100%', borderRadius: 10, height: 60, paddingLeft: 20 }} >
                        <Icon name="mail-outline" size={22} color="#818181" />
                        <TextInput 
                        style={styles.input} 
                        placeholder="Email" 
                        placeholderTextColor="#818181" 
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                            />

                    </View>

                  
                    <TouchableOpacity style={{
                            justifyContent: 'center',
                            backgroundColor: '#32d191',
                            width: '100%', height: 40,
                            marginBottom: 0,
                            borderRadius: 10,
                            marginTop: 15
                        }}
                            onPress={() => handleSubmit()}
                        >
                            <Text style={{ fontSize: 15, letterSpacing: 1.5, textAlign: 'center', position: 'relative', fontFamily: 'OpenSans-SemiBold', color: '#ffffff' }} >รีเซ็ตพาสเวิร์ด</Text>
                        </TouchableOpacity>
                </View>
            </View>



        </ScrollView>
    )

}

export default Forgot

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'OpenSans-Medium',
        paddingLeft: 20,
    },
    social_btn: {
        height: 55,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    social_img: {
        width: 25,
        height: 25,
        marginLeft: 15
    }
})