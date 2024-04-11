import React, { useRef, useState } from 'react'
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import Display from '../utils/Display';
import { update_userprofile } from '../redux/actions/auth';
import { sendOtpPhone } from "../../services/api"
import { useSelector, useDispatch } from "react-redux";

const VerificationPhoneFinal = ({ route, navigation }) => {
    const phone = route.params.phone;
    console.log('phone', phone);

    const { user, isLoading, error, message } = useSelector(state => state.auth);
    const [token, settoken] = useState(user?.token);
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fiveInput = useRef();
    const dispatch = useDispatch();
    const sixInput = useRef();
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
    const [checkError, setCheckError] = useState(false)

    const handleSubmit = async () => {

        const response = await sendOtpPhone({
            otp,
            phone
        })
        if (response.status === 200) {

            let user = {
                token: token
            }

            dispatch(update_userprofile(user))
            setCheckError(false)
            navigation.navigate('HomePage')
        }else{
            setCheckError(true)
        }
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: 'column' }}>
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
                        color="#666666"
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "#666666",
                    }}
                >
                    OTP Verification
                </Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                    }}
                >

                </TouchableOpacity>
            </View>
            <View style={{ flex: 2, flexDirection: 'column', backgroundColor: '#ffffff', paddingTop: 0, paddingHorizontal: '3%', marginTop: 0 }} >
                {checkError &&
                    <View
                        style={{
                            borderColor: "#0095e8",
                            backgroundColor: '#f1faff',
                            borderWidth: 1,
                            paddingVertical: 10,
                            paddingHorizontal: 8,
                            borderRadius: 10,
                            marginTop: 15,
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
                            }}> OTP ของคุณไม่ถูกต้อง  </Text>
                        </View>
                    </View>
                }
                <Text style={styles.content}>
                    กรอกหมายเลข OTP ที่เพิ่งส่งให้คุณที่{' '}
                    <Text style={styles.phoneNumberText}>{phone}</Text>
                </Text>
                <View style={styles.otpContainer}>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={firstInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 1: text });
                                text && secondInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={secondInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 2: text });
                                text ? thirdInput.current.focus() : firstInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={thirdInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 3: text });
                                text ? fourthInput.current.focus() : secondInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={fourthInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 4: text });
                                text ? fiveInput.current.focus() : thirdInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={fiveInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 5: text });
                                text ? sixInput.current.focus() : fourthInput.current.focus();
                            }}
                        />
                    </View>

                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={sixInput}
                            onChangeText={text => {
                                setOtp({ ...otp, 6: text });
                                !text && fiveInput.current.focus();
                            }}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.signinButton}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.signinButtonText}>Verify</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

export default VerificationPhoneFinal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    content: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        fontFamily: "IBMPlexSansThai-Regular",
    },
    phoneNumberText: {
        fontSize: 16,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_YELLOW,
    },
    otpContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    otpBox: {
        borderRadius: 5,
        borderColor: Colors.DEFAULT_GREEN,
        borderWidth: 0.5,
    },
    otpText: {
        fontSize: 20,
        color: Colors.DEFAULT_BLACK,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    signinButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
    },

})