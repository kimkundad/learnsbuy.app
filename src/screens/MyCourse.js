import React, { useEffect ,useState } from 'react'
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/ButtonsLogin'
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import myCourse from '../../services/myCourse';
import getCoin from '../../services/getCoin';
import getMycousem from '../../services/get_mycousem';
import Orientation from 'react-native-orientation-locker';
import { useFocusEffect } from '@react-navigation/native';
import Dialog from "react-native-dialog";
import axios from 'axios';
import useCoursem from '../../services/packm';

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
    const { data: mycoin, isLoading: fetchLoading1 } = getCoin()
    const [token, settoken] = useState(user?.token);
    const [getStatusx, setgetStatusx] = useState(0);
    const [getExpire, setGetExpire] = useState(true);
    const [getExpireDay, setGetExpireDay] = useState('');
    const { data: coursem, isLoading: fetchLoading3 } = useCoursem()
    const { data: getMyco } = getMycousem()

    const getDataUser = async () => {

        try {
            const { data } = await axios.post('https://www.learnsbuy.com/api/get_mycousem', {
                token
            })
            console.log('data xx00--> ', data)
            if(data.status === 200){
                console.log('response', data?.data)
                setgetStatusx(data?.data)
                setGetExpire(data?.expire)
                setGetExpireDay(data?.expire_day)
            }
            
          } catch (err) {
            console.log('err xx00--> ', err)
            return err.response.data
          }
      }

    const formatDate = (rawDate) => {
        let date = new Date(rawDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month
        let day = date.getDate();
        return `${year}-${month}-${day}`;
    }
    
    useFocusEffect(
        React.useCallback(() => {
            Orientation.lockToPortrait();
        },)
      );

    useEffect(() => {

        if (isLogin === false) {
            navigation.navigate('Login')
        } 

    },[]);

    useFocusEffect(() => {

        getDataUser()

    },[]);

    const [visible, setVisible] = useState(false);

    const [visibleEx, setVisibleEx] = useState(false);

  const handleCancel = () => {
    setVisible(false);
    setVisibleEx(false);
  };



    const handleCheck = async (id) => {

        try {
            const { data } = await axios.post('https://www.learnsbuy.com/api/check_mypoint', {
                token , id
            })
            console.log('check', data)
            if(data.status === 200){
                
                setVisible(false);
                navigation.navigate('VideoPage2', { product: data.coursess })

            }else{
                setVisible(true);
            }
            
          } catch (err) {
            console.log('err xx00--> ', err)
            return err.response.data
          }

    }


    const handleCheck2 = async (id) => {

        try {
            const { data } = await axios.post('https://www.learnsbuy.com/api/get_mycousem2', {
                token , id
            })
            console.log('check', data)
            if(data.status === 200){
                
                if(data?.expire === false){
                    setVisible(false);
                    navigation.navigate('VideoPage3', { product: data.coursess })
                }else{
                    setVisible(true);
                }
                

            }else{
                setVisible(true);
            }
            
          } catch (err) {
            console.log('err xx00--> ', err)
            return err.response.data
          }

    }

   

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
                        fontFamily: "IBMPlexSansThai-Bold",
                        fontSize: 16,
                        color: "#ffffff",
                    }}
                >
                    คอร์สเรียนของฉัน
                </Text>
                <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        {isLogin === true ?
                        <>
                        {user?.profile?.id === 1 ?
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('ChatList')}
                        >
                        <Icon name="chatbubbles-outline" size={28} color="#ffffff" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                                onPress={()=>navigation.navigate('MessagesScreen')}
                            >
                                <Icon name="chatbubbles-outline" size={28} color="#ffffff" />
                            </TouchableOpacity>
                        }
                        </>    
                            
                        :
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('Login')}
                        >
                            <Icon name="chatbubbles-outline" size={28} color="#ffffff" />
                        </TouchableOpacity>
                        }
                        
                    </View>
            </View>
            <ScrollView style={{ flex: 1, flexDirection: 'column',  }}>

            <Dialog.Container visible={visible}>
                <Dialog.Title style={{fontFamily: "IBMPlexSansThai-Regular"}}>ไม่สามารถเข้าเรียนได้</Dialog.Title>
                <Dialog.Description style={{fontFamily: "IBMPlexSansThai-Regular"}}>
                คอร์สของท่านหมดอายุแล้ว กรุณาสมัครเรียนใหม่ หรือติดต่อ LINE : @ZA-SHI เพื่อรับส่วนลด
                </Dialog.Description>
                <Dialog.Button style={{fontFamily: "IBMPlexSansThai-Regular"}} label="ตกลง" onPress={handleCancel} />
            </Dialog.Container>
                <View style={{
                    paddingHorizontal: 10,
                    marginTop: 30,
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
                                        fontFamily: "IBMPlexSansThai-Regular",
                                        color: "#345c74",
                                        fontSize: 13,
                                        paddingHorizontal: 20,
                                        width: 270
                                    }}>แต้มดูวิดีโอคงเหลือ</Text>

                                {fetchLoading1 ?
                                <View></View>
                                :
                                        <Text style={{
                                            color: "#000000",
                                            fontSize: 14,
                                            paddingHorizontal: 20,
                                            fontWeight: 700,
                                        }}>
                                            {numberWithCommas(mycoin?.data)}
                                            {/* {numberWithCommas(mycoint)} */}
                                        </Text>
                                }

                                    
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
                                        <>
                                        {pack.videocount > 0 ?
                                        <TouchableOpacity
                                        key={pack}
                                        onPress={()=> 
                                            handleCheck( pack.Oid )
                                            // handleCheck() navigation.navigate('VideoPage2', { product: pack }) 
                                        }
                                        style={{
                                            marginVertical: 5,
                                            borderBottomColor: "#dadde1",
                                            borderBottomWidth: 1,
                                        }}
                                        >
                                        <View key={pack} style={{
                                            width: '100%',
                                            height: 100,
                                            flexDirection: "row",
                                            marginBottom: 10,
                                            alignItems: 'center',
                                        }}>
                                            <View style={{
                                                width: '50%',
                                                height: '100%',
                                                
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
                                                            fontFamily: "IBMPlexSansThai-Bold",
                                                            fontSize: 14,
                                                            color: "#666666",
                                                            maxWidth: '100%',
                                                            letterSpacing: 0.5,
                                                            maxWidth: '100%',
                                                            lineHeight: 18
                                                        }}
                                                    >
                                                        {pack.title_course} 
                                                    </Text>
                                                    <View style={{
                                                        flexDirection: 'row',
                                                        paddingHorizontal: 5,
                                                        marginTop:0
                                                    }}>
                                                        <Icon name="pricetags-outline" size={16} color="#4caf50"  />
                                                        <Text
                                                            style={{
                                                                fontFamily: "IBMPlexSansThai-Regular",
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
                                                        marginTop:0
                                                    }}>
                                                        <Icon name="stopwatch-outline" size={16} color="#ff741a"  />
                                                        <Text
                                                            style={{
                                                                fontFamily: "IBMPlexSansThai-Regular",
                                                                fontSize: 14,
                                                                marginLeft:5,
                                                                color: '#9e9e9e',
                                                            }}
                                                        >
                                                            {pack.time_course}
                                                        </Text>
                                                    </View>
                                                    <View style={{
                                                        flexDirection: 'row',
                                                    }}>
                                                        <Text
                                                            style={{
                                                                fontFamily: "IBMPlexSansThai-Bold",
                                                                fontSize: 14,
                                                                marginLeft:5,
                                                                color: '#9e9e9e',
                                                            }}
                                                        >
                                                            หมดอายุ {formatDate(pack.end_day)}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity
                                key={pack}
                                onPress={()=> 
                                    handleCheck( pack.Oid )
                                    // handleCheck() navigation.navigate('VideoPage2', { product: pack }) 
                                }
                                
                                style={{
                                    marginVertical: 5,
                                    borderBottomColor: "#dadde1",
                                    borderBottomWidth: 1,
                                }}
                                >
                                <View key={pack} style={{
                                    width: '100%',
                                    height: 100,
                                    flexDirection: "row",
                                    marginBottom: 10,
                                    alignItems: 'center',
                                }}>
                                    <View style={{
                                        width: '50%',
                                        height: '100%',
                                        
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
                                                    fontFamily: "IBMPlexSansThai-Bold",
                                                    fontSize: 14,
                                                    color: "#666666",
                                                    maxWidth: '100%',
                                                    letterSpacing: 0.5,
                                                    maxWidth: '100%',
                                                    lineHeight: 18
                                                }}
                                            >
                                                {pack.title_course} 
                                            </Text>
                                            <View style={{
                                                flexDirection: 'row',
                                                paddingHorizontal: 5,
                                                marginTop:0
                                            }}>
                                                <Icon name="pricetags-outline" size={16} color="#4caf50"  />
                                                <Text
                                                    style={{
                                                        fontFamily: "IBMPlexSansThai-Regular",
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
                                                marginTop:0
                                            }}>
                                                <Icon name="stopwatch-outline" size={16} color="#ff741a"  />
                                                <Text
                                                    style={{
                                                        fontFamily: "IBMPlexSansThai-Regular",
                                                        fontSize: 14,
                                                        marginLeft:5,
                                                        color: '#9e9e9e',
                                                    }}
                                                >
                                                    {pack.time_course}
                                                </Text>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                            }}>
                                                <Text
                                                    style={{
                                                        fontFamily: "IBMPlexSansThai-Bold",
                                                        fontSize: 14,
                                                        marginLeft:5,
                                                        color: '#9e9e9e',
                                                    }}
                                                >
                                                    หมดอายุ {formatDate(pack.end_day)}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                </TouchableOpacity>
                                        }
                                        
                            </>
                            ))}
                            </View>
                            }

                        {getStatusx === 2 &&
                            <>
                        {fetchLoading3 ?
                            <View></View>
                            :
                            <>
                         
                            <View>
                            {coursem?.data?.map((course) => (
                        <TouchableOpacity
                        key={course}
                        onPress={()=> 
                            handleCheck2( course.c_id )
                        }
                        style={{
                            marginVertical: 5,
                            borderBottomColor: "#dadde1",
                            borderBottomWidth: 1,
                        }}
                        >
                        <View key={course} style={{
                            width: '100%',
                            height: 100,
                            flexDirection: "row",
                            marginBottom: 10,
                            alignItems: 'center',
                        }}>
                            <View style={{
                                width: '50%',
                                height: '100%',
                                
                            }}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 10,
                                    }}
                                    source={{ uri: 'https://learnsbuy.com/assets/uploads/' + course.image_course }}
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
                                            fontFamily: "IBMPlexSansThai-Bold",
                                            fontSize: 14,
                                            color: "#666666",
                                            maxWidth: '100%',
                                            letterSpacing: 0.5,
                                            maxWidth: '100%',
                                            lineHeight: 18
                                        }}
                                    >
                                        {course.title_course} 
                                    </Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        paddingHorizontal: 5,
                                        marginTop:0
                                    }}>
                                        <Icon name="pricetags-outline" size={16} color="#4caf50"  />
                                        <Text
                                            style={{
                                                fontFamily: "IBMPlexSansThai-Regular",
                                                fontSize: 14,
                                                marginLeft:5,
                                                color: '#9e9e9e',
                                            }}
                                        >
                                            คอร์สรายเดือน
                                        </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        paddingHorizontal: 5,
                                        marginTop:0
                                    }}>
                                        <Icon name="stopwatch-outline" size={16} color="#ff741a"  />
                                        <Text
                                            style={{
                                                fontFamily: "IBMPlexSansThai-Regular",
                                                fontSize: 14,
                                                marginLeft:5,
                                                color: '#9e9e9e',
                                            }}
                                        >
                                            {course.time_course}
                                        </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text
                                            style={{
                                                fontFamily: "IBMPlexSansThai-Bold",
                                                fontSize: 14,
                                                marginLeft:5,
                                                color: '#9e9e9e',
                                            }}
                                        >
                                            หมดอายุ {formatDate(getExpireDay)}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>
                        ))}
                        </View>
                            
                            
                            </>
                        }
                        </>
                        }
                            
                        </View>

                    </View>
                    <View style={{ height:80 }}></View>
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
        borderColor: '#dddddd',
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
        height: '100%',
        backgroundColor: '#FFFFFF',
        marginHorizontal: -10
    },
    col: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: 'center'
    },
})