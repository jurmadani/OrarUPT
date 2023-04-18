import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import TextAnimator from "../components/TextAnimator";
import { Alert } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";

const LoadingScreen = () => {
  const navigation = useNavigation(); // Importing and using the useNavigation hook from react-navigation for navigation
  const [animationCount, setAnimationCount] = useState(0); // Setting up a state variable 'animationCount' and a corresponding state update function 'setAnimationCount' with an initial value of 0
  const LoadingAnimation = () => (
    <LottieView
      source={require("../assets/Animations/LoadingAnimation.json")} // Setting the animation source file
      style={{
        width: 300,
        height: 350,
      }}
      loop={true} // Setting the animation to loop
      autoSize={true}
      autoPlay={true} // Setting the animation to autoplay
      resizeMode="contain"
    />
  );

  const handleAnimationFinish = () => {
    setAnimationCount(animationCount + 1); // Incrementing the animationCount state variable
    if (animationCount === 1) {
      // If animationCount reaches 1, replace the current screen with "MainApp" screen
      navigation.replace("MainApp");
    }
  };

  const _onFinish = () => {
    Alert.alert("Animation", "It is done!");
  };

  return (
    <View style={styles.container}>
      <LoadingAnimation /> {/* Rendering the loading animation */}
      <TextAnimator
        content="Se creeaza profilul️️️" // Text content to be animated
        textStyle={styles.textStyle} // Styling for the animated text
        style={styles.containerStyle} // Styling for the text container
        duration={750} // Duration of the animation
        onFinish={handleAnimationFinish} // Callback function to handle animation finish
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
