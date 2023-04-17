import { useNavigation } from "@react-navigation/native";
import React, { Component, useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import LottieView from "lottie-react-native";
import { COLORS, SIZES } from "../constants/themes";

const slides = [
  {
    id: 1,
    title: "Bine ai venit",
    description: "Orare UPT este aplicatia perfecta pentru studenti ",
    animation: require("../assets/Animations/OnBoardingAnimationPage1.json"),
  },
  {
    id: 2,
    title: "Verifica-ti orarul",
    description:
      "Primeste notificari despre cursurile din ziua curenta si in ce sala se tin ele si fii mereu la curent cu orarul",
    animation: require("../assets/Animations/OnBoardingAnimationPage2.json"),
  },
  {
    id: 3,
    title: "Hai sa incepem",
    description:
      "Pentru a începe să folosești aplicația, autentifică-te cu contul de student sau prin celelalte metode",
    animation: require("../assets/Animations/OnBoardingAnimationPage3.json"),
  },
];

const OnBoardingScreen = () => {
  const navigate = useNavigation();

  buttonLabel = (label) => {
    return (
      <View
        style={{
          padding: 12,
        }}
      >
        <Text
          style={{
            color: COLORS.title,
            fontWeight: "600",
            fontSize: SIZES.h4,
          }}
        >
          {label}
        </Text>
      </View>
    );
  };
  return (
    <AppIntroSlider
      data={slides}
      style={{ backgroundColor: "#2E3192" }}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              padding: 15,
              paddingTop: item.id === 2 ? 180: 100,
            }}
          >
            <LottieView
              source={item.animation}
              style={{
                width: item.id != 2 ? SIZES.width - 500 : SIZES.width - 350,
                height: item.id != 2 ? 300 : 220,
              }}
              resizeMode="contain"
              autoPlay
              loop
            />
            <View
              style={{
                backgroundColor: "white",
                height: SIZES.height,
                width: SIZES.width,
                alignItems: "center",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.title,
                  paddingTop: item.id != 2 ? 45 : 45,
                  fontSize: 35,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  paddingTop: 9,
                  color: COLORS.title,
                  width:SIZES.width - 30,
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        );
      }}
      activeDotStyle={{
        backgroundColor: COLORS.purple,
        width: 25,
      }}
      showSkipButton
      renderNextButton={() => this.buttonLabel("Next")}
      renderSkipButton={() => this.buttonLabel("Skip")}
      renderDoneButton={() => this.buttonLabel("Done")}
      onDone={() => {
        navigate.replace("PreLogin");
      }}
    />
  );
};

export default OnBoardingScreen;
