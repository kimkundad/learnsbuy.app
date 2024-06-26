import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'


const CourseList = ({ num, videos, color, onPress, bg }) => {

    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                backgroundColor: '#ffffff',
                padding: 10,
                marginHorizontal: 0,
                borderRadius: 10,
                alignItems: "center",
                marginTop: 8,
                borderWidth: 1,
                borderColor: bg,
            }}
        >
            <View style={{
                backgroundColor: color,
                paddingVertical: 2,
                paddingHorizontal: 2,
                borderRadius: 6
            }}>
                <Image
                    style={{
                        width: 70,
                        height: 40,
                        borderRadius: 6
                    }}
                    source={{ uri: 'https://learnsbuy.com/assets/uploads/' + videos.thumbnail_img }}
                />
            </View>
            <View>
                <Text style={{
                    color: "#345c74",
                    fontSize: 12,
                    paddingLeft: 20,
                    fontFamily: "IBMPlexSansThai-Regular",
                    width: 240
                }}>
                    {videos.course_video_name}
                </Text>
                <Text style={{
                    fontFamily: "IBMPlexSansThai-Regular",
                    color: "#666",
                    fontSize: 12,
                    paddingLeft: 20,
                    width: 180
                }}>
                    {videos.time_video == "" ? "ไม่ระบุเวลา" : videos.time_video + "นาที"}

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