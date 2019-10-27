import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store} >
        <View>
          <Text>Hello JacobpMobile</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
