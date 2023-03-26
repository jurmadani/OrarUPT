import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, Image, Animated } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const progress = new Animated.Value(0);
  const [playCount, setPlayCount] = React.useState(0);
  const navigation = useNavigation();

  const playAnimation = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setPlayCount(playCount + 1);
    });
  };

  useEffect(() => {
    playAnimation();
  }, []);

  useEffect(() => {
    if (playCount === 2) {
      handleAnimationFinish();
    } else {
      progress.setValue(0);
      playAnimation();
    }
  }, [playCount]);

  const handleAnimationFinish = () => {
    navigation.replace('OnBoardingScreen')
   // navigation.navigate("OnBoardingScreen");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Images/AppIcon.png")}
        style={styles.AppIconStyle}
      />
      <LottieView
        source={require("../assets/Animations/LoadingCircle.json")}
        progress={progress}
        style={styles.LoadingCircleStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  AppIconStyle: {
    width: "45%",
    height: "22%",
  },
  LoadingCircleStyle: {
    marginTop: 75,
    height: 40,
    width: 40,
  },
});

export default SplashScreen;
