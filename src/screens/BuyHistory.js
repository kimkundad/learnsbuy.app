import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/ButtonsLogin'
import LinearGradient from 'react-native-linear-gradient';
import buyHistory from '../../services/buyHistory';


const win = Dimensions.get('window');

const ratio = win.width / 541; //541 is actual image width

const IMAGE_WITH = 180;
const IMAGE_HEIGHT = 118;


const BuyHistory = ({ navigation }) => {

    const { data: buyhis, isLoading: fetchLoading } = buyHistory()

    useEffect(() => {
        console.log('buyhis:: ', buyhis);

    },);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <LinearGradient
            colors={['#32d191', '#26a16f', '#32d191']}
            style={styles.gradient}
        >
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
                        color="#fff"
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontFamily: "IBMPlexSansThai-Bold",
                        fontSize: 16,
                        color: "#fff",
                    }}
                >
                    ประวัติการสั่งซื้อ
                </Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                    }}
                >
                   
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>

                <View style={{
                    paddingHorizontal: 10,
                    marginTop: 30
                }}>
                    <View style={styles.ops}>


                        <View style={{
                            flexDirection: "column",
                            marginTop: 10,
                            paddingHorizontal: 10
                        }}>


                            {fetchLoading ?
                                <View></View>
                                :
                                <View>
                                    {buyhis?.data?.map((pack) => (
                                        <View style={{
                                            borderColor: "#dadde1",
                                            borderWidth: 1,
                                            paddingVertical: 10,
                                            paddingHorizontal: 8,
                                            borderRadius: 20,
                                            marginBottom: 10,
                                        }}>
                                            <View style={{
                                                flexDirection: "row",
                                                justifyContent: 'space-between',
                                                borderBottomColor: "#dadde1",
                                                borderBottomWidth: 1,
                                                paddingBottom: 5,
                                            }} >
                                                <View style={{ flexDirection: 'row', }}>
                                                    <Icon name="cart-outline" size={22} color="#ff951e" />
                                                    <Text style={{
                                                        fontFamily: "IBMPlexSansThai-Bold",
                                                        color: "#ff951e",
                                                        fontSize: 15,
                                                    }}>{pack.Dcre}</Text>
                                                </View>

                                                {pack.statusxx === 0 &&
                                                    <Text style={{
                                                        fontFamily: "IBMPlexSansThai-Bold",
                                                        color: "#f1416c",
                                                        fontSize: 14,
                                                    }} >รอการชำระเงิน</Text>
                                                }

                                                {pack.statusxx === 1 &&
                                                    <Text style={{
                                                        fontFamily: "IBMPlexSansThai-Bold",
                                                        color: "#ffc700",
                                                        fontSize: 14,
                                                    }} >รอการตรวจสอบ</Text>
                                                }

                                                {pack.statusxx === 2 &&
                                                    <Text style={{
                                                        fontFamily: "IBMPlexSansThai-Bold",
                                                        color: "#00c402",
                                                        fontSize: 14,
                                                    }} >ชำระเงินสำเร็จ</Text>
                                                }

                                            </View>

                                            <View style={{
                                                width: '100%',
                                                height: 60,
                                                flexDirection: "row",
                                                marginBottom: 5,
                                                marginTop: 5,
                                                alignItems: 'center',
                                                borderBottomColor: "#dadde1",
                                                paddingBottom: 5,
                                                borderBottomWidth: 1,
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
                                                        source={{ uri: 'https://learnsbuy.com/assets/uploads/' + pack.image_course }}
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
                                                                fontFamily: "IBMPlexSansThai-Bold",
                                                                fontSize: 14,
                                                                color: "#666",
                                                                maxWidth: '100%',
                                                                paddingTop: 5,
                                                                letterSpacing: 0.5,
                                                                maxWidth: '100%',
                                                            }}
                                                        >
                                                            {pack.title_course}
                                                        </Text>
                                                        <View style={{
                                                            flexDirection: 'row',
                                                            paddingHorizontal: 5,
                                                            alignSelf: 'flex-end'
                                                        }}>
                                                            <Icon name="shield-checkmark-outline" size={20} color="#f1416c" />
                                                            <Text
                                                                style={{
                                                                    fontFamily: "IBMPlexSansThai-Regular",
                                                                    fontSize: 14,
                                                                    marginLeft: 5,
                                                                    color: '#9e9e9e',
                                                                }}
                                                            >
                                                                รวมการสั่งซื้อ
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    fontFamily: "IBMPlexSansThai-Bold",
                                                                    fontSize: 15,
                                                                    marginLeft: 5,
                                                                    color: '#f1416c',
                                                                }}
                                                            >
                                                                ฿{numberWithCommas(pack.price_course)}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                paddingBottom: 5,
                                            }}>
                                                <Text style={{ fontFamily: "IBMPlexSansThai-Regular", color: "#666", }}>หมายเลขคำสั่งซื้อ</Text>
                                                <Text style={{
                                                    fontWeight: 'bold',
                                                    color: 'black',
                                                }}>#{pack.order_code}</Text>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                paddingBottom: 5,
                                            }}>
                                                <Text style={{ fontFamily: "IBMPlexSansThai-Regular", color: "#666", }}>เวลาชำระเงิน</Text>
                                                <Text style={{
                                                    fontWeight: 'bold',
                                                    color: 'black',
                                                }}>{pack.date_tran}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            }

                        </View>

                    </View>
                </View>



            </ScrollView>
        </LinearGradient>
    )

}

export default BuyHistory

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
    },
    imageStyle: {
        width: win.width,
        height: 362 * ratio, //362 is actual height of image
    },
    gradient: {
        height: '100%',
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        paddingHorizontal: 0,
        paddingTop: 5
    },
    ops: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
        backgroundColor: '#FFF',
        marginHorizontal: -10
    },
    col: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: 'center'
    },
})