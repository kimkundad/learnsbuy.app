import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/ButtonsLogin'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { registerUser } from '../redux/actions/auth';
import { useSelector, useDispatch } from "react-redux";

const Register = ({ navigation }) => {

    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConPassword] = useState('');
    const dispatch = useDispatch();
    const [checkboxState, setCheckboxState] = useState(false);
    const { user, isLoading, error, message } = useSelector(state => state.auth);
    const [messageError, setMessageError] = useState(message);
    const [regisError, setRegisError] = useState(false);

    useEffect(() => {

       

    },);
    

    const onRegister = () => {

        if(conpassword !== password){
            setMessageError('password ของคุณไม่ตรงกัน');
            console.log('password ของคุณไม่ตรงกัน')
            return
        }
        if(checkboxState === false){
            setMessageError('กรุณากดยอมรับข้อกำหนดและเงื่อนไขงานใช้งาน');
            console.log('กรุณากดยอมรับข้อกำหนดและเงื่อนไขงานใช้งาน')
            return
        }

        if (error) {
            console.log('setMessageError')
            setMessageError(message)
        }

        let user = {
            name: username,
            email: email,
            password: password,
            checkboxState: checkboxState
        }

        dispatch(registerUser(user, navigation))

    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: 'column' }}>
            <StatusBar backgroundColor="#32d191" />
            <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 10,
                        borderBottomColor: "#d6d9dc",
                        borderBottomWidth: 0.3,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingTop: 5,
                            paddingBottom: 5
                        }}
                    >
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('HomePage')}
                        >
                        <Image
                            source={require("../assets/img/Learnsbuy_new_web_logo_v3.png")}
                            style={{ width: 144, height: 40 }}
                        />
                        </TouchableOpacity>
                    </View>
                    </View>
            <View style={{ flex: 2, flexDirection: 'column', backgroundColor: '#ffffff', paddingTop: 10, paddingHorizontal: '3%', marginTop: 20 }} >
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                    <Text style={{ fontFamily: 'IBMPlexSansThai-Bold', fontSize: 28, color: '#000000' }} >ยินดีต้อนรับสู่ Learnsbuy</Text>
                    <Image source={require('../assets/img/waving_hand.png')} style={{ width: 30, height: 30 }} />
                </View>
                <Text style={{ fontFamily: "IBMPlexSansThai-Regular", fontSize: 13, paddingTop: 10, color: "#777777" }} >
                    มาเรียนภาษาญี่ปุ่นกันเถอะ กับครูพี่โฮม คนเดียวที่ได้ PAT ญี่ปุ่น 300 คะแนนเต็ม เกียรตินิยมอันดับ 1 (เหรียญทอง) อักษรศาสตร์ จุฬาฯ
                    สื่อชั้นนำยอมรับ ประสบการณ์สอนกว่า 18 ปี
                </Text>

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
                                    fontFamily: 'IBMPlexSansThai-Bold',
                                    width: 270
                                }}>สมัครสมาชิกไม่สำเร็จ</Text>
                                <Text style={{
                                    color: "#345c74",
                                    fontSize: 12,
                                    paddingHorizontal: 20,
                                    fontFamily: 'IBMPlexSansThai-Bold',
                                }}>
                                    {messageError}
                                </Text>
                            </View>
                        </View>
                    </View>
                }
                <View style={{ flexDirection: 'column', paddingTop: 20 }} >

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ededed', width: '100%', borderRadius: 10, height: 60, paddingLeft: 20 }} >
                        <Icon name="person-outline" size={22} color="#818181" />
                        <TextInput
                            style={styles.input}
                            placeholder="UserName"
                            placeholderTextColor="#818181"
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                        />

                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor: '#ededed', width: '100%', borderRadius: 10, height: 60, paddingLeft: 20 }} >
                        <Icon name="mail-outline" size={22} color="#818181" />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Email"
                            placeholderTextColor="#818181"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />

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

                    <View style={{ width: '100%', marginBottom: 10, marginTop: 20 }} >

                        <BouncyCheckbox
                            textStyle={{
                                textDecorationLine: "none",
                                fontSize: 12,
                            }}
                            size={25}
                            fillColor="#666"
                            unfillColor="#f6f7f8"
                            text="การสร้างบัญชีเป็นการแสดงว่าคุณยอมรับข้อกำหนดและเงื่อนไขและนโยบายความเป็นส่วนตัว"
                            iconStyle={{ borderColor: "red" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            isChecked={checkboxState}
                            onPress={() => setCheckboxState(!checkboxState)}
                        />

                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            backgroundColor: '#32d191',
                            width: '100%', height: 40,
                            marginBottom: 0,
                            borderRadius: 10,
                            marginTop: 10
                        }}
                            onPress={() => onRegister()}
                        >
                            <Text style={{ fontSize: 15, letterSpacing: 1.5, textAlign: 'center', position: 'relative', fontFamily: 'IBMPlexSansThai-Bold', color: '#ffffff' }} >สมัครสมาชิก</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', marginTop:18, justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#ffffff', marginBottom: 40 }} >
                    <Text style={{ fontFamily: 'IBMPlexSansThai-Medium', fontSize: 17, color: '#818181' }} >มีบัญชีใช้งานอยู่แล้ว? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontSize: 18, fontFamily: 'IBMPlexSansThai-Bold', color: '#32d191', paddingLeft:10 }} >เข้าสู่ระบบ</Text>
                    </TouchableOpacity>
                </View>

            {/* social login section */}
            {/* <View style={{ flex: 2, backgroundColor: '#fff', flexDirection: 'column', paddingHorizontal: '3%' }} >
                <Text style={{ fontFamily: 'IBMPlexSansThai-Bold', textAlign: 'center', marginVertical: 35, color: '#818181', fontSize: 20 }} >Or</Text>

                <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%' }} >
                    <TouchableOpacity onPress={() => console.log("google login")} style={styles.social_btn} >
                        <Image style={styles.social_img} source={require('../assets/img/google_icon.png')} />
                        <Text style={{ width: '80%', textAlign: 'center', fontSize: 16, fontFamily: 'IBMPlexSansThai-Medium', }} >Sign up with Google </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log("facebook login")} style={styles.social_btn} >
                        <Image style={styles.social_img} source={require('../assets/img/facebook_icon.png')} />
                        <Text style={{ width: '80%', textAlign: 'center', fontSize: 16, fontFamily: 'IBMPlexSansThai-Medium', }} >Sign up with Facebook </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#fff', marginBottom: 40 }} >
                    <Text style={{ fontFamily: 'OpenSans-Medium', fontSize: 17, color: '#818181' }} >If you have a account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontSize: 18, fontFamily: 'IBMPlexSansThai-Bold', color: '#333' }} >Sign In</Text>
                    </TouchableOpacity>
                </View>



            </View> */}


        </ScrollView>
    )

}

export default Register

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'IBMPlexSansThai-Medium',
        paddingLeft: 20,
    },
    social_btn: {
        height: 55,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#dddddd',
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