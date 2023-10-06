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
import Icon from 'react-native-vector-icons/Ionicons';
import getPackageId from '../../services/packageId';
import CardCourse from '../components/CardCourse'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

const IMAGE_HEIGHT = 220;

const PackageDetail = ({ route }) => {

    const { user, isLoading, error, isLogin, message } = useSelector(state => state.auth);
    const pack = route.params.pack;
    const navigation = useNavigation();

    const [showMore, setShowMore] = useState(false);
    const { data: getPackage, isLoading: fetchLoading } = getPackageId(pack.id)

    console.log('packv', pack )
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
                        color: "#666666",
                    }}
                >
                  
                </Text>
                
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
                    source={{ uri: 'https://learnsbuy.com/assets/uploads/' + pack.c_pack_image }}
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
                        {pack.c_pack_name}
                    </Text>
                   
                    <View style={styles.postContentContainer}>
                    {pack.c_pack_detail.length > 300 ? (
                        showMore ? (
                        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                            <Text style={styles.postDescription}>{pack.c_pack_detail}</Text>
                            <Text style={styles.seeMore}>Show less</Text>
                        </TouchableOpacity>
                        ) : (
                        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                            <Text style={styles.postDescription}>
                            {`${pack.c_pack_detail.slice(0, 300)}... `}
                            </Text>
                            <Text style={styles.seeMore}>Show more</Text>
                        </TouchableOpacity>
                        )
                    ) : (
                        <Text style={styles.postDescription}>{pack.c_pack_detail}</Text>
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
                        color: "#000000",
                    }}
                    >
                    ฿ {pack.c_pack_price}
                    </Text>
                    <View style={{
                        flexDirection: "row",
                    }}>
                        {pack.c_pack_price_2 !== 0 ?
                        <Text style={{
                            fontFamily: "IBMPlexSansThai-Bold",
                                                    fontSize: 16,
                                                    color: '#666666',
                                                }}>
                            จาก</Text>
                        : 
                        <Text></Text>
                    }
                    
                    {pack.c_pack_price_2 !== 0 ?
                                                <Text
                                                style={{
                                                    fontFamily: "IBMPlexSansThai-Regular",
                                                    fontSize: 12,
                                                    color: '#666666',
                                                    marginLeft: 10,
                                                    paddingTop: 4,
                                                    textDecorationLine: 'line-through'
                                                }}
                                            >
                                                {pack.c_pack_price_2} บาท
                                            </Text>
                                            : 
                                                <Text></Text>
                                            }
                                            </View>
                    </View>
                    {isLogin === true ?
                        <>
                        <TouchableOpacity
                    onPress={()=> navigation.navigate('Pay2', { pack: pack })}
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
                            marginTop: 10,
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "IBMPlexSansThai-Bold",
                                fontSize: 16,
                            }}
                        >
                            คอร์สเรียน ภายในแพ็กเกจสุดคุ้ม
                        </Text>
                </View>
                <View style={{
                    paddingHorizontal: 5,
                }}>
            <View style={{flex:2,flexDirection:'column',paddingTop:10, paddingHorizontal:0, paddingBottom:50}} >
                

            {fetchLoading ?
                            <View></View>
                            :
                            <View>
                                {getPackage?.data?.course.map((course) => (
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
               <View 
                style={{ height: 40 }}
               ></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PackageDetail

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