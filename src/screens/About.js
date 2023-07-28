import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/ButtonsLogin'
import LinearGradient from 'react-native-linear-gradient';
import { List } from 'react-native-paper';

const win = Dimensions.get('window');

const ratio = win.width / 541; //541 is actual image width

const IMAGE_WITH = 180;
const IMAGE_HEIGHT = 118;

const About = ({ navigation }) => {

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
                    เกี่ยวกับเรา Learnsbuy
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
                            flexDirection: 'row'
                        }}>
                            <Image
                                style={styles.imageStyle}
                                source={require("../assets/img/IMG_2647-1-2.png")}
                            />
                        </View>
                        
                        <View style={{
                            flexDirection: "column",
                            marginTop: 0,
                            paddingHorizontal: 10,
                        }}>


                            <View style={{
                                alignItems: "center",
                            }}>
                                <Text style={{
                                    fontSize: 22,
                                    color: "#038206",
                                    fontWeight: "bold"
                                }}>ครูพี่โฮม</Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: "#666",
                                    fontWeight: "bold"
                                }}>ผู้ก่อตั้งสถาบันสอนถาษาญี่ปุ่น "เสาหลักแห่งศิลป์ญี่ปุ่น"</Text>
                            </View>
                            <View style={{
                                alignItems: "center",
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#666",
                                    marginTop: 5,
                                    fontWeight: "bold"
                                }}>พรหมเทพ ชัยกิตติวณิชย์ (ครูพี่โฮม ZA-SHI)</Text>
                                <Text>สถาบันติว PAT ญี่ปุ่นและภาษาญี่ปุ่น ZA-SHI ภาษาญี่ปุ่น (ครูพี่โฮม) คนแรกและคนเดียวที่ได้ PAT ญี่ปุ่น 300 คะแนนเต็ม เกียรตินิยมอันดับ 1 (เหรียญทอง) อักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</Text>

                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    padding: 10,
                                    alignItems: "center",
                                }}
                            >
                                <View style={{
                                    backgroundColor: "#32d19129",
                                    paddingVertical: 4,
                                    paddingHorizontal: 6,
                                    borderRadius: 20
                                }}>
                                    <Icon name="shield-checkmark-outline" size={20} color="#00c402" />
                                </View>
                                <View>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: 12,
                                        paddingHorizontal: 20,
                                        fontWeight: 700,
                                        maxWidth: '100%'
                                    }}>
                                        อักษรศาสตร์บัณฑิต จุฬาลงกรณ์มหาวิทยาลัย เกียรตินิยมอันดับ 1 (เหรียญทอง) เอกภาษาญี่ปุ่น
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    padding: 10,
                                    alignItems: "center",
                                }}
                            >
                                <View style={{
                                    backgroundColor: "#32d19129",
                                    paddingVertical: 4,
                                    paddingHorizontal: 6,
                                    borderRadius: 20
                                }}>
                                    <Icon name="shield-checkmark-outline" size={20} color="#00c402" />
                                </View>
                                <View>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: 12,
                                        paddingHorizontal: 20,
                                        fontWeight: 700,
                                        maxWidth: '100%'
                                    }}>
                                        (ครูพี่โฮม) คนแรกและคนเดียวในประเทศไทยที่สอบ PAT ภาษาญี่ปุ่นได้ 300 คะแนนเต็ม
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    padding: 10,
                                    alignItems: "center",
                                }}
                            >
                                <View style={{
                                    backgroundColor: "#32d19129",
                                    paddingVertical: 4,
                                    paddingHorizontal: 6,
                                    borderRadius: 20
                                }}>
                                    <Icon name="shield-checkmark-outline" size={20} color="#00c402" />
                                </View>
                                <View>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: 12,
                                        paddingHorizontal: 20,
                                        fontWeight: 700,
                                        maxWidth: '100%'
                                    }}>
                                        ติวเตอร์ภาษาญี่ปุ่นอันดับ 1 ผู้ก่อตั้งสถาบันสอนถาษาญี่ปุ่น Za-shi, Learnsabuy มีสถิติติวลูกศิษย์ที่ติดอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ได้มากที่สุด
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    padding: 10,
                                    alignItems: "center",
                                }}
                            >
                                <View style={{
                                    backgroundColor: "#32d19129",
                                    paddingVertical: 4,
                                    paddingHorizontal: 6,
                                    borderRadius: 20
                                }}>
                                    <Icon name="shield-checkmark-outline" size={20} color="#00c402" />
                                </View>
                                <View>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: 12,
                                        paddingHorizontal: 20,
                                        fontWeight: 700,
                                        maxWidth: '100%'
                                    }}>
                                        ติวเตอร์ภาษาญี่ปุ่นที่ได้รับเชิญจากสื่อชั้นนำระดับประเทศ ไปตัว PAT ทั้งทาง GTH ON AIR (PLAY CHANNEL) และ TRUE VISIONS หรือ Trueplookpanya ( AdGang59 : 42 PAT 7 ภาษาญี่ปุ่น ครูพี่โฮม ZA-SHI )
                                    </Text>
                                </View>
                            </View>

                            <View style={{
                                alignItems: "center",
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    color: '#038206',
                                    marginTop: 5,
                                    fontWeight: "bold"
                                }}>ผลงานและรางวัล (ครูพี่โฮม)</Text>


                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 4,
                                        paddingHorizontal: 6,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="shield-checkmark-outline" size={20} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#000",
                                            fontSize: 12,
                                            paddingHorizontal: 20,
                                            fontWeight: 700,
                                            maxWidth: '100%'
                                        }}>
                                            ราลวัลชนะเลิศอันดับที่ 1 ในการแข่งขันเขียนเรียงความภาษาญี่ปุ่นในระดับอุดมศึกษาทั่วประเทศ
                                        </Text>
                                    </View>
                                </View>


                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 4,
                                        paddingHorizontal: 6,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="shield-checkmark-outline" size={20} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#000",
                                            fontSize: 12,
                                            paddingHorizontal: 20,
                                            fontWeight: 700,
                                            maxWidth: '100%'
                                        }}>
                                        ได้รับทุนการศึกษาไปเรียนภาษาญี่ปุ่น ณ กรุงโตเกียว ประเทศญี่ปุ่น
                                        </Text>
                                    </View>
                                </View>


                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 4,
                                        paddingHorizontal: 6,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="shield-checkmark-outline" size={20} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#000",
                                            fontSize: 12,
                                            paddingHorizontal: 20,
                                            fontWeight: 700,
                                            maxWidth: '100%'
                                        }}>
                                        ประกาศนียบัตรนิสิตอักษรศาสตร์ที่มีผลการเรียนดีเด่น เงินทุนศาสตราจารย์ รอง ศยามานนท์ - คณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 4,
                                        paddingHorizontal: 6,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="shield-checkmark-outline" size={20} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#000",
                                            fontSize: 12,
                                            paddingHorizontal: 20,
                                            fontWeight: 700,
                                            maxWidth: '100%'
                                        }}>
                                            ตัวแทนเอกภาษาญี่ปุ่นและจุฬาลงกรณ์มหาวิทยาลัย กล่าวสุนทรพจน์ภาษาญี่ปุ่นขอบคุณประธานบริษัทและคณะผู้บริหารบริษัท โตโยต้า มอเตอร์ (ประเทศไทย) จำกัด เนื่องในโอกาสที่มาเยือนจุฬาลงกรณ์มหาวิทยาลัย
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 4,
                                        paddingHorizontal: 6,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="shield-checkmark-outline" size={20} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#000",
                                            fontSize: 12,
                                            paddingHorizontal: 20,
                                            fontWeight: 700,
                                            maxWidth: '100%'
                                        }}>
                                            ตัวแทนเอกภาษาญี่ปุ่นและจุฬาลงกรณ์มหาวิทยาลัย กล่าวสุนทรพจน์ภาษาญี่ปุ่นขอบคุณประธานบริษัทและคณะผู้บริหารบริษัท ธนาคาร Mitsubishi Tokyo UFJ ประเทศญี่ปุ่น เนื่องในโอกาสที่มาเยือนจุฬาลงกรณ์มหาวิทยาลัย
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 4,
                                        paddingHorizontal: 6,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="shield-checkmark-outline" size={20} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#000",
                                            fontSize: 12,
                                            paddingHorizontal: 20,
                                            fontWeight: 700,
                                            maxWidth: '100%'
                                        }}>
                                           หัวหน้าโครงการภาษาญี่ปุ่นงานจุฬาลงกรณ์มหาวิทยาลัย วิชาการ คณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
                                        </Text>
                                    </View>
                                </View>

                            </View>


                        </View>

                    </View>
                </View>



            </ScrollView>
        </LinearGradient>
    )

}

export default About

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
        marginBottom: 20,
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
        backgroundColor: '#FFF',
        marginHorizontal: -10,
        paddingBottom:50
    },
    col: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: 'center'
    },
})