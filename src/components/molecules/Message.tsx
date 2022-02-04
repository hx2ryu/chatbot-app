import React, { useMemo } from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';
import { Text } from '../atoms';
import { COLORS } from '@/utils/theme';
import { TimePresenter } from '.';
import { Dialogue, MessageType } from '@/store/dialogue/types';
import CardMessage from './CardMessage';

type Props = {
  sender: Dialogue['sender'];
  message: MessageType;
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
        backgroundColor: fromBot ? COLORS.secondary : COLORS.primary,
      } as ViewStyle,
      textStyle: {
        color: fromBot ? COLORS.black : COLORS.white,
      } as ViewStyle,
    };
  }, [sender]);

  const renderMessageContent = () => {
    const { type, value, buttons } = message;
    switch (type) {
      case 'text':
      default:
        return (
          <Text type={'blockQuote2'} style={textStyle}>
            {value}
          </Text>
        );
      case 'image':
        return <Image source={{ uri: value }} style={styles.image} />;
      case 'card':
        return <CardMessage title={value} data={buttons} />;
    }
  };

  return (
    <View style={styles.root}>
      {timeVisible && !isSentFromBot && <TimePresenter timestamp={timestamp} />}
      <View style={[styles.containerStyle, containerStyle]}>
        {renderMessageContent()}
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
  image: {
    width: 225,
    height: 300,
    borderRadius: 8,
  },
});
