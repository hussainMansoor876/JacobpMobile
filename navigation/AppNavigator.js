import * as Screen from '../Screens'
import React, { Component } from 'react'
import { View, StatusBar, TouchableOpacity, Text } from 'react-native';
import { createAppContainer, createNavigator, StackRouter, addNavigationHelpers, createNavigationContainer } from 'react-navigation';
import ScalingDrawer from 'react-native-scaling-drawer';
// import { createDrawerNavigator } from 'react-navigation-drawer'
import SideBar from '../Screens/SideBar/SideBar'
import { connect } from 'react-redux';
// import MainSideBar from '../Screens/SideBar/MainSiderBar'
import FacebookChatScreen from '../Screens/FacebookChat/ChatList'
import IMessageChatScreen from '../Screens/IMessageChat/ChatList'
import InstagramChatScreen from '../Screens/InstaGramChat/ChatList'
import TeamChatScreen from '../Screens/TeamChat/ChatList'
import TwitterChatScreen from '../Screens/TwitterChat/ChatList'
import WebsiteChatScreen from '../Screens/WebsiteChat/ChatList'
import WhatsAppChatScreen from '../Screens/WhatsAppChat/ChatList'
import { mainSidebar } from '../Redux/actions/authActions'



// const Drawer = createDrawerNavigator(
//     {
//         Schedule: { screen: Screen.Home },
//         Day: { screen: Screen.CalendarMeeting },
//         day3: { screen: Screen.Falcon },
//         Week: { screen: Screen.Login },
//         Month: { screen: Screen.Signup },
//         Invitation: { screen: Screen.NewMeeting },
//         Events: { screen: Screen.Home },
//         Birthdays: { screen: Screen.Home },
//         Holidays: { screen: Screen.Home },
//         NHFab: { screen: Screen.Home },
//         NHForm: { screen: Screen.Home },
//         NHIcon: { screen: Screen.Home },
//         NHLayout: { screen: Screen.Home },
//         NHList: { screen: Screen.Home },
//         ListSwipe: { screen: Screen.Home },
//         NHRadio: { screen: Screen.Home },
//         NHSearchbar: { screen: Screen.Home },
//         NHSpinner: { screen: Screen.Home },
//         NHPicker: { screen: Screen.Home },
//         NHTab: { screen: Screen.Home },
//         NHThumbnail: { screen: Screen.Home },
//         NHTypography: { screen: Screen.Home },
//         Segment: { screen: Screen.Home },
//         NHToast: { screen: Screen.Home },
//         Actionsheet: { screen: Screen.Home },
//         NHAccordion: { screen: Screen.Home },
//         NHDatePicker: { screen: Screen.Home },
//         Facebook: { screen: FacebookChatScreen },
//         IMessage: { screen: IMessageChatScreen },
//         Instagram: { screen: InstagramChatScreen },
//         Team: { screen: TeamChatScreen },
//         Twitter: { screen: TwitterChatScreen },
//         Website: { screen: WebsiteChatScreen },
//         WhatsApp: { screen: WhatsAppChatScreen }
//     },
//     {
//         initialRouteName: "Schedule",
//         drawerType: 'slide',
//         hideStatusBar: true,
//         statusBarAnimation: true,
//         contentOptions: {
//             activeTintColor: "#e91e63"
//         },
//         contentComponent: props => <SideBar {...props} />
//     }
// );

// const MainDrawer = createDrawerNavigator(
//     {
//         Facebook: { screen: FacebookChatScreen },
//         IMessage: { screen: IMessageChatScreen },
//         Instagram: { screen: InstagramChatScreen },
//         Team: { screen: TeamChatScreen },
//         Twitter: { screen: TwitterChatScreen },
//         Website: { screen: WebsiteChatScreen },
//         WhatsApp: { screen: WhatsAppChatScreen }
//     },
//     {
//         initialRouteName: "Facebook",
//         contentOptions: {
//             activeTintColor: "#e91e63"
//         },
//         contentComponent: props => <MainSideBar {...props} />
//     }
// );



// const DrawerNavigatorApp = createAppContainer(Drawer)
// const MainDrawerNavigatorApp = createAppContainer(Drawer)
// export {
//     // DrawerNavigatorApp,
//     MainDrawerNavigatorApp
// };



let defaultScalingDrawerConfig = {
    scalingFactor: 0.75,
    minimizeFactor: 0.6,
    swipeOffset: 20
};

class CustomDrawerView extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        /** Active Drawer Swipe **/
        if (nextProps.navigation.state.index === 0)
            this._drawer.blockSwipeAbleDrawer(false);

        if (nextProps.navigation.state.index === 0 && this.props.navigation.state.index === 0) {
            this._drawer.blockSwipeAbleDrawer(false);
            this._drawer.close();
        }

        /** Block Drawer Swipe **/
        if (nextProps.navigation.state.index > 0) {
            this._drawer.blockSwipeAbleDrawer(true);
        }
    }

    setDynamicDrawerValue = (type, value) => {
        defaultScalingDrawerConfig[type] = value;
        /** forceUpdate show drawer dynamic scaling example **/
        this.forceUpdate();
    };

    componentDidMount() {
        console.log('App', this.props)
    }

    render() {
        const { routes, index } = this.props.navigation.state;
        const ActiveScreen = this.props.router.getComponentForState(this.props.navigation.state);

        return (
            <ScalingDrawer
                ref={ref => this._drawer = ref}
                content={<SideBar {...this.props} navigation={addNavigationHelpers({
                    ...this.props.navigation,
                    state: routes[index],
                    openDrawer: () => this._drawer.open(),
                    closeDrawer: () => this._drawer.close()
                })} />}
                {...defaultScalingDrawerConfig}
                onClose={() => this.props.mainSidebar(false)}
                onOpen={() => this.props.mainSidebar(false)}
            >
                <ActiveScreen
                    navigation={addNavigationHelpers({
                        ...this.props.navigation,
                        state: routes[index],
                        openDrawer: () => this._drawer.open(),
                        closeDrawer: () => this._drawer.close()
                    })}
                    style={{ backgroundColor: 'black' }}
                    dynamicDrawerValue={(type, val) => this.setDynamicDrawerValue(type, val)}
                />
            </ScalingDrawer>
        )
    }
}

const AppNavigator = StackRouter(
    {
        Schedule: { screen: (props) => <Screen.Home {...props} /> },
        Day: { screen: (props) => <Screen.CalendarMeeting {...props} /> },
        day3: { screen: (props) => <Screen.Falcon {...props} /> },
        Week: { screen: (props) => <Screen.Login /> },
        Month: { screen: (props) => <Screen.Signup /> },
        Invitation: { screen: (props) => <Screen.NewMeeting /> },
        Events: { screen: (props) => <Screen.Home {...props} /> },
        Birthdays: { screen: (props) => <Screen.Home {...props} /> },
        Holidays: { screen: (props) => <Screen.Home {...props} /> },
        NHFab: { screen: () => <Screen.Home /> },
        NHForm: { screen: () => <Screen.Home /> },
        NHIcon: { screen: () => <Screen.Home /> },
        NHLayout: { screen: () => <Screen.Home /> },
        NHList: { screen: () => <Screen.Home /> },
        ListSwipe: { screen: () => <Screen.Home /> },
        NHRadio: { screen: () => <Screen.Home /> },
        NHSearchbar: { screen: () => <Screen.Home /> },
        NHSpinner: { screen: () => <Screen.Home /> },
        NHPicker: { screen: () => <Screen.Home /> },
        NHTab: { screen: () => <Screen.Home /> },
        NHThumbnail: { screen: () => <Screen.Home /> },
        NHTypography: { screen: () => <Screen.Home /> },
        Segment: { screen: () => <Screen.Home /> },
        NHToast: { screen: () => <Screen.Home /> },
        Actionsheet: { screen: () => <Screen.Home /> },
        NHAccordion: { screen: () => <Screen.Home /> },
        NHDatePicker: { screen: () => <Screen.Home /> },
        Facebook: { screen: (props) => <FacebookChatScreen {...props} /> },
        IMessage: { screen: (props) => <IMessageChatScreen {...props} /> },
        Instagram: { screen: (props) => <InstagramChatScreen {...props} /> },
        Team: { screen: (props) => <TeamChatScreen {...props} /> },
        Twitter: { screen: (props) => <TwitterChatScreen {...props} /> },
        Website: { screen: (props) => <WebsiteChatScreen {...props} /> },
        WhatsApp: { screen: (props) => <WhatsAppChatScreen {...props} /> }
    },
    {
        initialRouteName: "Schedule",
        drawerType: 'slide',
        hideStatusBar: true,
        statusBarAnimation: true,
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

const CustomDrawer = createNavigationContainer(createNavigator(AppNavigator)(CustomDrawerView));

const mapStateToProps = (state) => {
    // console.log("mapToState", state.authReducer)
    return {
        user: "state.authReducer.user",
        // main: state.authReducer.main
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mainSidebar: (main) => dispatch(mainSidebar(main))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
