import React, { useState, useRef, useEffect  } from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, StatusBar, Dimensions, Text } from 'react-native'
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import ProgressCircle from 'react-native-progress-circle'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';
import getCoin from '../../services/getCoin';

const { width, height } = Dimensions.get("window");

const VideoPage = ({ route, navigation }) => {

    const product = route.params.product;
  
    const { user, error, isLogin, message } = useSelector(state => state.auth);
    const { data: mycoinx, isLoading: fetchLoading1 } = getCoin()

    const [urlvideo, setUrlvideo] = useState('')
    const [imgvideo, setImgvideo] = useState('')
    const [namevideo, setNamevideo] = useState('')
    const [sortvideo, setSortvideo] = useState('')
    const [timevideo, setTimevideo] = useState('')
    const [videoall, setVideoall] = useState('')
    const [mymin, setMymin] = useState(0)
    const [cutTime, setCutTime] = useState(0)
    const [token, settoken] = useState(user?.token);
    const [mycoin, setMycoin] = useState(mycoinx?.data);

    const useDataFile = async (id) => {
        console.log('id-->', id)
        try {
            const data0 = await axios.get(`https://www.learnsbuy.com/api/get_file_app/${id}`)
            
            if(data0?.data?.status === 200){
                setVideoall(data0?.data?.data)
            }
          } catch (err) {
            
          }
    }

    useEffect(() => {
        handleChange(product.option)
        useDataFile(product.course_id)
    }, []);

    const clickedStatus = () => {

        setClicked(true)
        setTimeout(function(){ setClicked(false) }, 5000);

    }

    const countTime = async () => {

        let secs = new Date().getSeconds()
        setMymin(new Date().getSeconds())
        if(secs !== mymin){
            setCutTime(cutTime + 1)
            if(cutTime === 10){
                console.log('10 sec-->', cutTime)
                setCutTime(0)

                try {
                    const { data } = await axios.post('https://www.learnsbuy.com/api/del_point_v2', {
                        token
                    })
                    if(data.status === 200){
                        console.log('response', data?.data)
                         setMycoin(data?.data)
                    }
                    
                  } catch (err) {
                    console.log('err xx00--> ', err)
                    return err.response.data
                  }

            }
            // console.log('setCutTime-->', cutTime)
        }
        
    }
    

    const handleChange = async (id) => {
        try {
            const data1 = await axios.get(`https://www.learnsbuy.com/api/getVideoId/${id}`)
            
            if(data1?.data?.status === 200){
                setUrlvideo(data1?.data?.data?.course_video_url)
                setImgvideo(data1?.data?.data?.thumbnail_img)
                setNamevideo(data1?.data?.data?.course_video_name)
                setSortvideo(data1?.data?.data?.order_sort)
                setTimevideo(data1?.data?.data?.time_video)
            }
          } catch (err) {
            
          }
    }

    //// video /////////////


    const [clicked, setClicked] = useState(false);
  const [puased, setPaused] = useState(false);
  const [progress, setProgress] = useState(null);
  const [statusBars, setStatusBars] = useState(false);
  const [fullScreen,setFullScreen]=useState(false)
  const ref = useRef();
  
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

    //// end video /////////////


      const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar hidden={statusBars} backgroundColor="#32d191" />
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
                            color="#666666"
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "#666666",
                        }}
                    >
                        <Icon name="medal-outline" size={22} color="#ff741a" /> 
                        <View style={{
                            paddingLeft: 5,
                         }}>
                        <Text style={{
                                                color: "#000000",
                                                fontSize: 16,
                                                fontWeight: 700,
                                                
                                            }}>
                                                {numberWithCommas(mycoin)}
                                            </Text></View>
                    </Text>
                    <TouchableOpacity
                        style={{
                            padding: 5,
                        }}
                    >
                        
                    </TouchableOpacity>
                </View>

               
                    <View>
                        <TouchableOpacity
                            style={{ marginTop: -40, width: '100%', height:fullScreen?'69%': 200}}
                            onPress={() => {
                            clickedStatus();
                            }}>

                        <Video
                                paused={puased}
                                source={{
                                    uri: urlvideo,
                                }}
                                poster={'https://learnsbuy.com/assets/uploads/' + imgvideo}
                                ref={ref}
                                onProgress={x => {
                                    // console.log( 'xxx',x);
                                    countTime()
                                    setProgress(x);
                                }}
                                // Can be a URL or a local file.
                                //  ref={(ref) => {
                                //    this.player = ref
                                //  }}                                      // Store reference
                                //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
                                //  onError={this.videoError}

                                // Callback when video cannot be loaded
                                style={{width: '100%', height: fullScreen?'100%': 200}}
                                resizeMode="contain"
                                />
                                <Text
                                    style={{ 
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        color: '#ea4335',
                                        position: 'absolute',
                                        bottom: 10, right: 20,
                                        fontFamily: "IBMPlexSansThai-Bold",
                                    }}
                                >
                                    {user?.profile?.name} {user?.profile?.email}
                                </Text>
                                {clicked && (
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  ref.current.seek(parseInt(progress.currentTime) - 10);
                }}>
                <Image
                  source={require('../assets/video/backward.png')}
                  style={{width: 30, height: 30, tintColor: 'white'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPaused(!puased);
                }}>
                <Image
                  source={
                    puased
                      ? require('../assets/video/play-button.png')
                      : require('../assets/video/pause.png')
                  }
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    marginLeft: 50,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  ref.current.seek(parseInt(progress.currentTime) + 10);
                }}>
                <Image
                  source={require('../assets/video/forward.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    marginLeft: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems:'center'
              }}>
              <Text style={{color: 'white'}}>
                {format(progress.currentTime)}
              </Text>
              <Slider
                style={{width: '80%', height: 100}}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#fff"
                onValueChange={(x)=>{
                  ref.current.seek(x);
                }}
              />
              <Text style={{color: 'white'}}>
                {format(progress.seekableDuration)}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                top: 10,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems:'center'
              }}>
            <TouchableOpacity onPress={()=>{
              if(fullScreen){
                Orientation.lockToPortrait();
                setStatusBars(false)
            } else{
                Orientation.lockToLandscape();
                setStatusBars(true)
            }
            setFullScreen(!fullScreen)
            }}>
              <Image source={fullScreen?require('../assets/video/minimize.png'):require('../assets/video/full-size.png')}
               style={{width:24,height: 24,tintColor:'white'}}/>
            </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}

                        </TouchableOpacity>
{/* 
                        <Video
                            resizeMode={"cover"}
                            ref={(ref) => {
                                this.video = ref;
                              }}
                            poster={'https://learnsbuy.com/assets/uploads/' + imgvideo}
                            source={{ uri: urlvideo }}
                            style={{ width: '100%', aspectRatio: 16 / 9 }} 
                        /> */}
                        <View
                        style={{
                            paddingHorizontal: 2,
                        }}
                    >
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
                                            borderColor: '#32d191',
                                        }}
                                    >
                                        <View style={{
                backgroundColor: '#fde6e6',
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
                    source={{ uri: 'https://learnsbuy.com/assets/uploads/' + imgvideo }}
                />
            </View>
                                        <View>
                                            <Text style={{
                                                color: "#345c74",
                                                fontSize: 12,
                                                paddingLeft: 20,
                                                width: 280,
                                                fontFamily: "IBMPlexSansThai-Regular",
                                            }}>
                                                {namevideo}
                                            </Text>
                                            <Text style={{
                                                color: "#666666",
                                                fontSize: 12,
                                                paddingLeft: 20,
                                                width: 180,
                                                fontFamily: "IBMPlexSansThai-Regular",
                                            }}>
                                                {timevideo== "" ? "ไม่ระบุเวลา" : timevideo + "นาที"}

                                            </Text>
                                        </View>

                                        <ProgressCircle
                                            percent={0}
                                            radius={17}
                                            borderWidth={1.5}
                                            color="#f58084"
                                            shadowColor="#FFF"
                                            bgColor='#fde6e6'
                                        >
                                            <Image
                                                source={require('../assets/img/pl.png')}
                                            />
                                        </ProgressCircle>
                                    </TouchableOpacity>
                    </View>
                    </View>

        

                {/* <CourseList
                num={1}
                color="#fde6e6"
                duration="2 hours, 20 minutes"
                title="บทนำและ Hiragana ตอนที่ 1"
            /> */}
                <ScrollView
                    style={{
                        paddingHorizontal: 10,
                        marginBottom: 1000,
                    }}
                >
                    <View
                        style={{
                            marginTop: 10
                        }}
                    >
                                {videoall?.video &&
    <>
    {videoall?.video.map((videos) =>
                                (
                                    <TouchableOpacity
                                    key={videos.id}
                                    onPress={() => handleChange(videos.id)}
                                        style={{
                                            flexDirection: "row",
                                            backgroundColor: '#ffffff',
                                            padding: 10,
                                            marginHorizontal: 0,
                                            borderRadius: 10,
                                            alignItems: "center",
                                            marginTop: 8,
                                            borderWidth: 1,
                                            borderColor: '#fde6e6',
                                        }}
                                    >

                                        <View style={{
                backgroundColor: '#fde6e6',
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
                                                width: 240,
                                                fontFamily: "IBMPlexSansThai-Regular",
                                            }}>
                                                {videos.course_video_name}
                                            </Text>
                                            <Text style={{
                                                color: "#666666",
                                                fontSize: 12,
                                                paddingLeft: 20,
                                                width: 180,
                                                fontFamily: "IBMPlexSansThai-Regular",
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
                                            bgColor='#fde6e6'
                                        >
                                            <Image
                                                source={require('../assets/img/pl.png')}
                                            />
                                        </ProgressCircle>
                                    </TouchableOpacity>
                                )
                                )}
    </>
                                }
                                
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