import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
    StatusBar,
    Dimensions,
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import SwitchComponent from '../components/Switch'
import Buttons from '../components/ButtonsLogout'
import { useSelector, useDispatch } from "react-redux";
import getCoin from '../../services/getCoin';

const Profile = ({ navigation }) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

    const { user, isLoading, error, isLogin, message } = useSelector(state => state.auth);

    const { data: mycoin, isLoading: fetchLoading1 } = getCoin()

    const getWeekNumber = (date) => {
        const currentDate = new Date(date);
        currentDate.setHours(0, 0, 0, 0); // Set time to midnight to ensure accurate week calculation
        currentDate.setDate(currentDate.getDate() + 3 - (currentDate.getDay() + 6) % 7); // Adjust to Thursday to get the correct week
        const startOfYear = new Date(currentDate.getFullYear(), 0, 4); // January 4th as reference
        const weekNumber = Math.ceil(((currentDate - startOfYear) / 86400000 + 1) / 7); // Calculate week number
        return weekNumber;
      };
      
    useEffect(() => {
        console.log('@@@Login guser:: ', user?.token);
        console.log('isLogin ', isLogin);

    },);
    

    return (
        <SafeAreaView>
            <View style={{
                height: '100%',
                width: '100%',
                position: 'relative',
            }}>
                <StatusBar backgroundColor="#32d191" />
                <ScrollView

                >
                    {isLogin === true ?
                        <View
                            style={{ paddingHorizontal: 10, marginTop: 5 }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 22,
                                    paddingTop: 5,
                                    color: "#000000"
                                }}
                            >
                                Profile
                            </Text>
                        </View>
                        :
                        <View
                            style={{ paddingHorizontal: 10, marginTop: 10 }}
                        >
                            <TouchableOpacity
                        onPress={()=>navigation.navigate('HomePage')}
                        >
                        <Image
                            source={require("../assets/img/Learnsbuy_new_web_logo_v3.png")}
                            style={{ width: 144, height: 40 }}
                        />
                        </TouchableOpacity>
                            <View>

                                <View
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "#dadde1",
                                        backgroundColor: "#FFFFFF",
                                        marginTop: 10,
                                        borderWidth: 1,
                                        minHeight: 50,
                                        borderRadius: 10,

                                    }}
                                >
                                
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: 'space-between',
                                                paddingBottom: 10,
                                                paddingTop: 10,
                                                paddingLeft: 15,
                                                paddingRight: 15,
                                                alignItems: "center",
                                            }}
                                        >
                                            <View>
                                                <Text style={{
                                                    color: "#345c74",
                                                    fontWeight: '600',
                                                    fontSize: 16,
                                                }}>Learnsbuy</Text>
                                                <Text style={{
                                                    color: "#345c74",
                                                    fontFamily: "IBMPlexSansThai-Regular",
                                                    fontSize: 13,
                                                }}>ยินดีต้อนรับ</Text>
                                            </View>
                                            <View
                                            >
                                                <TouchableOpacity
                                                onPress={() => navigation.navigate('Login')}
                                                    activeOpacity={0.8}
                                                    style={[
                                                        styles.btn,
                                                        
                                                        {
                                                            borderColor: '#32d191',
                                                            paddingLeft:12,
                                                            paddingRight:12,
                                                            borderWidth: 1,
                                                            backgroundColor: 'transparent',
                                                        },
                                                    ]}
                                                >
                                                    <Text
                                                        style={{
                                                            fontWeight: 'bold',
                                                            fontSize: 15,
                                                            color: '#32d191',
                                                        }}>
                                                        เข้าสู่ระบบ
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                        <View
                                            style={{
                                                borderBottomColor: "#dadde1",
                                                borderBottomWidth: 1,
                                                marginLeft: 15,
                                                marginRight: 15,
                                            }}
                                        ></View>

                                </View>
                            </View>
                        </View>
                    }

                    <View style={{
                        width: '100%',
                        paddingBottom: 100
                    }}>

                        <View
                            style={{
                                marginHorizontal: 15,
                                borderColor: "#dadde1",
                                backgroundColor: "#FFFFFF",
                                marginTop: 10,
                                borderWidth: 1,
                                minHeight: 50,
                                borderRadius: 10,

                            }}
                        >


                            {/* /////////////////////////////// */}

                            {isLogin === true ?
                                <>
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
                                                fontFamily: "IBMPlexSansThai-Regular",
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
                                        <View
                                            style={{
                                                marginRight: 10,
                                            }}
                                        >
                                            <Icon name="chevron-forward-outline" size={25} color="#666" />
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            borderBottomColor: "#dadde1",
                                            borderBottomWidth: 1,
                                            marginLeft: 15,
                                            marginRight: 15,
                                        }}
                                    ></View>
                                </>
                                :
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
                                                fontSize: 16,
                                                paddingHorizontal: 20,
                                                fontFamily: "IBMPlexSansThai-Regular",
                                                width: 270
                                            }}>แต้มดูวิดีโอคงเหลือ</Text>
                                        </View>
                                        <View
                                            style={{
                                                marginRight: 10,
                                            }}
                                        >
                                            <Icon name="chevron-forward-outline" size={25} color="#666" />
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            borderBottomColor: "#dadde1",
                                            borderBottomWidth: 1,
                                            marginLeft: 15,
                                            marginRight: 15,
                                        }}
                                    ></View>
                                </TouchableOpacity>
                            }


                            {/* /////////////////////////////// */}

                            {/* /////////////////////////////// */}
                            {isLogin &&
                                <>
                                    <TouchableOpacity onPress={() => navigation.navigate('EditName')}>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                padding: 15,
                                                marginRight: 10,
                                                alignItems: "center",
                                            }}
                                        >
                                            <View style={{
                                                backgroundColor: "#32d19129",
                                                paddingVertical: 6,
                                                paddingHorizontal: 8,
                                                borderRadius: 20
                                            }}>
                                                <Icon name="person-outline" size={25} color="#00c402" />
                                            </View>
                                            <View>
                                                <Text style={{
                                                    color: "#345c74",
                                                    fontSize: 13,
                                                    paddingHorizontal: 20,
                                                    width: 270
                                                }}>Name</Text>
                                                <Text style={{
                                                    color: "#000000",
                                                    fontSize: 14,
                                                    paddingHorizontal: 20,
                                                    fontFamily: "IBMPlexSansThai-Bold",
                                                }}>
                                                    {user?.profile?.name}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    marginRight: 10,
                                                }}
                                            >
                                                <Icon name="chevron-forward-outline" size={25} color="#666" />
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                    <View
                                        style={{
                                            borderBottomColor: "#dadde1",
                                            borderBottomWidth: 1,
                                            marginLeft: 15,
                                            marginRight: 15,
                                        }}
                                    ></View>
                                </>
                            }
                            {/* /////////////////////////////// */}
                            {/* /////////////////////////////// */}
                            {isLogin &&
                                <>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            padding: 15,
                                            marginRight: 10,
                                            alignItems: "center",
                                        }}
                                    >
                                        <View style={{
                                            backgroundColor: "#32d19129",
                                            paddingVertical: 6,
                                            paddingHorizontal: 8,
                                            borderRadius: 20
                                        }}>
                                            <Icon name="mail-unread-outline" size={25} color="#00c402" />
                                        </View>
                                        <View>
                                            <Text style={{
                                                color: "#345c74",
                                                fontSize: 13,
                                                paddingHorizontal: 20,
                                                width: 270
                                            }}>Email</Text>
                                            <Text style={{
                                                color: "#000000",
                                                fontSize: 14,
                                                paddingHorizontal: 20,
                                                fontFamily: "IBMPlexSansThai-Bold",
                                            }}>
                                                {user?.profile?.email}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                marginRight: 10,
                                            }}
                                        >
                                            <Icon name="lock-closed-outline" size={20} color="#666" />
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            borderBottomColor: "#dadde1",
                                            borderBottomWidth: 1,
                                            marginLeft: 15,
                                            marginRight: 15,
                                        }}
                                    ></View>
                                    <TouchableOpacity onPress={() => navigation.navigate('ProfilePassword')}>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                padding: 15,
                                                marginRight: 10,
                                                alignItems: "center",
                                            }}
                                        >
                                            <View style={{
                                                backgroundColor: "#32d19129",
                                                paddingVertical: 6,
                                                paddingHorizontal: 8,
                                                borderRadius: 20
                                            }}>
                                                <Icon name="lock-closed-outline" size={25} color="#00c402" />
                                            </View>
                                            <View>
                                                <Text style={{
                                                    color: "#345c74",
                                                    fontSize: 13,
                                                    paddingHorizontal: 20,
                                                    width: 270
                                                }}>Password</Text>
                                                <Text style={{
                                                    color: "#000000",
                                                    fontSize: 14,
                                                    paddingHorizontal: 20,
                                                    fontFamily: "IBMPlexSansThai-Bold",
                                                }}>
                                                    Updated {getWeekNumber(user?.profile?.updated_at)} weeks ago
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    marginRight: 10,
                                                }}
                                            >
                                                <Icon name="chevron-forward-outline" size={25} color="#666" />
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                    <View
                                        style={{
                                            borderBottomColor: "#dadde1",
                                            borderBottomWidth: 1,
                                            marginLeft: 15,
                                            marginRight: 15,
                                        }}
                                    ></View>

                                    {/* /////////////////////////////// */}
                                    {/* /////////////////////////////// */}
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            padding: 15,
                                            marginRight: 10,
                                            alignItems: "center",
                                        }}
                                    >
                                        <View style={{
                                            backgroundColor: "#32d19129",
                                            paddingVertical: 6,
                                            paddingHorizontal: 8,
                                            borderRadius: 20
                                        }}>
                                            <Icon name="call-outline" size={25} color="#00c402" />
                                        </View>
                                        <View>
                                            <Text style={{
                                                color: "#345c74",
                                                fontSize: 13,
                                                paddingHorizontal: 20,
                                                width: 270
                                            }}>Contact Number</Text>
                                            <Text style={{
                                                color: "#000000",
                                                fontSize: 14,
                                                paddingHorizontal: 20,
                                                fontFamily: "IBMPlexSansThai-Bold",
                                            }}>
                                                {user?.profile?.phone}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                marginRight: 10,
                                            }}
                                        >
                                            <Icon name="lock-closed-outline" size={20} color="#666" />
                                        </View>
                                    </View>

                                    {/* /////////////////////////////// */}
                                </>}
                            {/* /////////////////////////////// */}
                            {/* /////////////////////////////// */}


                        </View>


                        <View
                            style={{
                                marginHorizontal: 15,
                                borderColor: "#dadde1",
                                backgroundColor: "#FFFFFF",
                                marginTop: 10,
                                borderWidth: 1,
                                minHeight: 50,
                                borderRadius: 10,
                                marginBottom: 20,

                            }}
                        >

                            {/* /////////////////////////////// */}
                            {isLogin &&
                            <>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 15,
                                        marginRight: 10,
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 6,
                                        paddingHorizontal: 8,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="notifications-outline" size={25} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#000000",
                                            fontSize: 14,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Bold",
                                            width: 250
                                        }}>
                                            การแจ้งเตือน
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginRight: 10,
                                        }}
                                    >
                                        <SwitchComponent />
                                    </View>
                                </View>
                                <View
                                style={{
                                    borderBottomColor: "#dadde1",
                                    borderBottomWidth: 1,
                                    marginLeft: 15,
                                    marginRight: 15,
                                }}
                            ></View>
                            </>
                            }
                            

                            {/* /////////////////////////////// */}
                            {/* /////////////////////////////// */}
                            
                            {isLogin === true ?
                            <>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('MyCourse')}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 15,
                                        marginRight: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 6,
                                        paddingHorizontal: 8,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="library-outline" size={25} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#345c74",
                                            fontSize: 12,
                                            paddingHorizontal: 20,
                                            width: 270
                                        }}>คอร์สเรียนทั้งหมดที่สั่งซื้อไว้</Text>
                                        <Text style={{
                                            color: "#000000",
                                            fontSize: 14,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Bold",
                                        }}>
                                            คอร์สเรียนของฉัน
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginRight: 10,
                                        }}
                                    >
                                        <Icon name="chevron-forward-outline" size={25} color="#666" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View
                                style={{
                                    borderBottomColor: "#dadde1",
                                    borderBottomWidth: 1,
                                    marginLeft: 15,
                                    marginRight: 15,
                                }}
                            ></View>
                            <TouchableOpacity onPress={() => navigation.navigate('BuyHistory')}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 15,
                                        marginRight: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 6,
                                        paddingHorizontal: 8,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="refresh-outline" size={25} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#000000",
                                            fontSize: 14,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Bold",
                                            width: 270
                                        }}>
                                            ประวัติการสั่งซื้อ
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginRight: 10,
                                        }}
                                    >
                                        <Icon name="chevron-forward-outline" size={25} color="#666" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View
                                style={{
                                    borderBottomColor: "#dadde1",
                                    borderBottomWidth: 1,
                                    marginLeft: 15,
                                    marginRight: 15,
                                }}
                            ></View>
                            </>
                            :
                            <>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('Login')}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 15,
                                        marginRight: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 6,
                                        paddingHorizontal: 8,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="library-outline" size={25} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#345c74",
                                            fontSize: 12,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Regular",
                                            width: 270
                                        }}>คอร์สเรียนทั้งหมดที่สั่งซื้อไว้</Text>
                                        <Text style={{
                                            color: "#000000",
                                            fontSize: 14,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Bold",
                                        }}>
                                            คอร์สเรียนของฉัน
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginRight: 10,
                                        }}
                                    >
                                        <Icon name="chevron-forward-outline" size={25} color="#666" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View
                                style={{
                                    borderBottomColor: "#dadde1",
                                    borderBottomWidth: 1,
                                    marginLeft: 15,
                                    marginRight: 15,
                                }}
                            ></View>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 15,
                                        marginRight: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 6,
                                        paddingHorizontal: 8,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="refresh-outline" size={25} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#000000",
                                            fontSize: 14,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Bold",
                                            width: 270
                                        }}>
                                            ประวัติการสั่งซื้อ
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginRight: 10,
                                        }}
                                    >
                                        <Icon name="chevron-forward-outline" size={25} color="#666" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View
                                style={{
                                    borderBottomColor: "#dadde1",
                                    borderBottomWidth: 1,
                                    marginLeft: 15,
                                    marginRight: 15,
                                }}
                            ></View>
                            </>
                            }
                            
                                

                            {/* /////////////////////////////// */}
                            {/* /////////////////////////////// */}
                            

                            {/* /////////////////////////////// */}
                            {/* /////////////////////////////// */}
                            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 15,
                                        marginRight: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 6,
                                        paddingHorizontal: 8,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="flask-outline" size={25} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#345c74",
                                            fontSize: 13,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Regular",
                                            width: 270
                                        }}>ครูพี่โฮม ZA-SHI</Text>
                                        <Text style={{
                                            color: "#000000",
                                            fontSize: 14,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Bold",
                                        }}>
                                            เกี่ยวกับ Learnsbuy
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginRight: 10,
                                        }}
                                    >
                                        <Icon name="chevron-forward-outline" size={25} color="#666" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View
                                style={{
                                    borderBottomColor: "#dadde1",
                                    borderBottomWidth: 1,
                                    marginLeft: 15,
                                    marginRight: 15,
                                }}
                            ></View>

                            {/* /////////////////////////////// */}
                            {/* /////////////////////////////// */}
                            <TouchableOpacity onPress={() => navigation.navigate('Policy')}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 15,
                                        marginRight: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 6,
                                        paddingHorizontal: 8,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="shield-checkmark-outline" size={25} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#345c74",
                                            fontSize: 13,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Regular",
                                            width: 270
                                        }}>นโยบายความเป็นส่วนตัว</Text>
                                        <Text style={{
                                            color: "#000000",
                                            fontSize: 14,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Bold",
                                        }}>
                                            Privacy Policy
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginRight: 10,
                                        }}
                                    >
                                        <Icon name="chevron-forward-outline" size={25} color="#666" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View
                                style={{
                                    borderBottomColor: "#dadde1",
                                    borderBottomWidth: 1,
                                    marginLeft: 15,
                                    marginRight: 15,
                                }}
                            ></View>
                            {/* /////////////////////////////// */}
                            <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 15,
                                        marginRight: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 6,
                                        paddingHorizontal: 8,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="reader-outline" size={25} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#345c74",
                                            fontSize: 13,
                                            fontFamily: "IBMPlexSansThai-Regular",
                                            paddingHorizontal: 20,
                                            width: 270
                                        }}>ข้อกำหนดและเงื่อนไขการใช้งาน</Text>
                                        <Text style={{
                                            color: "#000000",
                                            fontSize: 14,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Bold",
                                        }}>
                                            Terms of Service
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginRight: 10,
                                        }}
                                    >
                                        <Icon name="chevron-forward-outline" size={25} color="#666" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* /////////////////////////////// */}
                            {/* <TouchableOpacity onPress={() => navigation.navigate('VerificationPhone')}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        padding: 15,
                                        marginRight: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "#32d19129",
                                        paddingVertical: 6,
                                        paddingHorizontal: 8,
                                        borderRadius: 20
                                    }}>
                                        <Icon name="reader-outline" size={25} color="#00c402" />
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: "#345c74",
                                            fontSize: 13,
                                            fontFamily: "IBMPlexSansThai-Regular",
                                            paddingHorizontal: 20,
                                            width: 270
                                        }}>ข้อกำหนดและเงื่อนไขการใช้งาน</Text>
                                        <Text style={{
                                            color: "#000000",
                                            fontSize: 14,
                                            paddingHorizontal: 20,
                                            fontFamily: "IBMPlexSansThai-Bold",
                                        }}>
                                            Terms of Service
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginRight: 10,
                                        }}
                                    >
                                        <Icon name="chevron-forward-outline" size={25} color="#666" />
                                    </View>
                                </View>
                            </TouchableOpacity> */}

                        </View>


                        {isLogin ?
                            <>
                                <View style={{ marginHorizontal: 15 }}>
                                    <Buttons btn_text={"ออกจากระบบ"} />
                                </View>
                            </>
                            :
                            <View style={{
                                flexDirection: 'row',
                                paddingHorizontal: 20,
                            }}>
                                <TouchableOpacity
                                onPress={() => navigation.navigate('Register')}
                                    activeOpacity={0.8}
                                    style={[
                                        styles.btn,
                                        {
                                            borderColor: '#32d191',
                                            borderWidth: 1,
                                            backgroundColor: 'transparent',
                                        },
                                    ]}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "IBMPlexSansThai-Bold",
                                            fontSize: 15,
                                            color: '#32d191',
                                        }}>
                                        สมัครสมาชิก
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ width: 15 }} />
                                <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                                    activeOpacity={0.8}
                                    style={styles.btn}>
                                    <Text
                                        style={{
                                            fontFamily: "IBMPlexSansThai-Bold",
                                            fontSize: 15,
                                            color: '#ffffff',
                                        }}>
                                        เข้าสู่ระบบ
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        }

                    </View>

                </ScrollView>




            </View>
        </SafeAreaView>
    )

}

export default Profile

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#32d191',
        justifyContent: 'center',
        alignItems: 'center',
    },
});