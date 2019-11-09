import * as Screen from '../Screens'
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack'
// import { createDrawerNavigator } from 'react-navigation-drawer'
// import SideBar from '../Screens/SideBar/SideBar'

// const StackNavigator = createStackNavigator({
//     Login: {
//         screen: Screen.Login
//     },
//     Signup: {
//         screen: Screen.Signup
//     }
// },
//     {
//         initialRouteName: "Login",
//         headerMode: 'none',
//         // statusBarAnimation,
//         navigationOptions: {
//             headerVisible: false,
//         }
//     }
// )

// const Drawer = createDrawerNavigator(
//     {
//         Home: { screen: Screen.Home },
//         Chat: { screen: Screen.Signup },
//         Profile: { screen: Screen.Login }
//     },
//     {
//         initialRouteName: "Profile",
//         drawerType: 'back',
//         drawerWidth: 230,
//         contentOptions: {
//             activeTintColor: '#e91e63',
//         }
//         // contentComponent: props => <SideBar {...props} />
//     }
// );

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Screen.Login
    },
    Services: {
        screen: Screen.Login
    },
    Requests: {
        screen: Screen.Signup
    },
    Inbox: {
        screen: Screen.Login
    },
    Chat: {
        screen: Screen.Home
    }
},{
    drawerWidth: 230,
    drawerType: 'back'
})



// const StackNavigatorApp = createAppContainer(StackNavigator)
const DrawerNavigatorApp = createAppContainer(DrawerNavigator)



export default DrawerNavigatorApp;