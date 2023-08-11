import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, TouchableOpacity, FlatList, SafeAreaView, ScrollView, Image, StatusBar, Dimensions, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Article from "../components/Article";
import axios from "axios";
import moment from "moment";
import HTMLView from 'react-native-htmlview';

const BlogDetail = ({ route, navigation }) => {

    const product = route.params.blog;

    console.log("==", product.author);

    const format = amount => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar backgroundColor="#32d191" />
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
                
            </View>

            <View style={styles.blockDetail}>

            <Image source={{
                    uri: product.urlToImage
                }}
                    style={styles.image}
                />

                {/*    title */}
                <Text style={styles.title}>{product.title}</Text>

                {/*    description */}
                
                <View style={{ borderColor: "#dadde1",
                                        backgroundColor: "#FFF",
                                        marginTop: 10,
                                        borderWidth: 0.5, }}></View>
                <View style={styles.data}>
                    <Text style={styles.date}>{moment(product.publishedAt).format("MMM Do YY")}</Text>
                    <Text>การดู: <Text style={styles.source}>{format(product.sourceName)}</Text></Text>
                </View>
                <View style={{ borderColor: "#dadde1",
                                        backgroundColor: "#FFF",
                                        marginTop: 10,
                                        borderWidth: 0.5, }}></View>

                {/*     source */}
                
                <View style={{ marginBottom:20, marginTop:10 }}>
                    <HTMLView value={product.detail}/>
                </View>
            </View>
        </ScrollView>
    )

}

export default BlogDetail

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        borderColor: "#dadde1",
        borderWidth: 1,
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#fff",
        marginTop: 10
    },
    blockDetail: {
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
    },
    image: {
        height: 180,
        width: "100%",
        marginBottom: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 0
    },
    description: {
        fontSize: 14,
        fontWeight: "400",
        marginTop: 5
    },
    data: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    heading: {

    },
    author: {
        fontWeight: "bold",
        fontSize: 15
    },
    date: {
        fontWeight: "bold",
        color: "#32d191",
        fontSize: 15
    },
    source: {
        color: "#32d191",
        fontWeight: "bold",
        fontSize: 14
    }
})