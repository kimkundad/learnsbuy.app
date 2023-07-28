import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native'

const IMAGE_WITH = 240;
const IMAGE_HEIGHT = 160;

const Package = ({title,img, price, discount, pack, onPress, navigation}) => {
    
    return (
        <TouchableOpacity
                  onPress={
                    onPress
                    }
                        style={{
                            height:220,
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
                                                fontWeight: 'bold',
                                                fontSize: 12,
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
                                            <Text
                                                style={{
                                                    fontWeight: 700,
                                                    fontSize: 16,
                                                    color: '#00c402',
                                                }}
                                            >
                                                {price}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    marginLeft:5,
                                                    color: '#666',
                                                    paddingTop: 2
                                                }}
                                            >
                                                บาท
                                            </Text>
                                            {discount !== 0 ?
                                                <Text
                                                style={{
                                                    fontWeight: 200,
                                                    fontSize: 13,
                                                    color: '#666',
                                                    marginLeft: 10,
                                                    paddingTop: 3,
                                                    textDecorationLine: 'line-through'
                                                }}
                                            >
                                                {discount} บาท
                                            </Text>
                                            : 
                                                <Text></Text>
                                            }
                                            
                                            
                                        </View>
                                        </View>
                                        </View>
                    </TouchableOpacity>
    )
}


export default Package