import React from "react";
import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity } from "react-native";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

const Article = (props) => {

    const navigation = useNavigation();
    const format = amount => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            {/* image */}
            <TouchableOpacity
                onPress={()=> navigation.navigate('blogDetail', { blog: props })}
            >
                <Image source={{
                    uri: props.urlToImage
                }}
                    style={styles.image}
                />
            </TouchableOpacity>

            <View style={styles.blockDetail}>


                {/*    title */}
                <Text style={styles.title}>{props.title}</Text>

                {/*    description */}
                <Text style={styles.description} numberOfLines={3}>
                    {props.description}
                </Text>

                <View style={styles.data}>
                    <Text style={styles.heading}>โดย: <Text style={styles.author}>{props.author}</Text></Text>
                    <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>
                </View>

                {/*     source */}
                <View style={{ marginTop: 0 }}>
                    <Text style={{ fontFamily: "IBMPlexSansThai-Regular", }}>การดู: <Text style={styles.source}>{format(props.sourceName)}</Text></Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Article;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowColor: "#000000",
        borderColor: "#dadde1",
        borderWidth: 1,
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#ffffff",
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    title: {
        fontSize: 16,
        fontFamily: "IBMPlexSansThai-Bold",
        marginTop: 0
    },
    description: {
        fontSize: 14,
        fontFamily: "IBMPlexSansThai-Regular",
        marginTop: 5
    },
    data: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    heading: {
        fontFamily: "IBMPlexSansThai-Regular",
    },
    author: {
        fontFamily: "IBMPlexSansThai-Bold",
        fontSize: 15
    },
    date: {
        fontFamily: "IBMPlexSansThai-Bold",
        color: "#32d191",
        fontSize: 15
    },
    source: {
        color: "#32d191",
        fontFamily: "IBMPlexSansThai-Bold",
        fontSize: 14
    }
})