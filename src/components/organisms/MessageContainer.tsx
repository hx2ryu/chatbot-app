import React, { useMemo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { DatePresenter, Message } from '../molecules';
import { Dialogue } from '@/store/dialogue/types';

type Props = {
  data: Dialogue;
  newDateStr: string | undefined;
};
const MessageContainer: React.FC<Props> = ({ data, newDateStr }) => {
  const { sender, messages, timestamp } = data;
  const { containerStyle, messagesWrapperStyle } = useMemo(() => {
    return {
      containerStyle: {
        justifyContent: sender === 'bot' ? 'flex-start' : 'flex-end',
      } as ViewStyle,
      messagesWrapperStyle: {
        alignItems: sender === 'bot' ? 'flex-start' : 'flex-end',
      } as ViewStyle,
    };
  }, [sender]);

  return (
    <View>
      {newDateStr && <DatePresenter data={newDateStr} />}
      <View style={[styles.containerStyle, containerStyle]}>
        <View style={[styles.messageWrapperStyle, messagesWrapperStyle]}>
          {messages.map((message, index) => (
            <Message
              sender={sender}
              message={message}
              key={index}
              timestamp={timestamp}
              timeVisible={index === messages.length - 1}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default MessageContainer;
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  messageWrapperStyle: {
    width: '80%',
    justifyContent: 'flex-start',
  },
});
