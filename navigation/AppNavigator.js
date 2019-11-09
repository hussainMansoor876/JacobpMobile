import * as Screen from '../Screens'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import Sidebar from '../Components/Sidebar'
// import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
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

// const CustomDrawerComponent = (props) => (
//     <SafeAreaView style={{ flex: 1 }}>
//         <DrawerItems {...props} />
//     </SafeAreaView>
// )


const Drawer = createDrawerNavigator(
    {
        Home: { screen: Screen.Home },
        Chat: { screen: Screen.Signup },
        Profile: { screen: Screen.Login }
    },
    {
        initialRouteName: "Profile",
        drawerType: 'back',
        drawerWidth: 230,
        contentOptions: {
            activeTintColor: '#e91e63',
        },
        contentComponent: props => <Sidebar {...props} />
    }
);

// const DrawerNavigator = createDrawerNavigator({
//     Home: {
//         screen: Screen.Login
//     },
//     Services: {
//         screen: Screen.Login
//     },
//     Requests: {
//         screen: Screen.Signup
//     },
//     Inbox: {
//         screen: Screen.Login
//     },
//     Chat: {
//         screen: Screen.Home
//     }
// }, {
//     drawerWidth: 230,
//     drawerType: 'back'
// })



// const StackNavigatorApp = createAppContainer(StackNavigator)
const DrawerNavigatorApp = createAppContainer(Drawer)



export default DrawerNavigatorApp;