import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Navigator from './navigation/AppNavigator'
import { screensEnabled } from 'react-native-screens';
import Chat from './Screens/InstaGramChat/ChatList'

screensEnabled();

import SplashScreen from 'react-native-splash-screen'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store} >
          <Chat />
        </Provider>
      </View>
    );
  }
}

export default App;
