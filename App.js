import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import AppIntro from './Screens/AppIntro'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store} >
        <View style={{ flex: 1 }}>
         <AppIntro />
        </View>
      </Provider>
    );
  }
}

export default App;
