import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { Splash } from './Screens'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store} >
        <View>
          <Splash />
        </View>
      </Provider>
    );
  }
}
import { from } from 'rxjs';

export default App;
