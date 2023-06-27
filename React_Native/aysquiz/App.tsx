import React, { useEffect } from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from '@/store';
import { StorageService } from '@/utils/storage';

const App = () => {

  useEffect(() => {
    // KULLANMA
    / StorageService.clearAll(); /
    // KULLANMA
  }, []);


  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;