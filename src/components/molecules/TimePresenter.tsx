import React from 'react';
import { COLORS } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { Text } from '../atoms';
import { getTime } from '@/utils/date';

type Props = {
  timestamp: string;
};
const TimePresenter: React.FC<Props> = ({ timestamp }) => {
  const time = getTime(timestamp);

  return (
    <View style={styles.container}>
      <Text type={'blockQuote2'} style={styles.text}>
        {time}
      </Text>
    </View>
  );
};

export default TimePresenter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 10,
    color: COLORS.blue[700],
  },
});
