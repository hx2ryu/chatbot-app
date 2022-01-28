import React, { useMemo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Text } from '../atoms';
import { COLORS } from '@/utils/theme';
import { TimePresenter } from '.';
import { Dialogue } from '@/store/types/chat';

type Props = {
  sender: Dialogue['sender'];
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
  const { containerStyle, isSentFromBot, textStyle } = useMemo(() => {
    const fromBot = sender === 'bot';
    return {
      isSentFromBot: fromBot,
      containerStyle: {
        backgroundColor: fromBot ? COLORS.blue[200] : COLORS.primary,
      } as ViewStyle,
      textStyle: {
        color: fromBot ? COLORS.grayscale[500] : COLORS.white,
      } as ViewStyle,
    };
  }, [sender]);

  return (
    <View style={styles.root}>
      {timeVisible && !isSentFromBot && <TimePresenter timestamp={timestamp} />}
      <View style={[styles.containerStyle, containerStyle]}>
        <Text type={'blockQuote2'} style={textStyle}>
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
  containerStyle: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 8,
  },
  text: {
    color: COLORS.white,
  },
});
