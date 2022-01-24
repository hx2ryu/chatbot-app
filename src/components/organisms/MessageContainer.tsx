import React, { useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import { DatePresenter, Message } from '../molecules';
import { Dialogue } from '@/lib/types/chat';

type Props = {
  data: Dialogue;
  newDateStr: string | undefined;
};
const MessageContainer: React.FC<Props> = ({ data, newDateStr }) => {
  const { sender, messages, timestamp } = data;
  const { containerStyle, messagesWrapperStyle } = useMemo(() => {
    return {
      containerStyle: {
        flexDirection: 'row',
        justifyContent: sender === 'bot' ? 'flex-start' : 'flex-end',
        marginBottom: 10,
      } as ViewStyle,
      messagesWrapperStyle: {
        width: '80%',
        justifyContent: 'flex-start',
        alignItems: sender === 'bot' ? 'flex-start' : 'flex-end',
      } as ViewStyle,
    };
  }, [sender]);

  return (
    <View>
      {newDateStr && <DatePresenter data={newDateStr} />}
      <View style={containerStyle}>
        <View style={messagesWrapperStyle}>
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
