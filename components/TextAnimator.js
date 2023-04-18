import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default class TextAnimator extends React.Component {
  animatedValues = []; // An array to store Animated.Value objects for each word in the text

  constructor(props) {
    super(props);

    const textArr = props.content.trim().split(' '); // Split the content into an array of words
    textArr.forEach((_, i) => {
      this.animatedValues[i] = new Animated.Value(0); // Create a new Animated.Value object for each word and store it in the animatedValues array
    });
    this.textArr = textArr; // Store the array of words in the class instance variable this.textArr
  }

  componentDidMount() {
    this.animated(); // Call the animated method when the component is mounted
  }

  animated = (toValue = 1) => {
    const animations = this.textArr.map((_, i) => {
      return Animated.timing(this.animatedValues[i], {
        toValue, // Set the end value of the animation
        duration: this.props.duration, // Set the duration of the animation
        useNativeDriver: true // Optimize the animation performance by using the native driver
      });
    });

    Animated.stagger(
      this.props.duration / 5, // Set a stagger duration for each word animation
      toValue === 0 ? animations.reverse() : animations // Reverse the order of animations if toValue is 0 (hide), otherwise use the original order (show)
    ).start(() => {
      setTimeout(() => this.animated(toValue === 0 ? 1 : 0), 1000); // Call the animated method recursively after a delay to create an infinite loop of animation
      if (this.props.onFinish) {
        this.props.onFinish(); // Call the onFinish callback if provided
      }
    });
  };

  render() {
    return (
      <View style={[this.props.style, styles.textWrapper]}>
        {this.textArr.map((word, index) => {
          return (
            <Animated.Text
              key={`${word}-${index}`} // Use the word and index as the key to uniquely identify each Animated.Text element
              style={[
                this.props.textStyle,
                {
                  opacity: this.animatedValues[index], // Set the opacity of the text based on the corresponding Animated.Value
                  transform: [
                    {
                      translateY: Animated.multiply(
                        this.animatedValues[index], // Use the corresponding Animated.Value as the input value
                        new Animated.Value(-5) // Set a fixed translation value for each word
                      )
                    }
                  ]
                }
              ]}
            >
              {word}
              {`${index < this.textArr.length ? ' ' : ''}`} // Add a space after each word except for the last word
            </Animated.Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});
