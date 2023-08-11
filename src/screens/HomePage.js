import React, { useState } from "react";
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Image
} from 'react-native'

import { categories, products, slideimage } from "../data/index";
import Icon from 'react-native-vector-icons/Ionicons';
import { SliderBox } from "react-native-image-slider-box";
import FastImage from 'react-native-fast-image'
import Package from '../screens/Package'
import useCourse from '../../services/course';
import useslideShow from '../../services/slideShow';
import usePackage from '../../services/package';
import Header from '../components/header'

const IMAGE_WITH = 180;
const IMAGE_HEIGHT = 118;

const HomePage = ({ navigation: { navigate } }) => {

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [sortData, setSortData] = useState(0)
    const handleProductPress = () => { };
    const { data: course, isLoading: fetchLoading2 } = useCourse(sortData)
    const { data: slideShow, isLoading: fetchLoading } = useslideShow()
    const { data: pacKage, isLoading: fetchLoading3 } = usePackage()
    console.log('data-->', slideShow?.data)
    return (
        <SafeAreaView>
            <View>
                <StatusBar backgroundColor="#32d191" />
                <Header/>
                <ScrollView
                    style={{
                        marginBottom: 120
                    }}
                >

                    {fetchLoading ?
                        <View></View>
                        :
                        <View>

                            <SliderBox
                                ImageComponent={FastImage}
                                images={slideShow?.data}
                                dotColor="#32d191"
                                autoplay={true}
                                circleLoop={true}
                                inactiveDotColor="white" />


                        </View>
                    }

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
                            onPress={() =>
                                navigate("PackageAll")
                            }
                                style={{
                                    paddingHorizontal: 0,
                                    paddingVertical: 2,
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
                                        color: "#666",
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



                        {fetchLoading3 ?
                            <View></View>
                            :
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={{ height: 240 }}
                            >
                                {pacKage?.data?.get_package.map((pack) => (
                                <Package
                                    title={pack.c_pack_name}
                                    img={{ uri: 'https://learnsbuy.com/assets/uploads/' + pack.c_pack_image }}
                                    price={pack.c_pack_price}
                                    discount={pack.c_pack_price_2}
                                    pack={pack}
                                    onPress={()=> navigate('PackageDetail', { pack: pack })}
                                />
                                ))}
                            </ScrollView>
                        }



                        <View>
                            <Text
                                style={{
                                    fontWeight: "bold",
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
                            <View
                                style={{
                                    marginBottom: 80
                                }}
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
                                        คอร์สใหม่ล่าสุด
                                    </Text>
                                    <TouchableOpacity
                                        style={{
                                            paddingVertical: 2,
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            marginTop: 5
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigate("Course")
                                            }
                                            >
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: 14,
                                                color: "#666",
                                                marginRight: 2,
                                            }}
                                        >
                                            ทั้งหมด
                                        </Text>
                                        </TouchableOpacity>
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
                                                fontWeight: 'bold',
                                                fontSize: 12,
                                                color: "#666",
                                            }}
                                        >
                                            {product.title_course}
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            
                                        }}>
                                            <Text
                                                style={{
                                                    fontWeight: 700,
                                                    fontSize: 14,
                                                    color: '#00c402',
                                                    paddingTop: 1
                                                }}
                                            >
                                                {product.price_course}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontWeight: 600,
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
                                        </View>
                                        
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
