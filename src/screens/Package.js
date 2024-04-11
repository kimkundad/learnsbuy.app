import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native'

const IMAGE_WITH = 240;
const IMAGE_HEIGHT = 160;

const Package = ({title,img, price, discount, pack, onPress, navigation}) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    
    return (
        <TouchableOpacity
                  onPress={
                    onPress
                    }
                        style={{
                            height:220,
                            width:240,
                            elevation:2,
                            backgroundColor:"#FFFFFF",
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
                            

                            <View
                                    style={{
                                        flex: 1,
                                        height: '100%',
                                        marginLeft:10,
                                        marginTop:5,
                                    }}
                                >
                                    <View>
                                        <Text ellipsizeMode='tail' numberOfLines={2}
                                            style={{
                                                fontFamily: "IBMPlexSansThai-Bold",
                                                fontSize: 12,
                                                color: "#666666",
                                                maxWidth: '100%',
                                                height: 20,
                                                maxWidth: '100%',
                                            }}
                                        >
                                            {title}
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            
                                        }}>
                                            
                                            {discount !== 0 ?
                                                <Text
                                                style={{
                                                    fontFamily: "IBMPlexSansThai-Light",
                                                    fontSize: 13,
                                                    color: '#666666',
                                                    paddingTop: 3,
                                                    textDecorationLine: 'line-through'
                                                }}
                                            >
                                                {numberWithCommas(discount)} บาท
                                            </Text>
                                            : 
                                                <Text></Text>
                                            }
                                            <Text
                                                style={{
                                                    fontFamily: "IBMPlexSansThai-Bold",
                                                    fontSize: 16,
                                                    color: '#00c402',
                                                    marginLeft: 10,
                                                }}
                                            >
                                                {numberWithCommas(price)}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily: "IBMPlexSansThai-Bold",
                                                    fontSize: 14,
                                                    marginLeft:5,
                                                    color: '#666666',
                                                    paddingTop: 2
                                                }}
                                            >
                                                บาท
                                            </Text>
                                            
                                            
                                        </View>
                                        </View>
                                        </View>
                    </TouchableOpacity>
    )
}


export default Package