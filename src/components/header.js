import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
    const navigation = useNavigation();

    const { user, isLoading, error, isLogin, message } = useSelector(state => state.auth);

    return (
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
                            paddingTop: 5,
                            paddingBottom: 5
                        }}
                    >
                        <Image
                            source={require("../assets/img/Learnsbuy_new_web_logo_v3.png")}
                            style={{ width: 144, height: 40 }}
                        />
                    </View>
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
                        <Icon name="chatbubbles-outline" size={28} color="#666666" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                                onPress={()=>navigation.navigate('MessagesScreen')}
                            >
                                <Icon name="chatbubbles-outline" size={28} color="#666666" />
                            </TouchableOpacity>
                        }
                        </>    
                            
                        :
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('Login')}
                        >
                            <Icon name="chatbubbles-outline" size={28} color="#666666" />
                        </TouchableOpacity>
                        }
                        
                    </View>
                </View>
    )
}

export default Header

const styles = StyleSheet.create({})