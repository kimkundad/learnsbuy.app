import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/ButtonsLogin'
import { newPasswords2 } from "../../services/api"
import { useSelector, useDispatch } from "react-redux";

const ProfilePassword = ({ navigation }) => {
    const { user, isLoading, error, isLogin, message } = useSelector(state => state.auth);

    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [password, setPassword] = useState('');
    const [conpassword, setConPassword] = useState('');
    const [messageError, setMessageError] = useState('');
    const [regisError, setRegisError] = useState(false);
    const [regisSuccess, setRegisSuccess] = useState(false);
    const [btnDis, setBtnDis] = useState(false);
    const [token, settoken] = useState(user?.token);

    const handleSubmit = async () => {

        setBtnDis(true)
        console.log('handleSubmit xx--> ')
        if(password.length < 6){
            setMessageError('password ของคุณต้องมีอย่างน้อย 6 ตัว');
            setRegisError(true)
            setRegisSuccess(false)
            setBtnDis(false)
            console.log('password ของคุณไม่ตรงกัน')
            return
        }

        if(conpassword !== password){
            setMessageError('password ของคุณไม่ตรงกัน');
            setRegisError(true)
            setRegisSuccess(false)
            setBtnDis(false)
            console.log('password ของคุณไม่ตรงกัน')
            return
        }
        
        if(conpassword === '' || password === ''){
            setMessageError('กรุณาใส่ Password ด้วย');
            setRegisError(true)
            setRegisSuccess(false)
            setBtnDis(false)
            console.log('กรุณาใส่ Password ด้วย')
            return
        }
        

        const response = await newPasswords2({
            token,
            password
        })
        if (response.status === 200) {
            setBtnDis(true)
            setRegisError(false)
            setRegisSuccess(true)
            setTimeout(function(){ 
                navigation.goBack()
             }, 2000);
            
        }else{
            setBtnDis(false)
            setRegisError(true)
            setRegisSuccess(false)
        }
        setBtnDis(false)

    }

    return (
        <ScrollView style={{flex:1,backgroundColor:'#ffffff',flexDirection:'column'}}>
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
                        color="#666666"
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontFamily: "IBMPlexSansThai-Bold",
                        fontSize: 16,
                        color: "#666666",
                    }}
                >
                    เปลี่ยนรหัสผ่าน
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
                    <Text style={{fontFamily: "IBMPlexSansThai-Bold", fontSize:16,color: '#000000'}} >ทำการรีเซ็ตรหัสผ่าน ป้อนรหัสผ่านใหม่ ด้านล่างเพื่อเปลี่ยนรหัสผ่านของคุณ </Text>
                </View> 
               
                <View style={{flexDirection:'column',paddingTop:10}} >
                {regisSuccess == true &&
                    <View style={{
                        marginHorizontal: 0,
                        borderColor: "#50cd89",
                        backgroundColor: "#e8fff3",
                        marginTop: 10,
                        borderWidth: 1,
                        minHeight: 50,
                        borderRadius: 10,

                    }}>
                        <View
                            style={{
                                flexDirection: "row",
                                padding: 8,
                                marginRight: 10,
                                alignItems: "center",
                            }}
                        >
                            <View style={{
                                backgroundColor: "#FCF3CF",
                                paddingVertical: 6,
                                paddingHorizontal: 8,
                                borderRadius: 20
                            }}>
                                <Icon name="alert-circle-outline" size={30} color="#50cd89" />
                            </View>
                            <View>
                                <Text style={{
                                    color: "#50cd89",
                                    fontSize: 14,
                                    paddingHorizontal: 20,
                                    fontFamily: "IBMPlexSansThai-Bold",
                                    width: 270
                                }}>คุณเปลี่ยน Password สำเร็จแล้ว!</Text>
                                <Text style={{
                                    color: "#50cd89",
                                    fontSize: 12,
                                    paddingHorizontal: 20,
                                    fontFamily: "IBMPlexSansThai-Regular",
                                }}>
                                    กรุณาทำการเข้าสู่ระบบอีกครั้ง
                                </Text>
                            </View>
                        </View>
                    </View>
                }
                {regisError === true &&
                    <View style={{
                        marginHorizontal: 0,
                        borderColor: "#f1bc00",
                        backgroundColor: "#fff8dd",
                        marginTop: 10,
                        borderWidth: 1,
                        minHeight: 50,
                        borderRadius: 10,

                    }}>
                        <View
                            style={{
                                flexDirection: "row",
                                padding: 8,
                                marginRight: 10,
                                alignItems: "center",
                            }}
                        >
                            <View style={{
                                backgroundColor: "#FCF3CF",
                                paddingVertical: 6,
                                paddingHorizontal: 8,
                                borderRadius: 20
                            }}>
                                <Icon name="alert-circle-outline" size={30} color="#ff741a" />
                            </View>
                            <View>
                                <Text style={{
                                    color: "#000000",
                                    fontSize: 14,
                                    paddingHorizontal: 20,
                                    fontWeight: 700,
                                    width: 270
                                }}>เกิดข้อผิดพลาด!</Text>
                                <Text style={{
                                    color: "#345c74",
                                    fontSize: 12,
                                    paddingHorizontal: 20,
                                    fontWeight: 400,
                                }}>
                                    {messageError}
                                </Text>
                            </View>
                        </View>
                    </View>
                }
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ededed',
                        width: '100%',
                        borderRadius: 10,
                        height: 60,
                        paddingLeft: 20,
                        marginTop: 20
                    }} >
                        <Icon name="lock-closed-outline" size={22} color="#818181" />
                        <TextInput
                            onChangeText={(text) => setPassword(text)}
                            style={styles.input}
                            placeholder="Enter Password"
                            secureTextEntry={isPasswordShown}
                            placeholderTextColor="#818181" />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == false ? (
                                    <Icon name="eye-off-outline" size={24} color="000000" />
                                ) : (
                                    <Icon name="eye-outline" size={24} color="000000" />
                                )
                            }

                        </TouchableOpacity>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ededed',
                        width: '100%',
                        borderRadius: 10,
                        height: 60,
                        paddingLeft: 20,
                        marginTop: 20
                    }} >
                        <Icon name="lock-closed-outline" size={22} color="#818181" />
                        <TextInput style={styles.input}
                            placeholder="Confirm Password"
                            secureTextEntry={isPasswordShown}
                            onChangeText={(text) => setConPassword(text)}
                            placeholderTextColor="#818181" />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == false ? (
                                    <Icon name="eye-off-outline" size={24} color="000000" />
                                ) : (
                                    <Icon name="eye-outline" size={24} color="000000" />
                                )
                            }

                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity disabled={btnDis} style={{justifyContent:'center',backgroundColor:'#32d191', width: '100%', height:40,marginBottom:0,borderRadius:10, marginTop:10}} 
                        onPress={() => handleSubmit()}
                        >
                            <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',fontFamily: "IBMPlexSansThai-Regular",color:'#fff'}} >รีเซ็ตรหัสผ่าน</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            </View>



        </ScrollView>
    )

}

export default ProfilePassword

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        fontFamily:'OpenSans-Medium',
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