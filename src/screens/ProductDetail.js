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

const IMAGE_HEIGHT = 220;

const ProductDetail = ({ route, navigation }) => {

    const product = route.params.product;

    const [showMore, setShowMore] = useState(false);
    const [activeColorIndex, setActiveColorIndex] = useState(0);
    const [activeSizeIndex, setActiveSizeIndex] = useState(0);

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
                    Detail
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
                    source={product.image}
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
                        {product.name}
                    </Text>
                   
                    <View style={styles.postContentContainer}>
                    {product.description.length > 300 ? (
                        showMore ? (
                        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                            <Text style={styles.postDescription}>{product.description}</Text>
                            <Text style={styles.seeMore}>Show less</Text>
                        </TouchableOpacity>
                        ) : (
                        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                            <Text style={styles.postDescription}>
                            {`${product.description.slice(0, 300)}... `}
                            </Text>
                            <Text style={styles.seeMore}>Show more</Text>
                        </TouchableOpacity>
                        )
                    ) : (
                        <Text style={styles.postDescription}>{product.description}</Text>
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
                    <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#000",
                    }}
                    >
                    ฿ {product.price}
                    </Text>
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
                <FileCourse
                        img={require('../assets/img/pdf.png')}
                        title="ชีทเพิ่มเติม ไวยากรณ์ คำศัพท์ ภาษาญี่ปุ่น"
                        bg="#fdddf3"
                   />
                   <FileCourse
                        img={require('../assets/img/pdf.png')}
                        title="ชีทเพิ่มเติม ไวยากรณ์ บทเรียนที่ 2"
                        bg="#fdddf3"
                   />
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
                            จำนวน 60
                        </Text>

                </View>
                <View 
                 style={{
                    marginBottom:50
                 }}
                > 
                    <CourseList
                        num={1}
                        color="#fde6e6"
                        duration="2 hours, 20 minutes"
                        title="บทนำและ Hiragana ตอนที่ 1"
                        onPress={()=>navigation.navigate('VideoPage')}
                   />
                   <CourseList
                        num={1}
                        color="#fde6e6"
                        duration="2 hours, 20 minutes"
                        title="Hiragana ตอนที่ 2"
                        onPress={()=>navigation.navigate('VideoPage')}
                   />
                   <CourseList
                        num={1}
                        color="#fde6e6"
                        duration="2 hours, 20 minutes"
                        title="การออกเสียง Hiragana พื้นฐาน"
                        onPress={()=>navigation.navigate('VideoPage')}
                   />
                   <CourseList
                        num={1}
                        color="#fde6e6"
                        duration="2 hours, 20 minutes"
                        title="บทที่ 2 ไวยากรณ์ ตอนที่ 1"
                        onPress={()=>navigation.navigate('VideoPage')}
                   />
                   <CourseList
                        num={1}
                        color="#fde6e6"
                        duration="2 hours, 20 minutes"
                        title="บทที่ 2 ไวยากรณ์ ตอนที่ 2"
                        onPress={()=>navigation.navigate('VideoPage')}
                   />
                   <CourseList
                        num={1}
                        color="#fde6e6"
                        duration="2 hours, 20 minutes"
                        title="บทที่ 3 ไวยากรณ์ ตอนที่ 1"
                        onPress={()=>navigation.navigate('VideoPage')}
                   />
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