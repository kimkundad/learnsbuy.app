import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    Dimensions
} from "react-native";
import { categories, products } from "../data/index";
import Icon from 'react-native-vector-icons/Ionicons';
import CourseList from '../screens/CourseList'
import FileCourse from '../screens/FileCourse'
import useFile from '../../services/file';

const IMAGE_HEIGHT = 220;

const ProductDetail = ({ route, navigation }) => {

    const product = route.params.product;
    const [sortData, setSortData] = useState(product.c_id)
    const [showMore, setShowMore] = useState(false);
    const [activeColorIndex, setActiveColorIndex] = useState(0);
    const [activeSizeIndex, setActiveSizeIndex] = useState(0);
    const { data: getFile, isLoading: fetchLoading } = useFile(product.c_id)


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
                        color="#666"
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "#666",
                    }}
                >
                  
                </Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                    }}
                >
                    <Icon name="notifications-outline" size={28} color="#666" />
                </TouchableOpacity>
            </View>
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
                        fontWeight: "bold",
                        color: "#666",
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
                    <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#000",
                    }}
                    >
                    ฿ {product.price_course}
                    </Text>
                    <View style={{
                        flexDirection: "row",
                    }}>
                        {product.discount !== 0 ?
                        <Text style={{
                                                    fontWeight: 700,
                                                    fontSize: 16,
                                                    color: '#666',
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
                                                    color: '#666',
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
                    <TouchableOpacity
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
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: 18,
                        marginLeft: 10,
                        }}
                    >
                        สมัครเรียน
                    </Text>
                    </TouchableOpacity>
                </View>
                <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            padding: 10,
                            marginTop: 10,
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 16,
                            }}
                        >
                            เอกสารให้ Download
                        </Text>

                </View>
                <View 
                 style={{
                    marginBottom:10
                 }}
                > 
                    {fetchLoading ?
                            <View></View>
                            :
                            <View>
                        {getFile?.data?.file.map((file) =>
                            (
                        <FileCourse
                        img={require('../assets/img/pdf.png')}
                        title={file?.file_of_name}
                        bg="#fdddf3"
                        />
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
                            backgroundColor: "#fff",
                            padding: 10,
                            marginTop: 10,
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 16,
                            }}
                        >
                            Video คอร์ส
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 16,
                            }}
                        >
                            จำนวน { getFile?.data?.video.length }
                        </Text>

                </View>
                <View 
                 style={{
                    marginBottom:50
                 }}
                > 
                {fetchLoading ?
                            <View></View>
                            :
                            <View>
                        {getFile?.data?.video.map((videos) =>
                            (
                                <CourseList
                        num={videos.order_sort}
                        color="#fde6e6"
                        videos={videos}
                        onPress={()=>navigation.navigate('VideoPage')}
                   />
                            )
                        )}
                        </View>
                    
                            }
                </View>
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
      color: "#999",
      fontSize: 12,
      fontWeight: 'bold',
    },
  
    seeMore: {
      paddingHorizontal: 10,
      fontStyle: 'italic',
      textDecorationLine: 'underline',
      color: "#00c402",
      fontSize: 14,
      fontWeight: 'bold',
    },
  });