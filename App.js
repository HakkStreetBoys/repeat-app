import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import { Header } from './src/components/common';
import ItemList from './src/components/ItemList';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: '#F8F2F2' }}>
          <Header headerText="Repeat" />
          <ItemList />
        </View>
      </Provider>
    );
  }
}
