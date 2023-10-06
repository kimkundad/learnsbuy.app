import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, Dimensions, Platform, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Avatar } from 'react-native-paper';
import getBank from '../../services/getBank';
import Clipboard from '@react-native-clipboard/clipboard';
import axios from 'axios';
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import Spinner from 'react-native-loading-spinner-overlay';

const Pay1 = ({ route, navigation }) => {

    const course = route.params.course;
    const { data: bank, isLoading: fetchLoading } = getBank()
    const { user, isLoading, error, isLogin, message } = useSelector(state => state.auth);
    const [coupon, setCupon] = useState('');
    const [couponId, setCouponId] = useState('');
    const [codecoupon, setCodecoupon] = useState(0);
    const [total, setTotal] = useState(course?.price_course || 0);
    const [course_id, setCourse_id] = useState(course?.c_id);
    const [msgcoupon, setMsgcoupon] = useState(false);
    const [regisError, setRegisError] = useState(false);
    const [token, settoken] = useState(user?.token);
    const [money, setMoney] = useState(0);
    const [totalmoney, setTotalmoney] = useState(0);
    const [photo, setPhoto] = useState(null);
    const [bankname, setBankname] = useState(null);

    const [checked, setChecked] = useState('first');
    const [spinnerx, setSpinner] = useState('false');

    const [date, setDate] = useState(new Date());
    const [datetran, setDatetran] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const [mytimer, setMytimer] = useState(new Date());
    const [timer, setTimer] = useState('');
    const [showTimePicker, setShowTimePicker] = useState(false);

    const toggleDate = () => {
        setShowPicker(!showPicker)
    };
    const toggleDateTime = () => {
        setShowTimePicker(!showTimePicker)
    };

    const handleChoosePhoto = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 348,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            // console.log(response);
            if (response) {
                setPhoto(response);
            }
        });
    };

    const [checkErrorIn, setCheckErrorIn] = useState(false);
    const [checkErrorIn1, setCheckErrorIn1] = useState(false);
    
    const [isValid, setIsValid] = useState(false);
    
    onLastStep = () => {
        console.log('uri -> HomePage')
        navigation.replace('HomePage')

    }

    onNextStep = async () => {

        setTotalmoney(total - codecoupon)
        setSpinner(true);
        if(photo === null || datetran === null || timer === null || bankname === null) {
            setSpinner(false);
            setCheckErrorIn(true);
            setIsValid(true)

        }else{
            

            const formData = new FormData();
            formData.append('image', {
            uri: photo.assets[0].uri,
            type: photo.assets[0].type, // Adjust the MIME type according to your use case
            name: photo.assets[0].fileName,
            });
            formData.append('course_id', course_id);
            formData.append('coupon_id', couponId);
            formData.append('day', datetran);
            formData.append('timer', timer);
            formData.append('totalmoney', totalmoney);
            formData.append('bankname', bankname);
            formData.append('token', token);
           
            console.log('Upload success:', photo.assets[0].fileName);
            try {
                const respons = await axios.post('https://www.learnsbuy.com/api/bil_course', formData ,{
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                   if (respons?.data.status == 200) {
                        setCheckErrorIn(false);
                        setIsValid(false)
                        setSpinner(false);
                        console.log('response', respons)
                    } else {
                        setCheckErrorIn(true);
                        setIsValid(true)
                        console.log('response !== 200', respons?.status)
                        console.log('response st', respons?.data?.status)
                        console.log('response', respons?.data)
                    }
            } catch (err) {
                console.log('err xx00--> ', err)
                return err
            }
        }


        

        
    };

    const formatDateTime = (rawDate) => {
        let date = new Date(rawDate);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? `0${minutes}` : minutes
        return `${hours}.${minutes}`;
    }

    const formatDate = (rawDate) => {
        let date = new Date(rawDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month
        let day = date.getDate();
        return `${year}-${month}-${day}`;
    }

    const onChangeTime = ({ type }, selectedDate) => {
        if (type === 'set') {
            const currentDate2 = selectedDate;
            console.log('onChangeTime', selectedDate);
            // setShowPicker(Platform.OS === 'ios');
            setMytimer(currentDate2);
            if (Platform.OS === 'android') {
                console.log('time step 2', currentDate2);
                toggleDateTime()
                setTimer(formatDateTime(currentDate2))
            }
        } else {
            toggleDateTime()
        }
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

    const handleRadioChange = value => {
        setBankname(value)
        console.log('handleRadioChange', value);
        setChecked(value);
    };

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const progressStyle = {
        labelFontFamily: 'IBMPlexSansThai-Medium',
    }
    const nextBtnStyles = {
        justifyContent: 'center',
        backgroundColor: '#32d191',
        width: '100%',
        height: 40,
        marginBottom: 0,
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,

    }
    const nextBtnTextStyles = {
        color: '#ffffff',
        fontFamily: "IBMPlexSansThai-Bold",
    }

    const handleSubmit = async () => {

        console.log('brfore', course_id, coupon)

        try {
            const respon = await axios.post('https://www.learnsbuy.com/api/check_coupon', {
                token, coupon, course_id
            })
            if (respon?.data.status === 200) {
                console.log('response', respon)
                setCodecoupon(respon?.data?.data?.coupon_price)
                setCouponId(respon?.data?.coupon_id)
                setRegisError(false)
                setMsgcoupon(true)
            } else {
                setCodecoupon(0)
                setRegisError(true)
                setMsgcoupon(false)
            }
        } catch (err) {
            console.log('err xx00--> ', err)
            return err
        }

    }


    return (

        <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5', flexDirection: 'column' }}>
            <StatusBar backgroundColor="#32d191" />
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                    borderBottomColor: "#dadde1",
                    borderBottomWidth: 1,
                    backgroundColor: '#ffffff'
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
                    โอนเงิน
                </Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                    }}
                >
                </TouchableOpacity>

            </View>

            <ScrollView>
                <View style={{
                    flex: 1,
                }}>
                    <ProgressSteps {...progressStyle}>
                        <ProgressStep
                            label="โอนเงิน"
                            nextBtnStyle={nextBtnStyles}
                            nextBtnTextStyle={nextBtnTextStyles}
                            nextBtnText="ถัดไป"
                        >
                    
                            <View style={{
                                backgroundColor: '#ffffff',
                                paddingHorizontal: 10,
                                paddingTop: 10,
                                marginTop: 5,
                            }}>
                                <Text
                                    style={{
                                        fontFamily: "IBMPlexSansThai-Bold",
                                        fontSize: 16
                                    }}
                                >
                                    รายการที่สั่งซื้อ
                                </Text>

                                <View style={{
                                    width: '100%',
                                    height: 60,
                                    flexDirection: "row",
                                    marginBottom: 5,
                                    marginTop: 10,
                                    borderBottomColor: "#dadde1",
                                    paddingBottom: 5,
                                }}>
                                    <View style={{
                                        width: '20%',
                                        height: 50,

                                    }}>
                                        <Image
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 10,
                                            }}
                                            source={{ uri: 'https://learnsbuy.com/assets/uploads/' + course.image_course }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            height: '100%',
                                            justifyContent: 'space-around',
                                            marginLeft: 10
                                        }}
                                    >
                                        <View>
                                            <Text ellipsizeMode='tail' numberOfLines={2}
                                                style={{
                                                    fontFamily: "IBMPlexSansThai-Medium",
                                                    fontSize: 14,
                                                    color: "#666666",
                                                    maxWidth: '100%',
                                                    letterSpacing: 0.5,
                                                    maxWidth: '100%',
                                                    lineHeight: 20,
                                                }}
                                            >
                                                {course.title_course}
                                            </Text>

                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        paddingHorizontal: 5,
                                    }}>

                                        <Text
                                            style={{
                                                fontFamily: "IBMPlexSansThai-Bold",
                                                fontSize: 15,
                                                color: '#f1416c',
                                            }}
                                        >
                                            ฿{numberWithCommas(course.price_course)}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: '#ffffff',
                                paddingHorizontal: 10,
                                paddingTop: 10,
                                marginTop: 8,
                            }}>
                                <Text
                                    style={{
                                        fontFamily: "IBMPlexSansThai-Bold",
                                        fontSize: 16
                                    }}
                                >
                                    คูปองส่วนลด
                                </Text>
                                {msgcoupon === true &&
                                    <Text style={{
                                        color: '#009688',
                                    }}>คุณสามารถใช้คูปองส่วนลดนี้ได้</Text>
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
                                                backgroundColor: "#fcf8e3f0",
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
                                                    fontFamily: "IBMPlexSansThai-Regular",
                                                    width: 270
                                                }}>ใช้ส่วนลด Coupon ไม่สำเร็จ</Text>
                                                <Text style={{
                                                    color: "#345c74",
                                                    fontSize: 12,
                                                    paddingHorizontal: 20,
                                                    fontFamily: "IBMPlexSansThai-Regular",
                                                }}>
                                                    คุณไม่สามารถใช้ Coupon นี้ได้
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                }

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: "space-between",
                                        marginVertical: 10,
                                        marginBottom: 15
                                    }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#ededed',
                                        width: '85%',
                                        borderRadius: 10,
                                        height: 40,
                                    }} >
                                        <TextInput
                                            style={styles.input}
                                            value={coupon}
                                            onChangeText={(text) => setCupon(text)}
                                            placeholder="กรอกโค้ดส่วนลด"
                                            placeholderTextColor="#818181"
                                        />

                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <TouchableOpacity
                                            style={{
                                                justifyContent: 'center',
                                                backgroundColor: '#32d191',
                                                width: '100%',
                                                height: 40,
                                                marginLeft: 10,
                                                borderRadius: 10,
                                            }}
                                            onPress={() => handleSubmit()}
                                        >
                                            <Text style={{
                                                fontSize: 15,
                                                width: '100%',
                                                letterSpacing: 1.5,
                                                textAlign: 'center',
                                                position: 'relative',
                                                fontFamily: "IBMPlexSansThai-Bold",
                                                paddingLeft: 5,
                                                paddingRight: 5,
                                                color: '#ffffff'
                                            }} >
                                                <Icon name="bookmark-outline" size={28} color="#ffffff" />
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: '#ffffff',
                                paddingHorizontal: 10,
                                paddingTop: 10,
                                marginTop: 8,
                            }}>
                                <Text
                                    style={{
                                        fontFamily: "IBMPlexSansThai-Bold",
                                        fontSize: 16
                                    }}
                                >
                                    บัญชีธนาคาร
                                </Text>

                                {fetchLoading ?
                                    <View></View>
                                    :
                                    <View
                                        style={{ marginTop: 10 }}
                                    >
                                        {bank?.data.map((banks) => (
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    marginBottom: 10
                                                }}
                                                key={banks.id}>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: '18%',
                                                }} >
                                                    <Avatar.Image size={45} source={{ uri: 'https://learnsbuy.com/assets/images/bank/' + banks.image }} />

                                                </View>
                                                <View style={styles.bankCopy}>
                                                    <View style={{ paddingLeft: 10, }}>
                                                        <Text style={styles.bankStyle}>{banks.bank_name}</Text>
                                                        <Text style={styles.bankStyle}>{banks.bank_number}</Text>
                                                        <Text style={styles.bankStyle}>{banks.bank_owner}</Text>
                                                    </View>
                                                    <View>
                                                        <TouchableOpacity
                                                            style={{
                                                                justifyContent: 'center',
                                                                backgroundColor: '#32d191',
                                                                height: 40,
                                                                marginLeft: 10,
                                                                borderRadius: 10,
                                                            }}
                                                            onPress={() => Clipboard.setString(`${banks.bank_number}`)}
                                                        >
                                                            <Text style={{
                                                                fontSize: 15,
                                                                letterSpacing: 1.5,
                                                                textAlign: 'center',
                                                                position: 'relative',
                                                                fontFamily: "IBMPlexSansThai-Bold",
                                                                paddingLeft: 5,
                                                                paddingRight: 5,
                                                                color: '#ffffff'
                                                            }} >
                                                                <Icon name="copy-outline" size={28} color="#ffffff" />
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </View>
                                        ))}
                                    </View>
                                }



                            </View>

                            <View style={{
                                backgroundColor: '#ffffff',
                                paddingHorizontal: 10,
                                paddingTop: 10,
                                marginTop: 8,
                            }}>
                                <Text
                                    style={{
                                        fontFamily: "IBMPlexSansThai-Bold",
                                        fontSize: 16
                                    }}
                                >
                                    สรุปรายการที่สั่งซื้อ
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: "space-between",
                                        marginVertical: 1,
                                    }}>
                                    <Text style={{
                                        fontFamily: "IBMPlexSansThai-Regular"
                                    }}>ราคารวม</Text>
                                    <Text>฿ {numberWithCommas(total)}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: "space-between",
                                        marginVertical: 1,
                                    }}>
                                    <Text style={{
                                        fontFamily: "IBMPlexSansThai-Regular"
                                    }}>จากโค้ดส่วนลด</Text>
                                    <Text> - ฿ {codecoupon}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: "space-between",
                                        marginVertical: 3,
                                        marginBottom: 10
                                    }}>
                                    <Text style={{
                                        fontFamily: "IBMPlexSansThai-Bold"
                                    }}>ที่ต้องชำระ</Text>
                                    <Text style={{
                                        fontFamily: "IBMPlexSansThai-Bold"
                                    }}>฿ {numberWithCommas(total - codecoupon)}</Text>
                                </View>
                            </View>

                        </ProgressStep>
                        <ProgressStep label="แจ้งโอน"
                            nextBtnStyle={nextBtnStyles}
                            nextBtnTextStyle={nextBtnTextStyles}
                            previousBtnStyle={nextBtnStyles}
                            previousBtnTextStyle={nextBtnTextStyles}
                            nextBtnText="ถัดไป"
                            previousBtnText="ย้อนกลับ"
                            onNext={this.onNextStep}
                            errors={checkErrorIn}
                        >
                            <Spinner
                            visible={spinnerx}
                            textContent={'Loading...'}
                            textStyle={styles.spinnerTextStyle}
                            />
                            <View style={{
                                backgroundColor: '#ffffff',
                                paddingHorizontal: 10,
                                paddingTop: 10,
                                marginTop: 5,
                            }}>

                                
                                <Text
                                    style={{
                                        fontFamily: "IBMPlexSansThai-Bold",
                                        fontSize: 16
                                    }}
                                >
                                    ธนาคารที่แจ้งโอน
                                </Text>
                                <View>
                                    <RadioButton.Group onValueChange={handleRadioChange} value={checked}>
                                        {/* <View style={styles.radiox}>
                                        <RadioButton value="first" />
                                            <Text>First Option</Text>
                                        </View>
                                        <View>
                                        <Text>Second Option</Text>
                                        <RadioButton value="second" />
                                        </View>
                                        <View>
                                        <Text>Third Option</Text>
                                        <RadioButton value="third" />
                                        </View> */}
                                        {fetchLoading ?
                                            <View></View>
                                            :
                                            <View
                                                style={{ marginTop: 10 }}
                                            >
                                                {bank?.data.map((banks) => (
                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                            marginBottom: 10
                                                        }}
                                                        key={banks.id}>
                                                        <View style={{
                                                            marginTop: 10
                                                        }}>
                                                            <RadioButton color='#009688' style={styles.RadioButtonx} value={banks.id} />
                                                        </View>
                                                        <View style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            width: '18%',
                                                        }} >
                                                            <Avatar.Image size={45} source={{ uri: 'https://learnsbuy.com/assets/images/bank/' + banks.image }} />

                                                        </View>
                                                        <View >
                                                            <View style={{ paddingLeft: 10, }}>
                                                                <Text style={styles.bankStyle}>{banks.bank_name}</Text>
                                                                <Text style={styles.bankStyle}>{banks.bank_number}</Text>
                                                                <Text style={styles.bankStyle}>{banks.bank_owner}</Text>
                                                            </View>
                                                        </View>

                                                    </View>
                                                ))}
                                            </View>
                                        }
                                    </RadioButton.Group>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: '#ffffff',
                                paddingHorizontal: 10,
                                paddingTop: 10,
                                marginTop: 5,
                            }}>
                                <Text
                                    style={{
                                        fontFamily: "IBMPlexSansThai-Bold",
                                        fontSize: 16
                                    }}
                                >
                                    จำนวนเงิน
                                </Text>
                                <View style={{ flexDirection: 'column', marginBottom: 15 }} >
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#ededed',
                                        width: '100%',
                                        borderRadius: 10,
                                        height: 40,
                                    }} >
                                        <TextInput
                                            keyboardType="numeric"
                                            style={styles.input}
                                            placeholder="1500"
                                            placeholderTextColor="#818181"
                                            value={money}
                                            onChangeText={(text) => setMoney(text)}
                                        />

                                    </View>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: '#ffffff',
                                paddingHorizontal: 10,
                            }}>
                                <Text
                                    style={{
                                        fontFamily: "IBMPlexSansThai-Bold",
                                        fontSize: 16
                                    }}
                                >
                                    วันที่โอน
                                </Text>
                                <View style={{ flexDirection: 'column', marginBottom: 15 }} >
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        backgroundColor: '#ededed',
                                        width: '100%',
                                        borderRadius: 10,
                                        height: 40,
                                    }} >
                                        <View>

                                            {!showPicker && (
                                                <Pressable
                                                    onPress={toggleDate}
                                                >
                                                    <TextInput
                                                        style={styles.input2}
                                                        placeholder="2023-08-20"
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

                            <View style={{
                                backgroundColor: '#ffffff',
                                paddingHorizontal: 10,
                            }}>
                                <Text
                                    style={{
                                        fontFamily: "IBMPlexSansThai-Bold",
                                        fontSize: 16
                                    }}
                                >
                                    เวลาที่โอน
                                </Text>
                                <View style={{ flexDirection: 'column', marginBottom: 15 }} >
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        backgroundColor: '#ededed',
                                        width: '100%',
                                        borderRadius: 10,
                                        height: 40,
                                    }} >
                                        <View>

                                            {!showTimePicker && (
                                                <Pressable
                                                    onPress={toggleDateTime}
                                                >
                                                    <TextInput
                                                        style={styles.input2}
                                                        placeholder="21.30"
                                                        placeholderTextColor="#818181"
                                                        value={timer}
                                                        onChangeText={setTimer}
                                                        onPressIn={toggleDateTime}
                                                        editable={false}
                                                    />
                                                </Pressable>
                                            )}

                                            {showTimePicker && (
                                                <DateTimePicker
                                                    value={mytimer}
                                                    mode="time"
                                                    display="spinner"
                                                    onChange={onChangeTime}
                                                />
                                            )}
                                        </View>

                                    </View>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: '#ffffff',
                                paddingHorizontal: 10,
                                marginBottom: 20
                            }}>
                                <Text
                                    style={{
                                        fontFamily: "IBMPlexSansThai-Bold",
                                        fontSize: 16
                                    }}
                                >
                                    อัพโหลดสลิป
                                </Text>
                                {photo?.assets && (
                                    <>
                                        <Image
                                            source={{ uri: photo.assets[0].uri }}
                                            style={{ width: 300, height: 348 }}
                                        />
                                    </>
                                )}
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity style={{
                                        justifyContent: 'center',
                                        backgroundColor: '#32d191',
                                        width: '100%', height: 40,
                                        marginBottom: 0,
                                        borderRadius: 10,
                                        marginTop: 10
                                    }}
                                        onPress={() => handleChoosePhoto('photo')}
                                    >
                                        <Text style={{ fontSize: 15, letterSpacing: 1.5, textAlign: 'center', position: 'relative', fontFamily: "IBMPlexSansThai-Bold", color: '#ffffff' }} >เลือกรูปภาพ</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {isValid === true &&
                                    <>
                                        <View style={{
                                            
                                            marginHorizontal: 10,
                                            borderColor: "#f1bc00",
                                            backgroundColor: "#fff8dd",
                                            marginTop: 10,
                                            borderWidth: 1,
                                            minHeight: 50,
                                            borderRadius: 10,
                                            marginBottom:20

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
                                                    backgroundColor: "#fcf8e3f0",
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
                                                        fontFamily: "IBMPlexSansThai-Regular",
                                                        width: 270
                                                    }}>เกิดข้อผิดพลาดขึ้น</Text>
                                                    <Text style={{
                                                        color: "#345c74",
                                                        fontSize: 12,
                                                        paddingHorizontal: 20,
                                                        fontFamily: "IBMPlexSansThai-Regular",
                                                    }}>
                                                        กรุณาป้อนข้อมูลของท่านให้ครบถ้วนก่อน
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </>
                                }

                        </ProgressStep>
                        <ProgressStep label="รออนุมัติ"
                        previousBtnDisabled={true}
                        finishBtnText="กลับหน้าแรก"
                        nextBtnStyle={nextBtnStyles}
                        nextBtnTextStyle={nextBtnTextStyles}
                        onSubmit={this.onLastStep}
                            >
                            <View style={{ 
                                alignItems: 'center',
                                paddingBottom: 20
                                }}>
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontSize: 18,
                                        fontFamily: "IBMPlexSansThai-Bold",
                                    }}
                                >ขอบคุณที่ได้ทำรายการสั่งซื้อ</Text>
                                <Text>หลังจากนี้เจ้าหน้าที่ตรวจสอบข้อมูลแล้วอนุมัติให้ถายใน 4-5 ชม.</Text>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
                </View>


            </ScrollView>
        </ScrollView>
    )

}

export default Pay1

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        height: '100%',
        width: '100%',
        fontFamily: "IBMPlexSansThai-Regular",
    },
    input2: {
        position: 'relative',
        height: '100%',
        width: 500,
        fontFamily: "IBMPlexSansThai-Regular",
    },
    ProgressStep: {
        fontFamily: "IBMPlexSansThai-Medium",
    },
    bankStyle: {
        fontSize: 12,
        fontFamily: "IBMPlexSansThai-Regular",
    },
    bankCopy: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    RadioButtonx: {
        marginTop: 10,
        paddingTop: 10,
        alignItems: 'center'
    },
    spinnerTextStyle: {
        color: '#FFFFFF'
      },
})