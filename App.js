// import React from 'react';
// import { View, Text } from 'react-native';
// import { Provider } from 'react-redux';
// import store from './Redux/store';
// import Navigator from './navigation/AppNavigator'
// import CalendarMeeting from './Screens/CalendarMeeting'
// import NewMeeting from './Screens/Meeting/Falcon'

// class App extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <Provider store={store} >
//         <View style={{ flex: 1 }}>
//           <NewMeeting />
//         </View>
//       </Provider>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import HomeScreen from "./navigation/AppNavigator";
import SplashScreen from 'react-native-splash-screen'
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }


  componentDidMount() {
    SplashScreen.hide();
  }


  render() {
    return <HomeScreen />
  }
}