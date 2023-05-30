import React, { useState } from "react";
import LottieView from "lottie-react-native";
import Video from "react-native-video";
import { Feather } from "react-native-vector-icons";

import { View, TouchableOpacity, Text, StyleSheet, Modal } from "react-native";
import FullScreenVideo from "../video/Video";

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: "#e1e1e1",
    padding: 20,
    marginBottom: 0,
    margin: 10,
  },
  animation: {
    width: 140,
    height: 140,
  },
});

export const VideoCard = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={{ alignSelf: "flex-start" }}>
          <View style={{ backgroundColor: "white", padding: 20 }}>
            <TouchableOpacity onPress={toggleModal}>
              <Feather name={"x"} size={30} />
            </TouchableOpacity>
            <FullScreenVideo />
          </View>
        </View>
      </Modal>
      <View style={styles.card}>
        <TouchableOpacity onPress={toggleModal}>
          <LottieView
            style={styles.animation}
            source={require("./json/lf20_ezxj8avu.json")}
            autoPlay
            loop
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
