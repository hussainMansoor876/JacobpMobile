import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { Login } from './Screens'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store} >
        <View style={{ flex: 1 }}>
          <Login />
        </View>
      </Provider>
    );
  }
}

export default App;
