import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import CustomDrawer from './navigation/AppNavigator'
import Contacts from './Contacts/Contacts'
import { screensEnabled } from 'react-native-screens';

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
          <Contacts />
        </Provider>
      </View>
    );
  }
}

export default App;
