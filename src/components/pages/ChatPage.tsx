import React from 'react';
import { useGetSafeAreaStyle } from '@/hooks';
import { StyleSheet, View } from 'react-native';
import { ChattingRoom } from '../organisms';

const ChatPage: React.FC = () => {
  const { topSafeAreaStyle } = useGetSafeAreaStyle();

  return (
    <View style={[styles.root, topSafeAreaStyle]}>
      <ChattingRoom />
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
