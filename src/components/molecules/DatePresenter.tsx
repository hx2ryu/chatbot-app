import React from 'react';
import { COLORS } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { Text } from '../atoms';

type Props = {
  data: string;
};
const DatePresenter: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text type={'blockQuote2'} style={styles.text}>
          {data}
        </Text>
      </View>
    </View>
  );
};

export default DatePresenter;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    paddingVertical: 2,
    paddingHorizontal: 15,
    justifyContent: 'center',
    opacity: 0.8,
  },
  text: {
    fontSize: 12,
    color: COLORS.white,
  },
});
