import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ChatPage } from '@/components/pages';

const App = () => {
  return (
    <SafeAreaProvider>
      <ChatPage />
    </SafeAreaProvider>
  );
};

export default App;
