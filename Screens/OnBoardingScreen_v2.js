import { StyleSheet, Text, View, Image, Animated } from "react-native";
import React, { useState, useRef } from "react";
import { FlatList } from "react-native";
import OnBoardingScreenSlides from "../constants/OnBoardingScreenSlides";
import OnBoardingItem from "../components/OnBoardingItem";
import Paginator from "../components/Paginator";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnBoardingScreen_v2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={OnBoardingScreenSlides}
          renderItem={({ item }) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          // Scroll to the next item in the FlatList
          if (currentIndex + 1 > OnBoardingScreenSlides.length - 1) {
            navigation.navigate("PreLogin");
          } else slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        }}
      >
        <View
          style={{
            height: 54,
            width: 114,
            backgroundColor: "#2E3192",
            bottom: 37,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white",fontSize:16,fontWeight:'bold' }}>{currentIndex === OnBoardingScreenSlides.length-1 ? "Incepe" : "Continua"}</Text>
        </View>
      </TouchableOpacity>

      <Paginator data={OnBoardingScreenSlides} scrollX={scrollX} />
    </View>
  );
};

export default OnBoardingScreen_v2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white'
  },
});
