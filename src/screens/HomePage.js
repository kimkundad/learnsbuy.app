import React, { useState } from "react";
import { 
    Text, 
    View, 
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Image } from 'react-native'

import { categories, products, slideimage } from "../data/index";
import Icon from 'react-native-vector-icons/Ionicons';
import { SliderBox } from "react-native-image-slider-box";
import FastImage from 'react-native-fast-image'
import Package from '../screens/Package'


const IMAGE_WITH = 180;
const IMAGE_HEIGHT = 118;


const HomePage = ({ navigation: { navigate } }) => {

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    const handleProductPress = () => {};


    return (
        <SafeAreaView>
            <View>
            <StatusBar backgroundColor="#32d191" />
            <View 
                style={{ 
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                    borderBottomColor: "#d6d9dc",
                    borderBottomWidth: 0.3,
                 }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 10,
                        paddingBottom:5
                    }}
                >
                    <Image
                        source={require("../assets/img/300-11.jpg")}
                        style={{ width:40, height:40, borderRadius: 150 / 2, }}
                    />
                    <Text
                        style={{ 
                            paddingLeft: 10,
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        Hi, Parinya Ku.
                    </Text>
                </View>
                <View
                style={{ 
                    flexDirection: "row",
                    alignItems: "center"
                 }}
                 >
                    <TouchableOpacity>
                    <Icon name="notifications-outline" size={28} color="#666" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                style={{
                marginBottom: 120
                }}
            >
            

            <View>
                <SliderBox 
                ImageComponent={FastImage}
                images={slideimage} 
                dotColor="#32d191" 
                autoplay={true}
                inactiveDotColor="white" />
            </View>

            <View
                style={{ paddingHorizontal: 10, marginTop: 5 }}
            >


<View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 16,
                                paddingTop: 5
                            }}
                        >
                            แพ็กเกจสุดคุ้ม
                        </Text>
                        <TouchableOpacity
                            style={{
                            paddingHorizontal:0,
                            paddingVertical:2,
                            flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                            marginTop: 5
                            }}
                        >
                            
                            <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 14,
                                color:"#666",
                                marginRight: 2,
                            }}
                            >
                            ทั้งหมด
                            </Text>
                            <Icon
                                name="chevron-forward-outline"
                                size={18}
                                color="#666"
                            />
                        </TouchableOpacity>
                    </View>

            
                

            <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:230}}
                >
                    <Package
                        title="AD1 + AD2 + เก็งข้อสอบ A-Level ญี่ปุ่น"
                        img={require("../assets/img/package/1650426661-AD1AD2_15.png")}
                    />
                    <Package
                        title="คอร์สภาษาญี่ปุ่นเบื้องต้น 0 สู่ N4 (A-Level)"
                        img={require("../assets/img/package/1650431014-Marugoto.jpg")}
                    />
                    <Package
                        title="ติว A-Level ญี่ปุ่น สอนสด 2023 TCAS67"
                        img={require("../assets/img/package/1657965805-Japanese_ALevel_live.png")}
                    />
                    <Package
                        title="เก็งข้อสอบ A-Level ญี่ปุ่น สอนสด 2023 TCAS67"
                        img={require("../assets/img/package/1679979578-Intensive_A-Level_Japanese.jpeg")}
                    />
            
            </ScrollView>

            
            <View>
                <Text
                    style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    paddingTop: 5
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
                        onPress={() => setActiveCategoryIndex(index)}
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
                        key={category.id}
                    >
                        <Text
                        style={{
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
                <View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 16,
                                paddingTop: 5
                            }}
                        >
                            คอร์สใหม่ล่าสุด
                        </Text>
                        <TouchableOpacity
                            style={{
                            paddingVertical:2,
                            flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                            marginTop: 5
                            }}
                        >
                            
                            <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 14,
                                color:"#666",
                                marginRight: 2,
                            }}
                            >
                            ทั้งหมด
                            </Text>
                            <Icon
                                name="chevron-forward-outline"
                                size={18}
                                color="#666"
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                    >
                        {products.map((product) => (
                            <TouchableOpacity
                            onPress={() =>
                                navigate("Product-detail", { product: product })
                            }
                            style={{
                                marginVertical: 5,
                            }}
                            key={product.id}
                            >
                            <Image
                                style={{
                                width: IMAGE_WITH,
                                height: IMAGE_HEIGHT,
                                borderRadius: 10,
                                }}
                                source={product.image}
                            />
                            <Text ellipsizeMode='tail' numberOfLines={2}
                                style={{
                                    width: 180,
                                fontWeight: 'bold',
                                fontSize: 13,
                                color: "#666",
                                marginVertical: 5,
                                }}
                            >
                                {product.name}
                            </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
            </View>
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomePage
