import React, { Component } from "react";
import { Image, TouchableOpacity, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { DrawerActions } from 'react-navigation-drawer';
import { Icon as ReactIcons } from 'react-native-elements'
import { connect } from 'react-redux'
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
import * as Animatable from 'react-native-animatable';
import FontIcon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { loginUser } from '../../Redux/actions/authActions'

const AnimatedIcon = Animatable.createAnimatableComponent(FontIcon)
const AnimatedMaterial = Animatable.createAnimatableComponent(MaterialCommunityIcons)

const drawerCover = require("../../assets/images/illustration.png");


class MainSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      listData: [
        {
          name: "Facebook",
          route: "Facebook",
          icon: "facebook",
          bg: "#3b579d",
          image: require("../../assets/images/schedule.png")
        },
        {
          name: "IMessage",
          route: "IMessage",
          icon: "comment",
          bg: "#477EEA",
          types: "11",
          image: require('../../assets/images/day.png')

        },
        {
          name: "Instagram",
          route: "Instagram",
          icon: "instagram",
          bg: "#F0B601",
          types: "4",
          image: require('../../assets/images/day3.png')

        },
        {
          name: "Team",
          route: "Team",
          icon: "comments",
          bg: "#C5F442",
          types: "5",
          image: require('../../assets/images/week.png')

        },
        {
          name: "Twitter",
          route: "Twitter",
          icon: "twitter",
          bg: "#1c9deb",
          image: require('../../assets/images/minus.png')

        },
        {
          name: "Website",
          route: "Website",
          icon: "commenting",
          bg: "#4DCAE0",
          image: require('../../assets/images/minus.png')

        },
        {
          name: "WhatsApp",
          route: "WhatsApp",
          icon: "whatsapp",
          bg: "#3FBB25",
          types: "9",
          image: require('../../assets/images/minus.png')
        },
      ],
      applicationList: [
        {
          name: "Mail",
          route: "Facebook",
          icon: "gmail",
          bg: "#3b579d",
          image: require("../../assets/images/schedule.png")
        },
        {
          name: "Contacts",
          route: "Instagram",
          icon: "contacts",
          bg: "#F0B601",
          types: "4",
          image: require('../../assets/images/day3.png')

        },
        {
          name: "Calendar",
          route: "Team",
          icon: "calendar-text",
          bg: "#C5F442",
          types: "5",
          image: require('../../assets/images/week.png')

        },
        {
          name: "File Manager",
          route: "WhatsApp",
          icon: "file-document-edit",
          bg: "#3FBB25",
          types: "9",
          image: require('../../assets/images/minus.png')
        },
      ]
    }
  }

  render() {
    const { listData, applicationList } = this.state
    const { bool } = this.props
    console.log('bool', bool)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Content
            bounces={false}
            style={{ flex: 1, backgroundColor: bool ? '#142A3B' : '#fff', top: -1 }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ padding: 15, fontSize: 22, fontWeight: '700', color: bool ? '#fff' : 'black' }}>
                dash
                <Text style={{ fontSize: 22, fontWeight: '100', color: 'blue' }}>
                  forge
                </Text>
              </Text>
              <ReactIcons
                onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())}
                containerStyle={{ padding: 15 }}
                name="x"
                color={bool ? '#fff' : 'black'}
                type="feather"
              />
            </View>
            <Image source={drawerCover} style={styles.drawerCover} />
            <Text style={{ marginLeft: 22, fontSize: 20, color: bool ? '#fff' : 'black' }}>APPLICATIONS</Text>
            <List>
              {
                applicationList.map((v, i) => {
                  return (
                    <ListItem
                      button
                      noBorder
                      onPress={() => this.props.navigation.navigate(v.route)}
                      key={i}
                    >
                      <Left>
                        <AnimatedMaterial
                          name={v.icon}
                          color={v.bg}
                          size={22}
                          style={styles.icon}
                        />
                        <Text style={{
                          fontWeight: Platform.OS === "ios" ? "500" : "400",
                          fontSize: 16,
                          marginLeft: 20,
                          color: bool ? '#fff' : 'black'
                        }}>
                          {v.name}
                        </Text>
                      </Left>
                    </ListItem>
                  )
                })
              }
            </List>
            <Text style={{ marginLeft: 22, fontSize: 20, color: bool ? '#fff' : 'black' }}>CHATS</Text>
            <List>
              {
                listData.map((v, i) => {
                  return (
                    <ListItem
                      button
                      noBorder
                      onPress={() => this.props.navigation.navigate(v.route)}
                      key={i}
                    >
                      <Left>
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
                          color: bool ? '#fff' : 'black'
                        }}>
                          {v.name}
                        </Text>
                      </Left>
                    </ListItem>
                  )
                })
              }
            </List>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => {
  console.log("Main", state.authReducer)
  return {
    bool: state.authReducer.bool
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(loginUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainSideBar)
