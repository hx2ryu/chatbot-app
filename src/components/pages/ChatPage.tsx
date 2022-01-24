import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ChatPage: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text>CHat</Text>
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
