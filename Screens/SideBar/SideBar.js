import React, { Component } from "react";
import { Image, TouchableOpacity, View, SafeAreaView, ScrollView } from "react-native";
import { Icon as ReactIcons } from 'react-native-elements'
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  CheckBox
} from "native-base";
import styles from "./style";

const drawerCover = require("../../assets/images/illustration.png");
const drawerImage = require("../../assets/images/illustration.png");
const datas = [
  {
    name: "Schedule",
    route: "Schedule",
    icon: "phone-portrait",
    bg: "#C5F442",
    image: require("../../assets/images/schedule.png")
  },
  {
    name: "Day",
    route: "Day",
    icon: "arrow-up",
    bg: "#477EEA",
    types: "11",
    image: require('../../assets/images/day.png')

  },
  {
    name: "3 day",
    route: "day3",
    icon: "arrow-down",
    bg: "#DA4437",
    types: "4",
    image: require('../../assets/images/day3.png')

  },
  {
    name: "Week",
    route: "Week",
    icon: "repeat",
    bg: "#C5F442",
    types: "5",
    image: require('../../assets/images/week.png')

  },
  {
    name: "Month",
    route: "Month",
    icon: "easel",
    bg: "#C5F442",
    image: require('../../assets/images/minus.png')

  },
  {
    name: "Invitation",
    route: "Invitation",
    icon: "notifications",
    bg: "#4DCAE0",
    image: require('../../assets/images/minus.png')

  },
  {
    name: "Events",
    route: "Events",
    icon: "radio-button-off",
    bg: "#1EBC7C",
    types: "9",
    image: require('../../assets/images/minus.png')
  },
  {
    name: "Birthdays",
    route: "Birthdays",
    icon: "keypad",
    bg: "#B89EF5",
    types: "8",
    image: require('../../assets/images/minus.png')
  },
  {
    name: "Holidays",
    route: "Holidays",
    icon: "checkmark-circle",
    bg: "#EB6B23",
    image: require('../../assets/images/minus.png')
  },
  // {
  //   name: "Date Picker",
  //   route: "NHDatePicker",
  //   icon: "calendar",
  //   bg: "#EB6B23",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Deck Swiper",
  //   route: "NHDeckSwiper",
  //   icon: "swap",
  //   bg: "#3591FA",
  //   types: "2",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Fab",
  //   route: "NHFab",
  //   icon: "help-buoy",
  //   bg: "#EF6092",
  //   types: "2",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Form & Inputs",
  //   route: "NHForm",
  //   icon: "call",
  //   bg: "#EFB406",
  //   types: "12",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Icon",
  //   route: "NHIcon",
  //   icon: "information-circle",
  //   bg: "#bfe9ea",
  //   types: "4",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Layout",
  //   route: "NHLayout",
  //   icon: "grid",
  //   bg: "#9F897C",
  //   types: "5",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "List",
  //   route: "NHList",
  //   icon: "lock",
  //   bg: "#5DCEE2",
  //   types: "8",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "ListSwipe",
  //   route: "ListSwipe",
  //   icon: "code-working",
  //   bg: "#C5F442",
  //   types: "3",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Picker",
  //   route: "NHPicker",
  //   icon: "arrow-dropdown",
  //   bg: "#F50C75",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Radio",
  //   route: "NHRadio",
  //   icon: "radio-button-on",
  //   bg: "#6FEA90",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "SearchBar",
  //   route: "NHSearchbar",
  //   icon: "search",
  //   bg: "#29783B",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Segment",
  //   route: "Segment",
  //   icon: "menu",
  //   bg: "#0A2C6B",
  //   types: "3",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Spinner",
  //   route: "NHSpinner",
  //   icon: "navigate",
  //   bg: "#BE6F50",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Tabs",
  //   route: "NHTab",
  //   icon: "home",
  //   bg: "#AB6AED",
  //   types: "3",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Thumbnail",
  //   route: "NHThumbnail",
  //   icon: "image",
  //   bg: "#cc0000",
  //   types: "2",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Toast",
  //   route: "NHToast",
  //   icon: "albums",
  //   bg: "#C5F442",
  //   types: "6",
  //   image: require('../../assets/images/minus.png')
  // },
  // {
  //   name: "Typography",
  //   route: "NHTypography",
  //   icon: "paper",
  //   bg: "#48525D",
  //   image: require('../../assets/images/minus.png')
  // }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      listData: [
        {
          name: "Schedule",
          route: "Schedule",
          icon: "phone-portrait",
          bg: "#C5F442",
          image: require("../../assets/images/schedule.png")
        },
        {
          name: "Day",
          route: "Day",
          icon: "arrow-up",
          bg: "#477EEA",
          types: "11",
          image: require('../../assets/images/day.png')

        },
        {
          name: "3 day",
          route: "day3",
          icon: "arrow-down",
          bg: "#DA4437",
          types: "4",
          image: require('../../assets/images/day3.png')

        },
        {
          name: "Week",
          route: "Week",
          icon: "repeat",
          bg: "#C5F442",
          types: "5",
          image: require('../../assets/images/week.png')

        },
        {
          name: "Month",
          route: "Month",
          icon: "easel",
          bg: "#C5F442",
          image: require('../../assets/images/minus.png')

        },
        {
          name: "Invitation",
          route: "Invitation",
          icon: "notifications",
          bg: "#4DCAE0",
          image: require('../../assets/images/minus.png')

        }],
      listBottom: [
        {
          name: "Events",
          route: "Events",
          icon: "radio-button-off",
          bg: "#1EBC7C",
          types: "9",
          image: require('../../assets/images/minus.png')
        },
        {
          name: "Birthdays",
          route: "Birthdays",
          icon: "keypad",
          bg: "#B89EF5",
          types: "8",
          image: require('../../assets/images/minus.png')
        },
        {
          name: "Holidays",
          route: "Holidays",
          icon: "checkmark-circle",
          bg: "#EB6B23",
          image: require('../../assets/images/minus.png')
        }
      ]
    }
  }

  render() {
    const { listData, listBottom } = this.state
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Content
            bounces={false}
            style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity>
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require('../../assets/images/left.png')}
                />
              </TouchableOpacity>
              <ReactIcons
                containerStyle={{ padding: 15 }}
                name="x"
                type="feather"
              />
            </View>
            <Image source={drawerCover} style={styles.drawerCover} />
            {/* <Image square style={styles.drawerImage} source={drawerImage} /> */}
            <Text style={{ textAlign: 'center' }}>View</Text>
            <List>
              {
                listData.map((v, i) => {
                  return (
                    <ListItem
                      button
                      noBorder
                      onPress={() => this.props.navigation.navigate(v.route)}
                    >
                      <Left>
                        {/* <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  /> */}
                        <Image
                          style={{ height: 20, width: 20 }}
                          source={v.image}
                        />
                        <Text style={styles.text}>
                          {v.name}
                        </Text>
                      </Left>
                      {/* {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>} */}
                    </ListItem>
                  )
                })
              }
            </List>
            <Text style={{ textAlign: 'center' }}>Show</Text>
            <List>
              {listBottom.map((v, i) => {
                return (
                  <ListItem
                    button
                    noBorder
                    onPress={() => this.props.navigation.navigate(v.route)}
                  >
                    <Left>
                      <CheckBox style={{ marginLeft: -8, marginRight: 8, borderRadius: 8 }} checked={false} />
                      <Text style={styles.text}>
                        {v.name}
                      </Text>
                    </Left>
                  </ListItem>
                )
              })}
            </List>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}

export default SideBar;
