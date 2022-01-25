import React from 'react';
import { ActivityIndicator, ColorValue, StyleSheet, View } from 'react-native';
import { FadeDot } from '../atoms';

type Props = {
  type: 'normal' | 'dot';
  color?: ColorValue | undefined;
};
const LoadingIndicator: React.FC<Props> = ({ type, color }) => {
  if (type === 'dot') {
    const delays = [0, 700, 1300];
    return (
      <View style={styles.dotContainer}>
        {delays.map((value, index) => (
          <FadeDot color={'tomato'} delay={value} key={index} />
        ))}
      </View>
    );
  }

  return (
    <View style={styles.basicContainer}>
      <ActivityIndicator color={color} />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  basicContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
});
