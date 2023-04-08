import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import TextAnimator from "../components/TextAnimator";
import { Alert } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";

const LoadingScreen = () => {
  const navigation = useNavigation();
  const [animationCount, setAnimationCount] = useState(0);
  const LoadingAnimation = () => (
    <LottieView
      source={require("../assets/Animations/LoadingAnimation.json")}
      style={{
        width: 300,
        height: 350,
      }}
      loop={true}
      autoSize={true}
      autoPlay={true}
      resizeMode="contain"
    />
  );

  const handleAnimationFinish = () => {
    setAnimationCount(animationCount + 1);
    if (animationCount === 1) {
      navigation.replace("MainApp");
    }
  };

  const _onFinish = () => {
    Alert.alert("Animation", "It is done!");
  };
  return (
    <View style={styles.container}>
      <LoadingAnimation />
      <TextAnimator
        content="Se creeaza profilul️️️"
        textStyle={styles.textStyle}
        style={styles.containerStyle}
        duration={750}
        onFinish={handleAnimationFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14,
  },
});

export default LoadingScreen;
