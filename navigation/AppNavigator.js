import * as Screen from '../Screens'
import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import SideBar from '../Screens/SideBar/SideBar'
import MainSideBar from '../Screens/SideBar/MainSiderBar'
import FacebookChatScreen from '../Screens/FacebookChat/ChatList'
import IMessageChatScreen from '../Screens/IMessageChat/ChatList'
import InstagramChatScreen from '../Screens/InstaGramChat/ChatList'
import TeamChatScreen from '../Screens/TeamChat/ChatList'
import TwitterChatScreen from '../Screens/TwitterChat/ChatList'
import WebsiteChatScreen from '../Screens/WebsiteChat/ChatList'
import WhatsAppChatScreen from '../Screens/WhatsAppChat/ChatList'



const Drawer = createDrawerNavigator(
    {
        Schedule: { screen: Screen.Home },
        Day: { screen: Screen.CalendarMeeting },
        day3: { screen: Screen.Falcon },
        Week: { screen: Screen.Login },
        Month: { screen: Screen.Signup },
        Invitation: { screen: Screen.NewMeeting },
        Events: { screen: Screen.Home },
        Birthdays: { screen: Screen.Home },
        Holidays: { screen: Screen.Home },
        NHFab: { screen: Screen.Home },
        NHForm: { screen: Screen.Home },
        NHIcon: { screen: Screen.Home },
        NHLayout: { screen: Screen.Home },
        NHList: { screen: Screen.Home },
        ListSwipe: { screen: Screen.Home },
        NHRadio: { screen: Screen.Home },
        NHSearchbar: { screen: Screen.Home },
        NHSpinner: { screen: Screen.Home },
        NHPicker: { screen: Screen.Home },
        NHTab: { screen: Screen.Home },
        NHThumbnail: { screen: Screen.Home },
        NHTypography: { screen: Screen.Home },
        Segment: { screen: Screen.Home },
        NHToast: { screen: Screen.Home },
        Actionsheet: { screen: Screen.Home },
        NHAccordion: { screen: Screen.Home },
        NHDatePicker: { screen: Screen.Home }
    },
    {
        initialRouteName: "Schedule",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

const MainDrawer = createDrawerNavigator(
    {
        Facebook: { screen: FacebookChatScreen },
        IMessage: { screen: IMessageChatScreen  },
        Instagram: { screen: InstagramChatScreen },
        Team: { screen: TeamChatScreen },
        Twitter: { screen: TwitterChatScreen },
        Website: { screen: WebsiteChatScreen },
        WhatsApp: { screen: WhatsAppChatScreen }
    },
    {
        initialRouteName: "Facebook",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <MainSideBar {...props} />
    }
);



const DrawerNavigatorApp = createAppContainer(Drawer)
const MainDrawerNavigatorApp = createAppContainer(MainDrawer)



export {
    DrawerNavigatorApp,
    MainDrawerNavigatorApp
};