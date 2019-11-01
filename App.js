import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Navigator from './navigation/AppNavigator'
import CalendarMeeting from './Screens/CalendarMeeting'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store} >
        <View style={{ flex: 1 }}>
          <CalendarMeeting />
        </View>
      </Provider>
    );
  }
}

export default App;
