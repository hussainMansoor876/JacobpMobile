import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Navigator from './navigation/AppNavigator'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store} >
        <View style={{ flex: 1 }}>
         <Navigator />
        </View>
      </Provider>
    );
  }
}

export default App;
