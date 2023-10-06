import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, StatusBar, Dimensions, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { categories, products, slideimage } from "../data/index";
import Header from '../components/header'
import useCourse from '../../services/course';

const IMAGE_WITH = 180;
const IMAGE_HEIGHT = 118;

const Course = ({ navigation: { navigate } }) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [sortData, setSortData] = useState(0)
    const { data: course, isLoading: fetchLoading2 } = useCourse(sortData)

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
                                    marginTop:0
                                }}
                            >
                                คอร์สเรียนทั้งหมด
                            </Text>
                            <ScrollView
                                horizontal
                                contentContainerStyle={{
                                    paddingVertical: 10,
                                }}
                            >
                                {[{ id: 0, name: "All" }, ...categories].map((category, index) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setActiveCategoryIndex(index)
                                            setSortData(index)
                                        }}
                                        style={[
                                            {
                                                paddingHorizontal: 10,
                                                paddingVertical: 5,
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                borderColor: "#32d191",
                                                marginRight: 10,
                                            },
                                            activeCategoryIndex === index && {
                                                backgroundColor: "#32d191",
                                            },
                                        ]}
                                        key={index}
                                    >
                                        <Text
                                            style={{
                                                fontFamily: "IBMPlexSansThai-Regular",
                                                color:
                                                    activeCategoryIndex === index
                                                        ? "#fff"
                                                        : "#666",
                                                fontSize: 14,
                                            }}
                                        >
                                            {category.name}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <View
                                style={{
                                    marginBottom: 80
                                }}
                            >
                                

                                <View
                                    style={{
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    {course?.data?.get_course.map((product) => (
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigate("Product-detail", { product: product })
                                            }
                                            style={{
                                                marginVertical: 5,
                                                elevation:2,
                                                backgroundColor:"#FFF",
                                                borderRadius:15,
                                                width: IMAGE_WITH,
                                            }}
                                            key={product.c_id}
                                        >
                                            <Image
                                                style={{
                                                    width: IMAGE_WITH,
                                                    height: IMAGE_HEIGHT,
                                                    borderTopLeftRadius:10,
                                                    borderTopRightRadius: 10
                                                }}
                                                source={{ uri: 'https://learnsbuy.com/assets/uploads/' + product.image_course }}
                                            />
                                            {/* <Text ellipsizeMode='tail' numberOfLines={2}
                                                style={{
                                                    width: 180,
                                                    fontWeight: 'bold',
                                                    fontSize: 13,
                                                    color: "#666",
                                                    marginVertical: 5,
                                                }}
                                            >
                                                {product.title_course}
                                            </Text> */}

                                            <View
                                    style={{
                                        flex: 1,
                                        height: '100%',
                                        marginLeft:10,
                                        marginTop:5,
                                        paddingBottom:5
                                    }}
                                >
                                    <View>
                                        <Text ellipsizeMode='tail' numberOfLines={2}
                                            style={{
                                                fontFamily: "IBMPlexSansThai-Medium",
                                                fontSize: 12,
                                                color: "#666",
                                                lineHeight: 18,
                                            }}
                                        >
                                            {product.title_course}
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            
                                        }}>
                                            <Text
                                                style={{
                                                    fontFamily: "IBMPlexSansThai-Bold",
                                                    fontSize: 14,
                                                    color: '#00c402',
                                                    paddingTop: 1
                                                }}
                                            >
                                                {numberWithCommas(product.price_course)}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily: "IBMPlexSansThai-Bold",
                                                    fontSize: 14,
                                                    marginLeft:5,
                                                    color: '#666',
                                                    paddingTop: 2
                                                }}
                                            >
                                                บาท
                                            </Text>
                                            {product.discount !== 0 ?
                                                <Text
                                                style={{
                                                    fontFamily: "IBMPlexSansThai-Light",
                                                    fontSize: 12,
                                                    color: '#666',
                                                    marginLeft: 10,
                                                    paddingTop: 4,
                                                    textDecorationLine: 'line-through'
                                                }}
                                            >
                                                {numberWithCommas(product.discount)} บาท
                                            </Text>
                                            : 
                                                <Text></Text>
                                            }
                                            
                                            
                                        </View>
                                        </View>
                                        </View>
                                        
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>
                        
                </ScrollView>
                
            </View>
        </SafeAreaView>
    )

}

export default Course