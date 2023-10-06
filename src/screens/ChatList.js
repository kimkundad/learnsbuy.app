import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, ScrollView, Image, StatusBar, Dimensions, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import axios from "axios";
import getListChat from '../../services/getListChat';
import { List, Avatar } from 'react-native-paper';
import moment from 'moment';
import Autocomplete from "react-native-autocomplete-input"

const ChatList = ({ navigation }) => {

    const { data: messages, isLoading: fetchLoading } = getListChat()
    const [isState, setIsState] = useState([]);
    const [isSuggestion, setIsSuggestion] = useState([]);

    useEffect(() => {
        
    }, []);

    const _searchText = async (text) => {
        
        let matchs = [];
        if(text.length > 2){
            console.log('text', text)
            const responsex = await axios.post('https://www.learnsbuy.com/api/search_autocom', {text: text})
            console.log('responsex?.data?', responsex?.data?.data)
            if (responsex?.data?.status == 200) { 
                setIsState(responsex?.data?.data)
                matchs = isState.filter(res=>{
                    const regex = new RegExp(`^${text.trim()}`, `i`);
                    return res.name.match(regex)
                });
                setIsSuggestion(matchs)
            }
            
        }else{
            setIsSuggestion([])
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{
                    marginBottom: 0
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingHorizontal: 10,
                        borderBottomColor: "#dadde1",
                        borderBottomWidth: 1,
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
                            fontFamily: "IBMPlexSansThai-Bold",
                            fontSize: 16,
                            color: "#666",
                        }}
                    >
                        กล่องข้อความ
                    </Text>
                    <TouchableOpacity
                        style={{
                            padding: 5,
                        }}
                    >

                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                    
                    <View style={styles.searchContainer}>
                    <Autocomplete 
                        data={isSuggestion}
                        autoCapitalize="none"
                        autoCorrect={false}
                        containerStyle={styles.containerStyle}
                        inputContainerStyle={styles.inputContainerStyle}
                        listStyle={styles.listStyle}
                        placeholder="ค้นหารายชื่อนักเรียน"
                        onChangeText={(text)=>_searchText(text) }
                        flatListProps={{
                            renderItem:({item})=>
                            <View style={styles.listContainerStyle}>
                                <TouchableOpacity onPress={() => navigation.navigate("MessagesScreen2", { userchat: item.id })}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    padding: 5,
                                    marginRight: 2,
                                    alignItems: "center",
                                }}
                            >
                                <View style={{
                                }}>
                                    <Avatar.Image size={30} source={{ uri: 'https://www.learnsbuy.com/assets/images/avatar/' + item.avatar }} />
                                </View>
                                <View>
                                    <View
                                    style={{ 
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                    }}
                                    >
                                        <Text style={{
                                        color: "#345c74",
                                        fontSize: 13,
                                        paddingHorizontal: 10,
                                        fontFamily: "IBMPlexSansThai-Bold",
                                    }}>{item.name}</Text>
                                        
                                    </View>


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
                            </View>
                        }}
                    />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                    <FlatList
                        data={messages?.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate("MessagesScreen2", { userchat: item.chat_user_id })}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    padding: 8,
                                    marginRight: 10,
                                    alignItems: "center",
                                }}
                            >
                                <View style={{
                                }}>
                                    <Avatar.Image size={38} source={{ uri: 'https://www.learnsbuy.com/assets/images/avatar/' + item.user_avatar }} />
                                </View>
                                <View>
                                    <View
                                    style={{ 
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                    }}
                                    >
                                        <Text style={{
                                        color: "#345c74",
                                        fontSize: 13,
                                        paddingHorizontal: 20,
                                        fontFamily: "IBMPlexSansThai-Bold",
                                    }}>{item.user_name}</Text>
                                    <Text style={{
                                        color: "#345c74",
                                        fontSize: 13,
                                        paddingHorizontal: 20,
                                        fontFamily: "IBMPlexSansThai-Regular",
                                    }}>{moment(item.created_at).format('ddd M YY H:mma')}</Text>
                                        
                                    </View>
                                    


                                    <Text style={{
                                        color: "#000",
                                        fontSize: 14,
                                        paddingHorizontal: 20,
                                        fontFamily: "IBMPlexSansThai-Regular",
                                    }}>
                                        {item.message}
                                    </Text>


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
                            
                        )}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )

}

export default ChatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        
    },
    containerStyle: {
        fontFamily: "IBMPlexSansThai-Regular",
    },
    listStyle: {
        fontFamily: "IBMPlexSansThai-Regular",
    },
    inputContainerStyle : {
        marginHorizontal: 15,
        borderColor: "#dadde1",
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        fontFamily: "IBMPlexSansThai-Regular",
    },
    listContainerStyle : {
        marginHorizontal: 10,
        marginVertical: 0,
    },
    listItem : {
        
    }
})