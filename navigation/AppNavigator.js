import * as Screen from '../Screens'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

const StackNavigator = createStackNavigator({
    Login: {
        screen: Screen.Login
    },
    Signup: {
        screen: Screen.Signup
    }
},
    {
        initialRouteName: "Login",
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)



const StackNavigatorApp = createAppContainer(StackNavigator)



export default StackNavigatorApp;