import * as Screen from '../Screens'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

const StackNavigator = createStackNavigator({
    Login: {
        screen: Screen.Login
    },
    Signup: {
        screen: Screen.Signup
    },
    OnBoardSlideOne: {
        screen: Screen.OnBoardSlideOne
    },
    OnBoardSlideTwo: {
        screen: Screen.OnBoardSlideTwo
    }
},
    {
        initialRouteName: "OnBoardSlideOne",
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)



const StackNavigatorApp = createAppContainer(StackNavigator)



export default StackNavigatorApp;