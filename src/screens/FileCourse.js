import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const FileCourse = ({title, img, duration}) => {


    return (
        <TouchableOpacity
        style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            padding: 15,
            marginHorizontal: 0,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 8
        }}
    >
        <Image
                        source={img}
                        style={{width:40,height:40}}
                    />
                    <View>
                         <Text style={{
                             color:"#345c74",
                             fontFamily:"Bold",
                             fontSize:13,
                             paddingHorizontal:20,
                             width:280
                         }}>{title}</Text>
                         <Text style={{
                             color:"#f58084",
                             fontFamily:"Medium",
                             fontSize:12,
                             paddingHorizontal:20
                         }}>
                             เอกสารการเรียน
                         </Text>
                    </View>
                    <View>
                        <Icon name="cloud-download-outline" size={25} color="#666" />
                    </View>
    </TouchableOpacity>
    )
}

export default FileCourse