import React, { useState, useEffect } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View,
    StatusBar,
    Dimensions
} from "react-native";
import { categories, products } from "../data/index";
import Icon from 'react-native-vector-icons/Ionicons';
import CourseList from '../screens/CourseList'
import useFile from '../../services/file';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import Dialog from "react-native-dialog";
import { useFocusEffect } from '@react-navigation/native';

const IMAGE_HEIGHT = 220;

const ProductDetail = ({ route, navigation }) => {

    const { user, isLoading, error, isLogin, message } = useSelector(state => state.auth);
    const product = route.params.product;
    const [sortData, setSortData] = useState(product.c_id)
    const [showMore, setShowMore] = useState(false);
    const [activeColorIndex, setActiveColorIndex] = useState(0);
    const [activeSizeIndex, setActiveSizeIndex] = useState(0);
    const { data: getFile, isLoading: fetchLoading } = useFile(product.c_id)
    const [token, settoken] = useState(user?.token);
    const [isState, setIsState] = useState(false);
    const [getStatusx, setgetStatusx] = useState(0);
    const [getOid, setGetOid] = useState(0);
    const [isSuggestion, setIsSuggestion] = useState([]);
    const [visible, setVisible] = useState(false);
    const getMycourse = async () => {

        if (token) {
            try {
                const response = await axios.post('https://www.learnsbuy.com/api/getMyCoursecx5', { token: token })
                if (response?.data?.status == 200) {

                    console.error('Error response?.data?.data:', response?.data?.data);

                    const matchs = response?.data?.data.filter(res => { return res.course_id === product.id })
                    return matchs

                }
            } catch (error) {
                console.error('Error getDataUser:', error);
            }
        } else {
            console.log('not login')
        }
    }

    const handleCancel = () => {
        setVisible(false);
    };

    const handleCheck = async (id) => {

        try {
            const { data } = await axios.post('https://www.learnsbuy.com/api/check_mypoint', {
                token, id
            })
            console.log('check', data)
            if (data.status === 200) {

                setVisible(false);
                navigation.navigate('VideoPage2', { product: data.coursess })

            } else {
                setVisible(true);
            }

        } catch (err) {
            console.log('err xx00--> ', err)
            return err.response.data
        }



        // setVisible(true);
    }


    useFocusEffect(() => {

        if (token) {
            getMycourse()
                .then(matchs => {
                    // Do something with the filtered data
                    console.log(`product.id ${product.id}, matchs[0]?.course_i --> ${matchs[0]?.Oid}`);
                    if (matchs[0]?.course_id === product.id) {
                        setIsState(true)
                        setgetStatusx(matchs[0]?.statusxx)
                        setGetOid(matchs[0]?.Oid)
                        console.log('setIsState', isState)
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }

    }, []);

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#32d191" />
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
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
                    รายละเอียด
                </Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                    }}
                >

                </TouchableOpacity>
            </View>
            <ScrollView
                style={{
                    paddingHorizontal: 10,
                }}
            >
                <Dialog.Container visible={visible}>
                    <Dialog.Title style={{ fontFamily: "IBMPlexSansThai-Regular" }}>ไม่สามารถเข้าเรียนได้</Dialog.Title>
                    <Dialog.Description style={{ fontFamily: "IBMPlexSansThai-Regular" }}>
                        คอร์สของท่านหมดอายุแล้ว กรุณาสมัครเรียนใหม่ หรือติดต่อ LINE : @ZA-SHI เพื่อรับส่วนลด
                    </Dialog.Description>
                    <Dialog.Button style={{ fontFamily: "IBMPlexSansThai-Regular" }} label="ตกลง" onPress={handleCancel} />
                </Dialog.Container>
                <Image
                    style={{
                        width: "100%",
                        height: IMAGE_HEIGHT,
                        borderRadius: 10,
                    }}
                    source={{ uri: 'https://learnsbuy.com/assets/uploads/' + product.image_course }}
                />
                <View
                    style={{
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: "IBMPlexSansThai-Bold",
                            color: "#666666",
                        }}
                    >
                        {product.title_course}
                    </Text>

                    <View style={styles.postContentContainer}>
                        {product.detail_course.length > 300 ? (
                            showMore ? (
                                <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                                    <Text style={styles.postDescription}>{product.detail_course}</Text>
                                    <Text style={styles.seeMore}>Show less</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                                    <Text style={styles.postDescription}>
                                        {`${product.detail_course.slice(0, 300)}... `}
                                    </Text>
                                    <Text style={styles.seeMore}>Show more</Text>
                                </TouchableOpacity>
                            )
                        ) : (
                            <Text style={styles.postDescription}>{product.detail_course}</Text>
                        )}
                    </View>
                </View>
                <View
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <View>

                    {product.set_type_c === 1 ? 
                                    <Text>
                                    </Text>
                                    : 
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 24,
                                color: "#000000",
                            }}
                        >
                            ฿ {product.price_course}
                        </Text>
}
                        <View style={{
                            flexDirection: "row",
                        }}>
                            {product.discount !== 0 ?
                                <Text style={{
                                    fontWeight: 700,
                                    fontSize: 16,
                                    color: '#666666',
                                }}>
                                    จาก</Text>
                                :
                                <Text></Text>
                            }

                            {product.discount !== 0 ?
                                <Text
                                    style={{
                                        fontWeight: 200,
                                        fontSize: 12,
                                        color: '#666666',
                                        marginLeft: 10,
                                        paddingTop: 4,
                                        textDecorationLine: 'line-through'
                                    }}
                                >
                                    {product.discount} บาท
                                </Text>
                                :
                                <Text></Text>
                            }
                        </View>
                    </View>


                    {isLogin === true ?
                        <>
                            {isState === true ?
                                <>
                                    {getStatusx === 2 ?
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                        }}>
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: "#6c757d",
                                                paddingHorizontal: 20,
                                                paddingVertical: 2,
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                borderRadius: 50,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontFamily: "IBMPlexSansThai-Bold",
                                                    color: "#ffffff",
                                                    fontSize: 14,
                                                }}
                                            >
                                                สมัครแล้ว
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: "#32d191",
                                                paddingHorizontal: 20,
                                                paddingVertical: 2,
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                borderRadius: 50,
                                                marginLeft:10
                                            }}
                                            onPress={()=> 
                                                handleCheck( getOid )
                                            }
                                        >
                                            <Text
                                                style={{
                                                    fontFamily: "IBMPlexSansThai-Bold",
                                                    color: "#ffffff",
                                                    fontSize: 14,
                                                }}
                                            >
                                                ดูวิดีโอ
                                            </Text>
                                        </TouchableOpacity>
                                        </View>
                                        :
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: "#6c757d",
                                                paddingHorizontal: 30,
                                                paddingVertical: 7,
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                borderRadius: 50,
                                            }}
                                        >

                                            {/* <Text
    style={{
        fontFamily: "IBMPlexSansThai-Bold",
        color: "#ffffff",
        fontSize: 18,
    }}
>
    สมัครแล้ว
</Text> */}
                                            <Text
                                                style={{
                                                    fontFamily: "IBMPlexSansThai-Bold",
                                                    color: "#ffffff",
                                                    fontSize: 18,
                                                }}
                                            >
                                                รออนุมัติ
                                            </Text>

                                        </TouchableOpacity>

                                    }
                                </>
                                :
                                <>
                                {product.set_type_c === 1 ? 
                                    <Text>
                                    </Text>
                                    : 
                                    <TouchableOpacity
                                    onPress={() => navigation.navigate('Pay1', { course: product })}
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
                                    }
                                </>
                                
                            }
                        </>
                        :
                        <>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
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
                        marginTop: 10,
                        borderRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "IBMPlexSansThai-Bold",
                            fontSize: 16, color: "#666666"
                        }}
                    >
                        เอกสารเพิ่มเติม
                    </Text>

                </View>
                <View
                    style={{
                        marginBottom: 10
                    }}
                >
                    {fetchLoading ?
                        <View></View>
                        :
                        <View>
                            {getFile?.data?.file.map((file) =>
                            (
                                <>
                                    {isState === true ?
                                        <>
                                            <TouchableOpacity
                                                key={file.id}
                                                style={{
                                                    backgroundColor: "#ffffff",
                                                    flexDirection: "row",
                                                    borderRadius: 10,
                                                    paddingHorizontal: 7,
                                                    justifyContent: 'space-between',
                                                    padding: 5,
                                                    marginTop: 5,
                                                }}
                                                onPress={() => {
                                                    const externalURL = `https://learnsbuy.com/download_file_course/${file.id}`; // Replace with your external URL
                                                    Linking.openURL(externalURL);
                                                }}
                                            >
                                                <View key={file.id} style={{ flexDirection: "row", alignItems: "center", }}>
                                                    <Image
                                                        source={require('../assets/img/pdf.png')}
                                                        style={{ width: 30, height: 30 }}
                                                    />
                                                    <View>
                                                        <Text style={{
                                                            color: "#345c74",
                                                            fontFamily: "IBMPlexSansThai-Bold",
                                                            fontSize: 11,
                                                            paddingHorizontal: 10,
                                                        }}>{file?.file_of_name}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ alignItems: 'flex-end', paddingTop: 5 }}>
                                                    <Icon name="cloud-download-outline" size={20} color="#666666" />
                                                </View>
                                            </TouchableOpacity></>
                                        :
                                        <>
                                            <TouchableOpacity
                                                key={file.id}
                                                style={{
                                                    backgroundColor: "#ffffff",
                                                    flexDirection: "row",
                                                    borderRadius: 10,
                                                    paddingHorizontal: 7,
                                                    justifyContent: 'space-between',
                                                    padding: 5,
                                                    marginTop: 5,
                                                }}

                                            >
                                                <View key={file.id} style={{ flexDirection: "row", alignItems: "center", }}>
                                                    <Image
                                                        source={require('../assets/img/pdf.png')}
                                                        style={{ width: 30, height: 30 }}
                                                    />
                                                    <View>
                                                        <Text style={{
                                                            color: "#345c74",
                                                            fontFamily: "IBMPlexSansThai-Bold",
                                                            fontSize: 11,
                                                            paddingHorizontal: 10,
                                                        }}>{file?.file_of_name}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ alignItems: 'flex-end', paddingTop: 5 }}>
                                                    <Icon name="cloud-download-outline" size={20} color="#666666" />
                                                </View>
                                            </TouchableOpacity></>
                                    }

                                </>
                            )
                            )

                            }
                        </View>
                    }

                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "IBMPlexSansThai-Bold",
                            fontSize: 14, color: "#666666"
                        }}
                    >
                        เนื้อหาใน Video
                    </Text>
                    <Text
                        style={{
                            fontFamily: "IBMPlexSansThai-Bold",
                            fontSize: 14, color: "#666666"
                        }}
                    >
                        {/* จำนวน {getFile?.data?.video.length} */}
                    </Text>

                </View>
                <View
                    style={{
                        marginBottom: 50
                    }}
                >
                    {fetchLoading ?
                        <View></View>
                        :
                        <View>
                            {getFile?.data?.video.map((videos) =>
                            (
                                <CourseList
                                    key={videos.id}
                                    num={videos.order_sort}
                                    color="#fde6e6"
                                    videos={videos}
                                    bg="#fde6e6"
                                    onPress={() => navigation.navigate('VideoPage')}
                                />
                            )
                            )}
                        </View>

                    }
                </View>
                <View
                    style={{ height: 50 }}
                ></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    postContentContainer: {
        // borderWidth: 1,
        // borderColor: 'red',
        flexDirection: 'column',
    },

    postMedia: {
        //borderWidth: 1,
        //borderColor: 'red',
        width: '100%',
        height: 280,
        resizeMode: 'cover',
    },

    postDescription: {
        paddingTop: 10,
        paddingHorizontal: 5,
        color: "#999999",
        fontSize: 12,
        fontFamily: "IBMPlexSansThai-Regular",
    },

    seeMore: {
        paddingHorizontal: 10,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: "#00c402",
        fontSize: 14,
        fontFamily: "IBMPlexSansThai-Bold",
    },
});