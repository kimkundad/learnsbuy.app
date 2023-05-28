import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import PropTypes from 'prop-types';

const CourseList = ({title,num, duration, activebg, percent, color, onPress}) => {


    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                padding: 20,
                marginHorizontal: 0,
                borderRadius: 10,
                alignItems: "center",
                marginTop: 8
            }}
        >
            <View style={{
                backgroundColor: color,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 6
            }}>
                <Text style={{
                    fontSize: 10,
                    fontFamily: "Bold"
                }}>{num}</Text>
            </View>
            <View>
                <Text style={{
                    color: "#345c74",
                    fontFamily: "Bold",
                    fontSize: 13,
                    paddingLeft: 20,
                    width: 280
                }}>
                    {title}
                </Text>
                <Text style={{
                    color: "#666",
                    fontSize: 12,
                    paddingLeft: 20,
                    width: 180
                }}>
                    {duration}
                </Text>
            </View>

            <ProgressCircle
                percent={0}
                radius={17}
                borderWidth={1.5}
                color="#f58084"
                shadowColor="#FFF"
                bgColor={color}
            >
                <Image
                    source={require('../assets/img/pl.png')}
                />
            </ProgressCircle>
        </TouchableOpacity>
    )
}

export default CourseList