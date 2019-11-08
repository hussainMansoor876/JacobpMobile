import * as Screen from '../Screens'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import SideBar from '../Screens/SideBar/SideBar'

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

const Drawer = createDrawerNavigator(
    {
      Home: { screen: Screen.HomeScreen },
      Chat: { screen: Screen.Signup },
      Profile: { screen: Screen.Login }
    },
    {
      contentComponent: props => <SideBar {...props} />
    }
  );



const StackNavigatorApp = createAppContainer(StackNavigator)
const DrawerNavigatorApp = createAppContainer(Drawer)



export default StackNavigatorApp;