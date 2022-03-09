import React from 'react';
import { useGetSafeAreaStyle } from '@/hooks';
import { StyleSheet, View } from 'react-native';
import { ChattingRoom, MessageSender } from '../components/organisms';
import { COLORS } from '@/theme';

const ChatPage: React.FC = () => {
  const { verticalPaddingStyle } = useGetSafeAreaStyle();

  return (
    <View style={[styles.root, verticalPaddingStyle]}>
      <ChattingRoom />
      <MessageSender />
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
});
