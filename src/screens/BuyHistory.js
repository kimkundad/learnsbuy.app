import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/ButtonsLogin'
import LinearGradient from 'react-native-linear-gradient';

const win = Dimensions.get('window');

const ratio = win.width / 541; //541 is actual image width

const IMAGE_WITH = 180;
const IMAGE_HEIGHT = 118;

const BuyHistory = ({ navigation }) => {

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
                        fontWeight: "bold",
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
                    <Icon name="notifications-outline" size={28} color="#fff" />
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
                                            fontWeight: "bold",
                                            color: "#ff951e",
                                            fontSize: 15,
                                        }}>16 มี.ค. 2563</Text>
                                    </View>

                                    <Text style={{
                                        fontWeight: "bold",
                                        color: "#00c402",
                                        fontSize: 14,
                                    }} >สำเร็จแล้ว</Text>
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
                                            source={require("../assets/img/products/1605940945.jpg")}
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
                                                    fontWeight: 'bold',
                                                    fontSize: 14,
                                                    color: "#666",
                                                    maxWidth: '100%',
                                                    paddingTop:5,
                                                    letterSpacing: 0.5,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                ภาษาญี่ปุ่นเบื้องต้น 1 เรียนภาษาญี่ปุ่นเริ่มต้น
                                            </Text>
                                            <View style={{
                                                flexDirection: 'row',
                                                paddingHorizontal: 5,
                                                alignSelf: 'flex-end'
                                            }}>
                                                <Icon name="shield-checkmark-outline" size={20} color="#f1416c" />
                                                <Text
                                                    style={{
                                                        fontWeight: 400,
                                                        fontSize: 14,
                                                        marginLeft: 5,
                                                        color: '#9e9e9e',
                                                    }}
                                                >
                                                    รวมการสั่งซื้อ
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontWeight: 700,
                                                        fontSize: 15,
                                                        marginLeft: 5,
                                                        color: '#f1416c',
                                                    }}
                                                >
                                                    ฿1,500
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingBottom:5,
                                }}>
                                    <Text>หมายเลขคำสั่งซื้อ</Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }}>#JP1452893</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingBottom:5,
                                }}>
                                    <Text>เวลาชำระเงิน</Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }}>16 มี.ค. 2563 14:35น.</Text>
                                </View>
                            </View>

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
                                            fontWeight: "bold",
                                            color: "#ff951e",
                                            fontSize: 15,
                                        }}>16 มี.ค. 2563</Text>
                                    </View>

                                    <Text style={{
                                        fontWeight: "bold",
                                        color: "#00c402",
                                        fontSize: 14,
                                    }} >สำเร็จแล้ว</Text>
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
                                            source={require("../assets/img/products/1605941034.jpg")}
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
                                                    fontWeight: 'bold',
                                                    fontSize: 14,
                                                    color: "#666",
                                                    maxWidth: '100%',
                                                    paddingTop:5,
                                                    letterSpacing: 0.5,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                ภาษาญี่ปุ่นเบื้องต้น 1 เรียนภาษาญี่ปุ่นเริ่มต้น
                                            </Text>
                                            <View style={{
                                                flexDirection: 'row',
                                                paddingHorizontal: 5,
                                                alignSelf: 'flex-end'
                                            }}>
                                                <Icon name="shield-checkmark-outline" size={20} color="#f1416c" />
                                                <Text
                                                    style={{
                                                        fontWeight: 400,
                                                        fontSize: 14,
                                                        marginLeft: 5,
                                                        color: '#9e9e9e',
                                                    }}
                                                >
                                                    รวมการสั่งซื้อ
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontWeight: 700,
                                                        fontSize: 15,
                                                        marginLeft: 5,
                                                        color: '#f1416c',
                                                    }}
                                                >
                                                    ฿1,500
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingBottom:5,
                                }}>
                                    <Text>หมายเลขคำสั่งซื้อ</Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }}>#JP1452893</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingBottom:5,
                                }}>
                                    <Text>เวลาชำระเงิน</Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }}>16 มี.ค. 2563 14:35น.</Text>
                                </View>
                            </View>

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
                                            fontWeight: "bold",
                                            color: "#ff951e",
                                            fontSize: 15,
                                        }}>16 มี.ค. 2563</Text>
                                    </View>

                                    <Text style={{
                                        fontWeight: "bold",
                                        color: "#00c402",
                                        fontSize: 14,
                                    }} >สำเร็จแล้ว</Text>
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
                                            source={require("../assets/img/products/1605940984.jpg")}
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
                                                    fontWeight: 'bold',
                                                    fontSize: 14,
                                                    color: "#666",
                                                    maxWidth: '100%',
                                                    paddingTop:5,
                                                    letterSpacing: 0.5,
                                                    maxWidth: '100%',
                                                }}
                                            >
                                                ภาษาญี่ปุ่นเบื้องต้น 1 เรียนภาษาญี่ปุ่นเริ่มต้น
                                            </Text>
                                            <View style={{
                                                flexDirection: 'row',
                                                paddingHorizontal: 5,
                                                alignSelf: 'flex-end'
                                            }}>
                                                <Icon name="shield-checkmark-outline" size={20} color="#f1416c" />
                                                <Text
                                                    style={{
                                                        fontWeight: 400,
                                                        fontSize: 14,
                                                        marginLeft: 5,
                                                        color: '#9e9e9e',
                                                    }}
                                                >
                                                    รวมการสั่งซื้อ
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontWeight: 700,
                                                        fontSize: 15,
                                                        marginLeft: 5,
                                                        color: '#f1416c',
                                                    }}
                                                >
                                                    ฿1,500
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingBottom:5,
                                }}>
                                    <Text>หมายเลขคำสั่งซื้อ</Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }}>#JP1452893</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingBottom:5,
                                }}>
                                    <Text>เวลาชำระเงิน</Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }}>16 มี.ค. 2563 14:35น.</Text>
                                </View>
                            </View>

                            









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
        height: 800,
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