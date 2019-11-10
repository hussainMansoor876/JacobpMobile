import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native'

const { width, height } = Dimensions.get('window')

export default class ChatList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            on: false,
            label: "Dark Mode"
        }
    }


    render() {
        const { on } = this.state
        return (
            <Container>
                <Header style={{ backgroundColor: '#fff' }}>
                    <Body style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image
                            source={require('../../assets/images/left.png')}
                        />
                        <Text style={{ fontSize: 24, marginLeft: -20, textAlign: 'center' }}>Messages</Text>
                        <ToggleSwitch
                            isOn={on}
                            onColor="rgba(0,0,0,0.5)"
                            offColor="rgba(0,0,0,0.1)"
                            // label="Switch to Dark Mode"
                            // labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => this.setState({ on: isOn })}
                        />
                    </Body>
                </Header>
                <Content>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}