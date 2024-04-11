import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, StatusBar, Dimensions, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { categories, products, slideimage } from "../data/index";
import Header from '../components/header'
import useCourse from '../../services/packagex';
import useCoursem from '../../services/packm';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect } from '@react-navigation/native';
import CardCourse from '../components/CardCourse2'
import axios from 'axios';

const IMAGE_HEIGHT = 220;

const Buffet = () => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

      const navigation = useNavigation();
    const { user, isLoading, error, isLogin, message } = useSelector(state => state.auth);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [sortData, setSortData] = useState(0)
    const { data: course, isLoading: fetchLoading2 } = useCourse(sortData)
    const { data: coursem, isLoading: fetchLoading3 } = useCoursem()
    const [token, settoken] = useState(user?.token);
    const [getStatusx, setgetStatusx] = useState(0);


    const getDataUser = async () => {

        try {
            const { data } = await axios.post('https://www.learnsbuy.com/api/get_mycousem', {
                token
            })
            console.log('data xx00--> ', data)
            if(data.status === 200){
                console.log('response', data?.data)
                setgetStatusx(data?.data)
            }
            
          } catch (err) {
            console.log('err xx00--> ', err)
            return err.response.data
          }
      }

      useFocusEffect(() => {

        getDataUser();
    }, []);

    console.log('-->', coursem?.data)
    return (
        <SafeAreaView>
            <View>
                <StatusBar backgroundColor="#32d191" />
                <Header/>
                <ScrollView
                    style={{
                        marginBottom: 10,
                        paddingHorizontal: 10,
                        marginTop: 10,
                        marginBottom: 120
                    }}
                >
               <View>
                            <Text
                                style={{
                                    fontFamily: "IBMPlexSansThai-Bold",
                                    fontSize: 16,
                                    paddingTop: 5,
                                    marginTop:0,
                                    color: "#666",
                                }}
                            >
                                คอร์สเรียนรายเดือน
                            </Text>
                           
                            <View
                                style={{
                                    marginBottom: 80
                                }}
                            >
                           <ScrollView
                style={{
                    paddingHorizontal: 10,
                }}
            >
                <Image
                    style={{
                        width: "100%",
                        height: IMAGE_HEIGHT,
                        borderRadius: 10,
                    }}
                    source={{ uri: 'https://learnsbuy.com/web_stream/img/package/' + course?.data.package_image }}
                />
                <View 
                    style={{ 
                        marginTop: 10,
                    }}
                >
                    <Text
                        style={{
                        fontSize: 18,
                        fontFamily: "IBMPlexSansThai-Bold",
                        color: "#000000",
                        }}
                    >
                        {course?.data.package_name}
                    </Text>

                    <View
                    style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    }}
                >
                    <View>
                    <Text
                    style={{
                        fontSize: 16,
                        fontFamily: "IBMPlexSansThai-Bold",
                        color: "#666666",
                    }}
                    >
                    ราคา {course?.data.package_price} บาท / เดือน
                    </Text>
                    </View>

                    {isLogin === true ?
                        <>
                        {getStatusx === 0 &&
                            <TouchableOpacity
                    onPress={()=> navigation.navigate('Pay3', { product: course?.data })}
                    style={{
                        backgroundColor: "#32d191",
                        paddingHorizontal: 15,
                        paddingVertical: 5,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "40%",
                        borderRadius: 50,
                    }}
                    >
                    <Icon
                        name="cart-outline"
                        size={22}
                        color="#fff"
                    />
                    <Text
                        style={{
                        fontFamily: "IBMPlexSansThai-Bold",
                        color: "#ffffff",
                        fontSize: 18,
                        marginLeft: 10,
                        }}
                    >
                        สมัครเรียน
                    </Text>
                    </TouchableOpacity>
                        
                        }
                        {getStatusx === 1 &&

<TouchableOpacity
style={{
    backgroundColor: "#32d191",
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "40%",
    borderRadius: 50,
}}
>
<Icon
    name="cart-outline"
    size={22}
    color="#fff"
/>
<Text
    style={{
    fontFamily: "IBMPlexSansThai-Bold",
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 10,
    }}
>
    รออนุมัติ
</Text>
</TouchableOpacity>

                        }
                        {getStatusx === 2 &&

<TouchableOpacity
onPress={()=> navigation.navigate('Pay4', { product: course?.data })}
style={{
    backgroundColor: "#32d191",
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    borderRadius: 50,
}}
>
<Icon
    name="cart-outline"
    size={20}
    color="#fff"
/>
<Text
    style={{
    fontFamily: "IBMPlexSansThai-Bold",
    color: "#ffffff",
    fontSize: 15,
    marginLeft: 5,
    }}
>
    สมัครแล้ว / ต่ออายุ
</Text>
</TouchableOpacity>

                        }
                        </>   
                        :  
                        <>
                        <TouchableOpacity
                    onPress={()=> navigation.navigate('Login')}
                    style={{
                        backgroundColor: "#32d191",
                        paddingHorizontal: 30,
                        paddingVertical: 7,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "50%",
                        borderRadius: 50,
                    }}
                    >
                    <Icon
                        name="cart-outline"
                        size={22}
                        color="#fff"
                    />
                    <Text
                        style={{
                        fontFamily: "IBMPlexSansThai-Bold",
                        color: "#ffffff",
                        fontSize: 18,
                        marginLeft: 10,
                        }}
                    >
                        สมัครเรียน
                    </Text>
                    </TouchableOpacity>
                        </> 
                    }     

                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "#ffffff",
                            padding: 10,
                            marginTop: 15,
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "IBMPlexSansThai-Bold",
                                fontSize: 16,
                                color: "#666",
                            }}
                        >
                            คอร์สเรียน ภายในแพ็กเกจรายเดือน
                        </Text>
                </View>
                <View style={{
                    paddingHorizontal: 5,
                }}>
            <View style={{flex:2,flexDirection:'column',paddingTop:10, paddingHorizontal:0, paddingBottom:50}} >
                

            {fetchLoading3 ?
                            <View></View>
                            :
                            <View>
                                {coursem?.data?.map((course) => (
                                <CardCourse
                                    key={course.id}
                                    title={course.title_course}
                                    img={{ uri: 'https://learnsbuy.com/assets/uploads/' + course.image_course }}
                                    price={course.price_course}
                                    discount={course.discount}
                                    onPress={() => navigation.navigate("Product-detail", { product: course })}
                                    course={course}
                                />
                                ))}
                                </View>
                        }
                
            </View>
            </View>

                    </View>

                    </ScrollView>
                           
                              
                            </View>
                        </View>
                        
                </ScrollView>
                
            </View>
        </SafeAreaView>
    )

}

export default Buffet