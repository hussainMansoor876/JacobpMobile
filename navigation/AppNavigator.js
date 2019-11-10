import * as Screen from '../Screens'
import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import SideBar from '../Screens/SideBar/SideBar'


const Drawer = createDrawerNavigator(
    {
        Home: { screen: Screen.Home },
        Anatomy: { screen: Screen.CalendarMeeting },
        Header: { screen: Screen.Falcon },
        Footer: { screen: Screen.Login },
        NHBadge: { screen: Screen.Signup },
        NHButton: { screen: Screen.NewMeeting },
        NHCard: { screen: Screen.Home },
        NHCheckbox: { screen: Screen.Home },
        NHDeckSwiper: { screen: Screen.Home },
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
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);



const DrawerNavigatorApp = createAppContainer(Drawer)



export default DrawerNavigatorApp;