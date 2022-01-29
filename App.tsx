import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ChatPage } from '@/screens';
import { Provider } from 'react-redux';
import store from '@/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ChatPage />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
