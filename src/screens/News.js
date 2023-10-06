import React, {useEffect, useState} from "react";
import { View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, ScrollView,Image, StatusBar, Dimensions, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Article from "../components/Article";
import axios from "axios";

const News = ({ navigation }) => {

    const [articles,setArticles] = useState([]);
    const getNews = () => {
        axios.get('https://www.learnsbuy.com/api/get_articles_app')
            .then( (response) =>{
                // handle success
               
                setArticles(response?.data?.data?.blog);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        getNews();
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            
            <View
                        style={{ paddingHorizontal: 15, marginTop: 5 }}
                    >
                        <Text
                            style={{
                                fontFamily: "IBMPlexSansThai-Bold",
                                fontSize: 20,
                                paddingTop: 5,
                                color: "#000000"
                            }}
                        >
                            ข่าวสารจากครูพี่โฮม
                        </Text>
                    </View>
                    <ScrollView >
            <FlatList
                data={articles}
                nestedScrollEnabled={true}
                keyExtractor={(item, index) => {
                    return item.id;
                  }}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {"https://learnsbuy.com/assets/blog/"+item.image}
                        title = {item.title_blog}
                        description = {item.detail_blog}
                        detail = {item.detail_blog_website}
                        author = "ครูพี่โฮม"
                        publishedAt = {item.created_at}
                        sourceName = {item.view}
                        url={item.id}
                        key={item.id}
                    />}
            />
            </ScrollView>
        </SafeAreaView>
    )

}

export default News

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    }
})