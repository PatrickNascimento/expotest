import React from 'react';

import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#e1e1e1',
    padding: 10,
  },
});

export const VideoCard = () => {
  return (
    <View style={styles.card}>
      <Svg width={40} height={40} viewBox="0 0 24 24" fill="white">
        <Path d="M8 5v14l11-7z" />
      </Svg>
    </View>
  );
};
