import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Animated } from "react-native";
import { useEffect } from "react";
import AppIconWhiteSVGComponent from "../components/AppIconWhiteSVG";
import { useNavigation } from "@react-navigation/native";

export default class SplashScreen_v2 extends React.Component {
  state = {
    loadingProgress: new Animated.Value(0),
    animationDone: false,
  };

  componentDidMount() {
    Animated.timing(this.state.loadingProgress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      delay: 700,
    }).start(() => {
      this.setState({ animationDone: true }, () => {
        // Navigation logic to "OnBoardingScreen" when animation is finished
        if (this.state.animationDone) {
          this.props.navigation.navigate("Getting Started"); // Replace "OnBoardingScreen" with the actual name of your screen
        }
      });
    });
  }

  render() {
    const imageScale = {
      transform: [
        {
          scale: this.state.loadingProgress.interpolate({
            inputRange: [0, 15, 100],
            outputRange: [0.1, 0.06, 16],
          }),
        },
      ],
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[imageScale]}>
          <AppIconWhiteSVGComponent />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E225B",
  },
});
