import React from 'react';
import { useGetSafeAreaStyle } from '@/hooks';
import { StyleSheet, View } from 'react-native';
import { ChattingRoom, MessageSender } from '../organisms';

const ChatPage: React.FC = () => {
  const { verticalSafeAreaStyle, bottomSafeAreaStyle } = useGetSafeAreaStyle();

  return (
    <View style={[styles.root, verticalSafeAreaStyle]}>
      <ChattingRoom />
      <MessageSender style={bottomSafeAreaStyle} />
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
});
