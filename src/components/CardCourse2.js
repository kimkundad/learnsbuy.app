import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native'


const IMAGE_WITH = 240;
const IMAGE_HEIGHT = 200;

const CardCourse = ({title,img, price, discount, onPress, course}) => {

    return (
        <TouchableOpacity 

        onPress={
            onPress
            }
                        style={{
                            width: '100%',
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginRight:10,
                            marginTop:0,
                            borderRadius:15,
                            marginBottom:15,
                        }}
                    >
                        <Image
                                style={{
                                width: "100%",
                                height: IMAGE_HEIGHT,
                                borderTopLeftRadius:10,
                                borderTopRightRadius: 10
                                }}
                                source={img}
                            />
                            

                            <View
                                    style={{
                                        flex: 1,
                                        height: '100%',
                                        marginLeft:10,
                                        marginTop:5,
                                    }}
                                >
                                    <View style={{
                                        paddingBottom:8
                                    }}>
                                        <Text ellipsizeMode='tail' numberOfLines={2}
                                            style={{
                                                fontFamily: "IBMPlexSansThai-Bold",
                                                fontSize: 14,
                                                color: "#666",
                                                maxWidth: '100%',
                                                maxWidth: '100%',
                                            }}
                                        >
                                            {title}
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            
                                        }}>
                                            
                                            
                                            
                                        </View>
                                        </View>
                                        </View>
                    </TouchableOpacity>
    )
}


export default CardCourse