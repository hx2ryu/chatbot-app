import { Animated, ColorValue, StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';

type Props = {
  color: ColorValue | undefined;
  delay: number;
};
const FadeDot: React.FC<Props> = ({ color, delay }) => {
  const value = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.loop(
        Animated.timing(value, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ),
    ]).start();
  }, [delay, value]);

  const opacity = value.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  return (
    <Animated.View style={[styles.dot, { opacity, backgroundColor: color }]} />
  );
};

export default FadeDot;
const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
});
