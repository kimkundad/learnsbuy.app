import React from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView,Image, StatusBar, Dimensions, Text } from 'react-native'
import VideoPlayer from 'react-native-video-player';
import Icon from 'react-native-vector-icons/Ionicons';
import CourseList from '../screens/CourseList'

const { width, height } = Dimensions.get("window");

const VideoPage = ({ navigation }) => {

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <StatusBar backgroundColor="#32d191" />
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        padding: 5,
                    }}
                >
                    <Icon
                        name="arrow-back-outline"
                        size={28}
                        color="#666"
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "#666",
                    }}
                >
                    Video
                </Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                    }}
                >
                    <Icon name="notifications-outline" size={28} color="#666" />
                </TouchableOpacity>
            </View>
            <VideoPlayer
                video={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                showDuration={true}
                autoplay
                controlsTimeout={2000}
                pauseOnPress={true}
            />
            <CourseList
                num={1}
                color="#fde6e6"
                duration="2 hours, 20 minutes"
                title="บทนำและ Hiragana ตอนที่ 1"
            />
            <ScrollView
                style={{
                    paddingHorizontal: 10,
                }}
            >
            <View
                style={{
                    marginTop: 10
                }}
            >
                <CourseList
                    num={1}
                    color="#fde6e6"
                    duration="2 hours, 20 minutes"
                    title="บทนำและ Hiragana ตอนที่ 1"
                    onPress={() => navigation.navigate('VideoPage')}
                />
                <CourseList
                    num={1}
                    color="#dff0d8"
                    duration="2 hours, 20 minutes"
                    title="Hiragana ตอนที่ 2"
                    onPress={() => navigation.navigate('VideoPage')}
                />
                <CourseList
                    num={1}
                    color="#fde6e6"
                    duration="2 hours, 20 minutes"
                    title="การออกเสียง Hiragana พื้นฐาน"
                    onPress={() => navigation.navigate('VideoPage')}
                />
                <CourseList
                    num={1}
                    color="#fde6e6"
                    duration="2 hours, 20 minutes"
                    title="บทที่ 2 ไวยากรณ์ ตอนที่ 1"
                    onPress={() => navigation.navigate('VideoPage')}
                />
                <CourseList
                    num={1}
                    color="#fde6e6"
                    duration="2 hours, 20 minutes"
                    title="บทที่ 2 ไวยากรณ์ ตอนที่ 2"
                    onPress={() => navigation.navigate('VideoPage')}
                />
                <CourseList
                    num={1}
                    color="#fde6e6"
                    duration="2 hours, 20 minutes"
                    title="บทที่ 3 ไวยากรณ์ ตอนที่ 1"
                    onPress={() => navigation.navigate('VideoPage')}
                />

            </View>
            </ScrollView>
        </View>
        </SafeAreaView>
    )

}

export default VideoPage

const styles = StyleSheet.create({
    backgroundVideo: {
        width: '100%',
        height: '100%',
    },
    container: {
        backgroundColor: "#eee",
        justifyContent: "center"
    }
});