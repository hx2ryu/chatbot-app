import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { useMemo } from 'react';
import { Text } from '../atoms';
import { COLORS } from '@/theme';
import { TimePresenter } from '.';

type Props = {
  sender: 'me' | 'bot';
  message: string;
  timestamp: string;
  timeVisible: boolean;
};
const Message: React.FC<Props> = ({
  sender,
  message,
  timestamp,
  timeVisible,
}) => {
  const { containerStyle, isSentFromBot } = useMemo(() => {
    const fromBot = sender === 'bot';
    return {
      isSentFromBot: fromBot,
      containerStyle: {
        padding: 10,
        marginBottom: 5,
        borderRadius: 8,
        backgroundColor: fromBot ? COLORS.yellow : COLORS.grayscale[500],
      } as ViewStyle,
    };
  }, [sender]);

  return (
    <View style={styles.root}>
      {timeVisible && !isSentFromBot && <TimePresenter timestamp={timestamp} />}
      <View style={containerStyle}>
        <Text type={'blockQuote2'} style={styles.text}>
          {message}
        </Text>
      </View>
      {timeVisible && isSentFromBot && <TimePresenter timestamp={timestamp} />}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  text: {
    color: COLORS.white,
  },
});
