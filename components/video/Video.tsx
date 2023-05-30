import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

const FullScreenVideo = () => {
  const videoRef = React.useRef(null);
  const [isFullScreen, setFullScreen] = React.useState(false);
  const videoSource = { uri: 'https://videokits-apps.s3- us-west-1.amazonaws.com/riza/ usrHoJb5oxGmfytFgabwwyO/Video/ fiAoW59l6J54or7NY3vax3kV2gGRv1 Xtj.mov/HLS/ fiAoW59l6J54or7NY3vax3kV2gGRv1 Xtj.m3u8' }; // Substitua pela URL do seu vídeo

  const toggleFullScreen = async () => {
    if (isFullScreen) {
      await ScreenOrientation.unlockAsync();
    } else {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    setFullScreen(!isFullScreen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleFullScreen}>
        <Video
          ref={videoRef}
          source={videoSource}
          style={styles.fullScreenVideo}          
          shouldPlay={true}
          useNativeControls
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
  fullScreenVideo: {
    width: '100%',
    height: '100%',    
    resizeMode: 'contain',
  },
});

export default FullScreenVideo;
