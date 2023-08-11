import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/ButtonsLogin'
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import myCourse from '../../services/myCourse';

const win = Dimensions.get('window');

const ratio = win.width / 541; //541 is actual image width

const IMAGE_WITH = 180;
const IMAGE_HEIGHT = 118;

const EditName = ({ navigation }) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

    const { user, isLoading, error, isLogin, message } = useSelector(state => state.auth);
    const { data: mycourse, isLoading: fetchLoading } = myCourse()
    useEffect(() => {

        if (isLogin === false) {
            navigation.navigate('Login')
        } 

    },);

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
                    onPress={() => navigation.navigate('Profile')}
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
                    คอร์สเรียนของฉัน
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
                        <View style={styles.col}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    padding: 15,
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
                                    <Icon name="medal-outline" size={25} color="#ff741a" />
                                </View>
                                <View>
                                    <Text style={{
                                        color: "#345c74",
                                        fontSize: 13,
                                        paddingHorizontal: 20,
                                        width: 270
                                    }}>แต้มดูวิดีโอคงเหลือ</Text>
                                    <Text style={{
                                        color: "#000",
                                        fontSize: 14,
                                        paddingHorizontal: 20,
                                        fontWeight: 700,
                                    }}>
                                        {numberWithCommas(user?.profile?.user_coin)}
                                    </Text>
                                </View>

                            </View>

                        </View>

                        <View style={{
                            flexDirection: "column",
                            marginTop: 10,
                            paddingHorizontal: 10
                        }}>
                            {fetchLoading ?
                                <View></View>
                                :
                                <View>
                                    {mycourse?.data?.map((pack) => (
                            <TouchableOpacity
                            onPress={()=> 
                                navigation.navigate('VideoPage', { product: pack }) 
                            }
                            
                            style={{
                                marginVertical: 5,
                                borderBottomColor: "#dadde1",
                                borderBottomWidth: 1,
                            }}
                            >
                            <View style={{
                                width: '100%',
                                height: 100,
                                flexDirection: "row",
                                marginBottom: 10,
                                alignItems: 'center',
                            }}>
                                <View style={{
                                    width: '50%',
                                    height: 100,
                                    
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
                                        marginLeft:10
                                    }}
                                >
                                    <View>
                                        <Text ellipsizeMode='tail' numberOfLines={2}
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: 14,
                                                color: "#666",
                                                maxWidth: '100%',
                                                letterSpacing: 0.5,
                                                maxWidth: '100%',
                                            }}
                                        >
                                            {pack.title_course} 
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            paddingHorizontal: 5,
                                            marginTop:5
                                        }}>
                                            <Icon name="pricetags-outline" size={16} color="#4caf50"  />
                                            <Text
                                                style={{
                                                    fontWeight: 400,
                                                    fontSize: 14,
                                                    marginLeft:5,
                                                    color: '#9e9e9e',
                                                }}
                                            >
                                                {pack.code_course}
                                            </Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            paddingHorizontal: 5,
                                            marginTop:5
                                        }}>
                                            <Icon name="stopwatch-outline" size={16} color="#ff741a"  />
                                            <Text
                                                style={{
                                                    fontWeight: 400,
                                                    fontSize: 14,
                                                    marginLeft:5,
                                                    color: '#9e9e9e',
                                                }}
                                            >
                                                {pack.time_course}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            </TouchableOpacity>
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

export default EditName

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
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
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