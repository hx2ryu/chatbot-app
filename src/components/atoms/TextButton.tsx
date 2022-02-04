import { COLORS } from '@/utils/theme';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Text } from '.';

interface Props extends TouchableOpacityProps {
  value: string;
}
const TextButton: React.FC<Props> = ({ value, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text type={'blockQuote3'}>{value}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
});
