import React, { Component } from "react";
import { Image, TouchableOpacity, View, SafeAreaView, ScrollView } from "react-native";
import { Icon as ReactIcons } from 'react-native-elements'
import MainSideBar from './MainSiderBar'
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Item,
  Input,
  CheckBox
} from "native-base";
import styles from "./style";
import FontIcon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient'
const AnimatedIcon = Animatable.createAnimatableComponent(FontIcon)

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
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      main: false,
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
      listDataSocial: [
        {
          name: "Contacts",
          route: "Instagram",
          icon: "wechat",
          bg: "#4DCAE0",
          types: "4",
        },
        {
          name: "Text Messages",
          route: "IMessage",
          icon: "comment",
          bg: "#477EEA",
          types: "11",
        },
        {
          name: "WhatsApp",
          route: "WhatsApp",
          icon: "whatsapp",
          bg: "#3FBB25",
          types: "9",
        },
        {
          name: "Facebook",
          route: "Facebook",
          icon: "facebook",
          bg: "#3b579d",
        },
        {
          name: "Instagram",
          route: "Instagram",
          icon: "instagram",
          bg: "#F0B601",
          types: "4",

        },
        {
          name: "Twitter",
          route: "Twitter",
          icon: "twitter",
          bg: "#1c9deb",
        },
        {
          name: "Website Chat",
          route: "Website",
          icon: "commenting",
          bg: "#4DCAE0",
        },
        {
          name: "Team Discussions",
          route: "Team",
          icon: "comments",
          bg: "#C5F442",
          types: "5",
        }
      ],
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
    const { listData, listBottom, main, listDataSocial } = this.state
    console.log('this.SideBar', this.props)
    if (main) {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Container>
            <Content
              bounces={false}
              style={{ flex: 1, top: -1, backgroundColor: '#6A5CFF' }}
            >
              <LinearGradient colors={['#9C6FFF', '#6A5CFF']}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                  <Item style={{ flex: 1, backgroundColor: '#9F7CFF', borderRadius: 50, paddingRight: 10, paddingLeft: 10 }}>
                    <Input placeholder="Type a message" placeholderTextColor="#fff" />
                    <AnimatedIcon
                      name='search'
                      color='#fff'
                      size={22}
                      style={styles.icon}
                    />
                  </Item>
                </View>
                <List>
                  {
                    listDataSocial.map((v, i) => {
                      return (
                        <ListItem
                          button
                          noBorder
                          onPress={() => this.props.navigation.navigate(v.route)}
                          key={i}
                        >
                          <Left>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                              <AnimatedIcon
                                name={v.icon}
                                color={v.bg}
                                size={22}
                                style={styles.icon}
                              />
                              <Text style={{
                                fontWeight: Platform.OS === "ios" ? "500" : "400",
                                fontSize: 16,
                                marginLeft: 20,
                                color: '#fff'
                              }}>
                                {v.name.toLocaleUpperCase()}
                              </Text>
                            </TouchableOpacity>
                          </Left>
                        </ListItem>
                      )
                    })
                  }
                </List>
              </LinearGradient>
            </Content>
          </Container>
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Content
            bounces={false}
            style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => this.setState({ main: true })}>
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require('../../assets/images/left.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Hello")}>
                <ReactIcons
                  containerStyle={{ padding: 15 }}
                  name="x"
                  type="feather"
                />
              </TouchableOpacity>
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
                      key={i}
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
