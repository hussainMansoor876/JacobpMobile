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

const AnimatedIcon = Animatable.createAnimatableComponent(FontIcon)

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
          bg: "#53A737",
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
      ]
    }
  }

  render() {
    const { listData } = this.state
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
                onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())}
                containerStyle={{ padding: 15 }}
                name="x"
                type="feather"
              />
            </View>
            <Image source={drawerCover} style={styles.drawerCover} />
            <Text style={{ marginLeft: 22, fontSize: 20 }}>Chats</Text>
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
                        <AnimatedIcon
                          name={v.icon}
                          color={v.bg}
                          size={22}
                          style={styles.icon}
                        />
                        <Text style={styles.text}>
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
  console.log("mapToState", state.authReducer)
  return {
    user: "state.authReducer.user"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(loginUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainSideBar)
