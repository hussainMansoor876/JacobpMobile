import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import CustomDrawer from './navigation/AppNavigator'
import Contacts from './Screens/Contacts/Contacts'
import CalendarScreen from './Screens/CalendarMeeting'
import Login from './Screens/Login'
import { screensEnabled } from 'react-native-screens';

screensEnabled();

import SplashScreen from 'react-native-splash-screen'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide()
    console.log(this.props)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store} >
          <Login />
        </Provider>
      </View>
    );
  }
}

export default App;
