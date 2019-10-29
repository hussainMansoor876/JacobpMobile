import React from 'react';
import { View, Dimensions, Text, ScrollView } from 'react-native';

class OnBoardSlideTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height
    }
  }

  render() {
    const { screenHeight } = this.state
    return (
          <View style={{ height: screenHeight / 4, marginLeft: 30, marginRight: 20 }}>
          </View>
    );
  }
}

export default OnBoardSlideTwo;
