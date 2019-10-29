// import React from 'react';
// import { View, Dimensions, Text, StyleSheet, ImageBackground, Image } from 'react-native';
// import SplashScreen from 'react-native-splash-screen'

// class OnBoardSlideOne extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       screenWidth: Dimensions.get('window').width,
//       screenHeight: Dimensions.get('window').height
//     }
//   }

//   componentDidMount() {
//     SplashScreen.hide();
//   }

//   render() {
//     const { screenHeight, screenWidth } = this.state
//     return (
//       <ImageBackground
//         source={require('../assets/images/background.png')}
//         style={{ height: screenHeight, width: screenWidth }}>
//         <View style={{ height: 30, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 30, marginRight: 30 }}>
//           <Text style={{ fontSize: 18, fontFamily: 'Montserrat', color: '#FFFFFF' }}>Skip intro</Text>
//         </View>
//         <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
//           <Image
//             source={require('../assets/images/stack.png')}
//             style={{ margin: 5, height: screenHeight / 2.3, width: screenHeight / 2.3, resizeMode: 'contain' }}
//           />
//           <Text style={{ color: '#FFFFFF', fontSize: 30 }}>Get to know <Text style={{ fontWeight: 'bold' }}>Hub</Text>
//           </Text>
//           <Text style={{ marginTop: 20, marginRight: 50, marginLeft: 50, color: '#FFFFFF', fontSize: 18, fontFamily: 'Montserrat' }}>Today is the day you graduate from unorganized business management</Text>
//         </View>
//       </ImageBackground>
//     );
//   }
// }

// // Later on in your styles..
// var styles = StyleSheet.create({
//   linearGradient: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 5
//   },
//   buttonText: {
//     fontSize: 18,
//     fontFamily: 'Gill Sans',
//     textAlign: 'center',
//     margin: 10,
//     color: '#ffffff',
//     backgroundColor: 'transparent',
//   },
// });

// export default OnBoardSlideOne;


import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import SplashScreen from 'react-native-splash-screen'

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'Quick setup, good defaults',
    text:
      'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
    icon: 'ios-images-outline',
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 'somethun1',
    title: 'Super customizable',
    text:
      'The component is also super customizable, so you can adapt it to cover your needs and wants.',
    icon: 'ios-options-outline',
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'No need to buy me beer',
    text: 'Usage is all free',
    icon: 'ios-beer-outline',
    colors: ['#29ABE2', '#4F00BC'],
  },
];

export default class App extends React.Component {
  _renderItem = ({ item, dimensions }) => (
    <LinearGradient
      style={[
        styles.mainContent,
        dimensions,
      ]}
      colors={item.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </LinearGradient>
  );

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <AppIntroSlider slides={slides} renderItem={this._renderItem} bottomButton />;
  }
}