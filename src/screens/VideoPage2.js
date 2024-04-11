import React, {useState, useEffect} from 'react';
import Video from 'react-native-video';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Image,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProgressBar from './progressBar';
import PlayerControls from './playerControls';
import {FullscreenClose, FullscreenOpen} from '../assets/icons';
import Orientation from 'react-native-orientation-locker';
import { useSelector, useDispatch } from "react-redux";
import getCoin from '../../services/getCoin';
import axios from 'axios';
import ProgressCircle from 'react-native-progress-circle'
import { enableSecureView, disableSecureView, forbidAndroidShare, allowAndroidShare } from 'react-native-prevent-screenshot-ios-android';
import { Platform } from 'react-native'

const windowHeight = Dimensions.get('window').width * (9 / 16);
const windowWidth = Dimensions.get('window').width;

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;


const VideoPage2 = ({ route, navigation }) => {

  const product = route.params.product;

  const { user, error, isLogin, message } = useSelector(state => state.auth);
  const videoRef = React.createRef();
  const [time, setTime] = useState(new Date());
  const { data: mycoinx, isLoading: fetchLoading1 } = getCoin()
  const [mycoin, setMycoin] = useState(mycoinx?.data);
  const [token, settoken] = useState(user?.token);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showControl, setShowControl] = useState(true);
  const [mymin, setMymin] = useState(0)
  const [cutTime, setCutTime] = useState(0)

  const [urlvideo, setUrlvideo] = useState('')
    const [imgvideo, setImgvideo] = useState('')
    const [namevideo, setNamevideo] = useState('')
    const [sortvideo, setSortvideo] = useState('')
    const [timevideo, setTimevideo] = useState('')
    const [videoall, setVideoall] = useState('')

  useEffect(() => {

    Orientation.addOrientationListener(handleOrientation);
    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };

  }, []);

  useEffect(() => {

  if (Platform.OS === 'android') {
    forbidAndroidShare(); //This function blocks the Screen share/Recording and taking screenshot for android devices.
  }
  if (Platform.OS == 'ios') {
    enableSecureView(); //This function blocks the Screen share/Recording and taking screenshot for iOS devices.
  }
}, []);

  useEffect(() => {

  if(play){
  const interval = setInterval(() => {
    
        let secs = new Date().getSeconds()
            if(secs === 10){
                console.log('1 min-->')
                delete_point();
            }
        console.log('interval', secs)

  }, 1000);
  

    return () => clearInterval(interval);
  }
  }, [play]);

 
  const delete_point = async () => {

    try {
      const { data } = await axios.post('https://www.learnsbuy.com/api/del_point_v2', {
          token
      })
      if(data.status === 200){
          console.log('response', data?.data)
           setMycoin(data?.data)
           if(data?.data <= 0){
            navigation.navigate('MyCourse')
           }
      }
      
    } catch (err) {
      console.log('err xx00--> ', err)
      return err.response.data
    }

  }

  const useDataFile = async (id) => {
    
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


const handleChange = async (id) => {
  
  try {
    
      const data1 = await axios.get(`https://www.learnsbuy.com/api/getVideoId/${id}`)
      console.log('id-->rr', id)
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


  const handleOrientation = orientation => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      setFullscreen(true);
      StatusBar.setHidden(true);
    } else {
      setFullscreen(false);
      StatusBar.setHidden(false);
    }
  };

  const handlePlayPause = () => {
    if (play) {
      setPlay(false);
      setShowControl(true);
      console.log('Play', play);
      return;
    }
    setTimeout(() => setShowControl(false), 2000);
    setPlay(true);
  };

  const handlePlay = () => {
    setTimeout(() => setShowControl(false), 500);
    let secs = new Date().getSeconds()
    console.log('Play', time);
    setPlay(true);
  };

  const skipBackward = () => {
    videoRef.current.seek(currentTime - 15);
    setCurrentTime(currentTime - 15);
  };

  const skipForward = () => {
    videoRef.current.seek(currentTime + 15);
    setCurrentTime(currentTime + 15);
  };

  const handleControls = () => {
    if (showControl) {
      setShowControl(false);
    } else {
      setShowControl(true);
    }
  };

  const handleFullscreen = () => {
    if (fullscreen) {
      Orientation.unlockAllOrientations();
    } else {
      Orientation.lockToLandscapeLeft();
    }
  };

  const onLoadEnd = data => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  };

  const onProgress = data => {
    setCurrentTime(data.currentTime);
  };

  const onSeek = data => {
    videoRef.current.seek(data.seekTime);
    setCurrentTime(data.seekTime);
  };

  const onEnd = () => {
    setPlay(false);
    videoRef.current.seek(0);
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <SafeAreaView>
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
                                                {(mycoin)}
                                            </Text></View>
                    </Text>
                    <TouchableOpacity
                        style={{
                            padding: 5,
                        }}
                    >
                        
                    </TouchableOpacity>
                </View>
    <View style={fullscreen ? styles.fullscreenContainer : styles.container}>
      <TouchableOpacity onPress={handleControls}>
        <>
          <Video
            ref={videoRef}
            source={{
              uri: urlvideo,
          }}
          poster={'https://learnsbuy.com/assets/uploads/' + imgvideo}
            style={fullscreen ? styles.fullscreenVideo : styles.video}
            controls={false}
            resizeMode={'contain'}
            onLoad={onLoadEnd}
            onProgress={onProgress}
            onEnd={onEnd}
            paused={!play}
          />
          <Text
                                    style={{ 
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        color: '#BBBBBB',
                                        position: 'absolute',
                                        bottom: 30, right: 20,
                                        fontFamily: "IBMPlexSansThai-Bold",
                                    }}
                                >
                                    {user?.profile?.name} {user?.profile?.email}
                                </Text>

          {showControl && (
            <View style={styles.controlOverlay}>
              <TouchableOpacity
                onPress={handleFullscreen}
                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                style={styles.fullscreenButton}>
                {fullscreen ? 
                <Image
                source={require('../assets/icons/fullscreen-close.png')}
                style={{width: 30, height: 30,}}
              />
                : 
                <Image
                source={require('../assets/icons/fullscreen-open.png')}
                style={{width: 30, height: 30,}}
              />}
              </TouchableOpacity>

              <PlayerControls
                onPlay={handlePlay}
                onPause={handlePlayPause}
                playing={play}
                skipBackwards={skipBackward}
                skipForwards={skipForward}
              />

              <ProgressBar
                currentTime={currentTime}
                duration={duration > 0 ? duration : 0}
                onSlideStart={handlePlayPause}
                onSlideComplete={handlePlayPause}
                onSlideCapture={onSeek}
              />
            </View>
          )}
        </>
      </TouchableOpacity>
      
    </View>
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
                                                width: 240,
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: '#ebebeb',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 5,
  },
  video: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'black',
  },
  fullscreenVideo: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: 'black',
  },
  text: {
    marginTop: 30,
    marginHorizontal: 20,
    fontSize: 15,
    textAlign: 'justify',
  },
  fullscreenButton: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
  },
  controlOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000c4',
    justifyContent: 'space-between',
  },
});

export default VideoPage2;