import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ChatPage } from '@/screens';

const App = () => {
  return (
    <SafeAreaProvider>
      <ChatPage />
    </SafeAreaProvider>
  );
};

export default App;
