import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/ButtonsLogin'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSelector, useDispatch } from "react-redux";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios'

const VerificationPhone = ({ navigation }) => {


    const [phone, setPhone] = useState('');
    const [line, setLine] = useState('');
    const [address, setAddress] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [datetran, setDatetran] = useState('');
    const [date, setDate] = useState(new Date());

    const dispatch = useDispatch();
    const { user, isLoading, error, message } = useSelector(state => state.auth);
    const [messageError, setMessageError] = useState(message);
    const [regisError, setRegisError] = useState(false);
    const [token, settoken] = useState(user?.token);

    const toggleDate = () => {
        setShowPicker(!showPicker)
    };

    useEffect(() => {
        console.log('@@@Login guser:: ', user?.token);
    },);

    const optionsx = [
        { label: 'Thailand (+66)', value: '66' },
        { label: 'Australia (+61)', value: '61' },
        { label: 'Singapore (+65)', value: '65' },
        { label: 'Korea South (+82)', value: '82' },
        { label: 'Japan (+81)', value: '81' },
        { label: 'Hong Kong (+852)', value: '852' },
      ];

      const [selectedValue, setSelectedValue] = useState(optionsx[0].value);
     

    const formatDate = (rawDate) => {
        let date = new Date(rawDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month
        let day = date.getDate();
        return `${year}-${month}-${day}`;
    }

    const onChange = ({ type }, selectedDate) => {

        if (type === 'set') {
            const currentDate = selectedDate;
            console.log('type', currentDate);
            // setShowPicker(Platform.OS === 'ios');
            setDate(currentDate);
            if (Platform.OS === 'android') {
                toggleDate()
                setDatetran(formatDate(currentDate))
            }
        } else {
            toggleDate()
        }

    };

    useEffect(() => {


    },);
    

    const onRegister = () => {


        if (phone === "" || line === "" || address === "" || datetran === "") {
            console.log('setMessageError')
            setRegisError(true)
            setMessageError('กรุณากรอกข้อมูลให้ครบถ้วน')
            return
        }

        setRegisError(false)

            let user = {
                phone: phone,
                line: line,
                address: address,
                hbd: datetran,
                phone_phoneCode: selectedValue,
                token: token
            }
            console.log('onRegister verifyPhone', phone);
    
            try {

                axios.request({
                  method: "POST",
                  url: 'https://www.learnsbuy.com/api/verify_phone',
                  data: user,
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
               })
               .then(function (response) {
                console.log('response', response?.data?.status);
                if (response?.data?.status === 200) { 
                    setRegisError(false)
                navigation.navigate("VerificationPhoneFinal", { phone: user?.phone })
          
                } else { 

                    setRegisError(true)
                    setMessageError('หมายเลขโทรศัพท์ทำการลงทะเบียนไปแล้ว')

                }
          
               })
               .catch((response) => { })
          
              } catch (error) {}

        
        
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
                    <Text style={{ fontFamily: 'IBMPlexSansThai-Bold', fontSize: 22, color: '#000000' }} >ยืนยันข้อมูลส่วนตัว</Text>
                    <Image source={require('../assets/img/waving_hand.png')} style={{ width: 30, height: 30 }} />
                </View>
                <Text style={{ fontFamily: "IBMPlexSansThai-Regular", fontSize: 13, paddingTop: 10, color: "#777777" }} >
                    ระบบจะทำการส่งหมายเลข OTP ไปยังมือถือของท่าน กรุณาใส่ข้อมูลตามจริง เพื่อสะดวกในการติดต่อ
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
                                }}>{messageError}</Text>
                            </View>
                        </View>
                    </View>
                }
                <View style={{ flexDirection: 'column', paddingTop: 20 }} >

                <View style={{ height: 60, marginBottom:20, }}>
                <Text style={{
                    color: "#000000",
                }}>
                เลือกรหัสโทรศัพท์
            </Text>
        
               <RNPickerSelect
                style={pickerSelectStyles}
                        items={optionsx}
                        value={selectedValue}
                        onValueChange={(value) => {
                            setSelectedValue(value)
                        }}
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
                        paddingLeft: 20 
                        }} >
                        <Icon name="call-outline" size={22} color="#818181" />
                        <TextInput
                            style={styles.input}
                            placeholder="เบอร์โทรศัพท์"
                            placeholderTextColor="#818181"
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                        />

                    </View>

                    <View style={{
                                backgroundColor: '#ffffff',
                                marginTop:10
                            }}>
                                <Text
                                    style={{
                                        fontFamily: "IBMPlexSansThai-Bold",
                                        fontSize: 16, color: "#666666"
                                    }}
                                >
                                    วันเกิด
                                </Text>
                                <View style={{ flexDirection: 'column', marginBottom: 15 }} >
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        backgroundColor: '#ededed',
                                        width: '100%',
                                        borderRadius: 10,
                                        height: 60,
                                    }} >
                                        <View>

                                            {!showPicker && (
                                                <Pressable
                                                    onPress={toggleDate}
                                                >
                                                    <TextInput
                                                        style={styles.input2}
                                                        placeholder="เลือก วัน เดือน ปี เกิด"
                                                        placeholderTextColor="#818181"
                                                        value={datetran}
                                                        onChangeText={setDatetran}
                                                        onPressIn={toggleDate}
                                                        editable={false}
                                                    />
                                                </Pressable>
                                            )}

                                            {showPicker && (
                                                <DateTimePicker
                                                    value={date}
                                                    mode="date"
                                                    display="spinner"
                                                    onChange={onChange}
                                                />
                                            )}
                                        </View>

                                    </View>
                                </View>
                            </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 8, backgroundColor: '#ededed', width: '100%', borderRadius: 10, height: 60, paddingLeft: 20 }} >
                        <Icon name="chatbubble-ellipses-outline" size={22} color="#818181" />
                        <TextInput
                            style={styles.input}
                            placeholder="Line ID"
                            placeholderTextColor="#818181"
                            value={line}
                            onChangeText={(text) => setLine(text)}
                        />

                    </View>

                    <View style={{ flexDirection: 'row',alignItems: 'center',  marginTop: 20, backgroundColor: '#ededed', width: '100%', borderRadius: 10,  paddingLeft: 20 }} >
                        <Icon name="home-outline" size={22} color="#818181" />
                        <TextInput
                         style={styles.input}
                            placeholder="ที่อยู่"
                            numberOfLines={5}
                            multiline={true}
                            placeholderTextColor="#818181"
                            value={address}
                            onChangeText={(text) => setAddress(text)}
                        />

                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            backgroundColor: '#32d191',
                            width: '100%', height: 40,
                            marginBottom: 0,
                            borderRadius: 10,
                            marginTop: 20
                        }}
                            onPress={() => onRegister()}
                        >
                            <Text style={{ fontSize: 15, letterSpacing: 1.5, textAlign: 'center', position: 'relative', fontFamily: 'IBMPlexSansThai-Bold', color: '#ffffff' }} >ยืนยันข้อมูล</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        


        </ScrollView>
    )

}

export default VerificationPhone

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'IBMPlexSansThai-Medium',
        paddingLeft: 20,
    },
    input2: {
        position: 'relative',
        height: '100%',
        width: 500,
        fontFamily: "IBMPlexSansThai-Regular",
        color: '#000000',
        paddingLeft:20
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
    },
});


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 10,
        borderColor: '#666666',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});