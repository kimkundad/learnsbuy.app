import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native'


const IMAGE_WITH = 240;
const IMAGE_HEIGHT = 160;

const Package = ({title,img}) => {

    return (
        <TouchableOpacity 
                        style={{
                            height:210,
                            width:240,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginRight:10,
                            marginTop:10,
                            borderRadius:15,
                            marginBottom:0,
                        }}
                    >
                        <Image
                                style={{
                                width: IMAGE_WITH,
                                height: IMAGE_HEIGHT,
                                borderTopLeftRadius:10,
                                borderTopRightRadius: 10
                                }}
                                source={img}
                            />
                            <Text ellipsizeMode='tail' numberOfLines={2}
                                style={{
                                    width: 250,
                                    paddingHorizontal: 10,
                                fontWeight: 'bold',
                                fontSize: 13,
                                color: "#666",
                                marginVertical: 5,
                                marginBottom:10
                                }}
                            >
                                {title}
                            </Text>
                    </TouchableOpacity>
    )
}

export default Package