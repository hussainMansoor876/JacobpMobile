import React, { Component } from "react";
import { Image, TouchableOpacity, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { DrawerActions } from 'react-navigation-drawer';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Item,
  Input
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
                {/* <ReactIcons
                onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())}
                containerStyle={{ padding: 15 }}
                name="x"
                color='#fff'
                type="feather"
              /> */}
              </View>
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
                            color: '#fff'
                          }}>
                            {v.name.toLocaleUpperCase()}
                          </Text>
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
