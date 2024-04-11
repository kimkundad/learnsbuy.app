import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image,} from 'react-native';
import {
  VideoSkipBack,
  VideoPause,
  VideoPlay,
  VideoSkipForward,
} from '../assets/icons';

const PlayerControls = (props) => {
  const {playing, onPlay, onPause, skipForwards, skipBackwards} = props;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
      <Image
                source={require('../assets/icons/video-backward.png')}
                style={{width: 25, height: 25, }}
              />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={playing ? onPause : onPlay}>
        {playing ? (
          <Image
                source={require('../assets/icons/video-pause.png')}
                style={{width: 40, height: 40, }}
              />
        ) : (
          <Image
                source={require('../assets/icons/video-play.png')}
                style={{width: 40, height: 40, }}
              />
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
        <Image
                source={require('../assets/icons/video-forward.png')}
                style={{width: 25, height: 25,}}
              />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 3,
  },
  touchable: {
    padding: 5,
  },
  touchableDisabled: {
    opacity: 0.3,
  },
});

export default PlayerControls;