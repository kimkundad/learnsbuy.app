import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const FileCourse = ({title, img, duration}) => {


    return (
        <TouchableOpacity
        style={{
            
            backgroundColor: "#fff",
            flexDirection: "row",
            borderRadius: 10,
            paddingHorizontal: 7,
            justifyContent: 'space-between',
            padding: 5,
            marginTop: 5,
            
        }}
    >   
                    <View style={{ flexDirection: "row", alignItems: "center", }}> 
                    <Image
                        source={img}
                        style={{width:30,height:30}}
                    />
                    <View>
                         <Text style={{
                             color:"#345c74",
                             fontFamily:"Bold",
                             fontSize:11,
                             paddingHorizontal:10,
                         }}>{title}</Text>
                    </View>
                    </View>
                    <View style={{alignItems: 'flex-end', paddingTop:5}}>
                        <Icon name="cloud-download-outline" size={20} color="#666"   />
                    </View>
    </TouchableOpacity>
    )
}

export default FileCourse