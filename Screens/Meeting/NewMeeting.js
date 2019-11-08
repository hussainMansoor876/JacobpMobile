import React from 'react';
import { View, Dimensions, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, Platform, SafeAreaView, StyleSheet, Animated, Easing } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Form, Item, Label, Input, Textarea, List, ListItem, Content, Body, Right, Left, Thumbnail, Container, Button } from 'native-base'
import { connect } from 'react-redux';
import { Icon, SearchBar } from 'react-native-elements'
import Moment from 'moment'
// import TouchableScale from 'react-native-touchable-scale';
import Modal from "react-native-modal";
import { Calendar } from 'react-native-calendars';

const { height, width } = Dimensions.get('window')


class NewMeeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: width,
            screenHeight: new Animated.Value(height),
            screenOpacity: new Animated.Value(1),
            items: {},
            today: 'Today',
            currentTime: Moment(new Date()).format("h:mm A"),
            futureDate: '',
            isDateTimePickerVisible: new Animated.Value(0),
            calendarHeight: new Animated.Value(0),
            calendarOpacity: new Animated.Value(0),
            inviteHeight: new Animated.Value(0),
            inviteOpacity: new Animated.Value(0),
            showHeader: false,
            invite: false,
            isModalVisible: false,
            list: [
                {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President',
                    add: true
                },
                {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman',
                    add: false
                },
                {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman',
                    add: true
                },
                {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman',
                    add: false
                },
                {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President',
                    add: true
                }
            ]
        }
    }

    UNSAFE_componentWillMount() {
        var today = new Date();
        var hours = today.getHours()
        var am = true
        var minutes = today.getMinutes()
        var time = today.toLocaleDateString()
        if (minutes >= 30) {
            minutes = minutes - 30
            hours = hours + 1
        }
        if (hours >= 12) {
            am = false
            hours = hours - 12
        }
        if (hours == 0) {
            hours = 12
            am = true
        }
        var time = hours + ":" + minutes
        if (am) {
            if (minutes < 10) {
                minutes = "0" + String(minutes)
            }
            time = hours + ":" + minutes + " AM"
        }
        else {
            if (minutes < 10) {
                minutes = "0" + String(minutes)
            }
            time = hours + ":" + minutes + " PM"
        }
        this.setState({ futureDate: time })
    }

    showDateTimePicker = () => {
        Animated.timing(this.state.screenHeight, {
            toValue: 0,
            duration: 500,
        }).start()
        Animated.timing(this.state.screenOpacity, {
            toValue: 0,
            duration: 500
        }).start()
        Animated.timing(this.state.calendarHeight, {
            // delay: 500,
            toValue: height,
            duration: 500,
        }).start()
        Animated.timing(this.state.calendarOpacity, {
            // delay: 1000,
            toValue: 1,
            duration: 500
        }).start()

        setTimeout(() => {
            this.setState({ showHeader: true })
        }, 200)
    };


    showInvite = () => {
        Animated.timing(this.state.screenHeight, {
            toValue: 0,
            duration: 500,
        }).start()
        Animated.timing(this.state.screenOpacity, {
            toValue: 0,
            duration: 500
        }).start()
        Animated.timing(this.state.inviteHeight, {
            // delay: 500,
            toValue: height,
            duration: 500,
        }).start()
        Animated.timing(this.state.inviteOpacity, {
            // delay: 1000,
            toValue: 1,
            duration: 500
        }).start()

        setTimeout(() => {
            this.setState({ showHeader: true, invite: true })
        }, 200)
    };



    hideDateTimePicker = () => {
        Animated.timing(this.state.calendarHeight, {
            toValue: 0,
            duration: 500,
        }).start()
        Animated.timing(this.state.calendarOpacity, {
            toValue: 0,
            duration: 500
        }).start()
        Animated.timing(this.state.screenHeight, {
            // delay: 500,
            toValue: height,
            duration: 500
        }).start()
        Animated.timing(this.state.screenOpacity, {
            // delay: 1000,
            toValue: 1,
            duration: 500
        }).start()

        setTimeout(() => {
            this.setState({ showHeader: false, invite: false })
        }, 200)
    };

    hideDateTimePicker1 = () => {
        Animated.timing(this.state.inviteHeight, {
            toValue: 0,
            duration: 500,
        }).start()
        Animated.timing(this.state.inviteOpacity, {
            toValue: 0,
            duration: 500
        }).start()
        Animated.timing(this.state.screenHeight, {
            // delay: 500,
            toValue: height,
            duration: 500
        }).start()
        Animated.timing(this.state.screenOpacity, {
            // delay: 1000,
            toValue: 1,
            duration: 500
        }).start()

        setTimeout(() => {
            this.setState({ showHeader: false, invite: false })
        }, 200)
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    componentDidMount() {
        SplashScreen.hide()
    }

    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }

    updateDate(e) {
        console.log(e['dateString'])
        var obj = {}
        obj[e['dateString']] = { selected: true, selectedColor: '#7540EE' }

        this.setState({ items: obj })
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        const { today, currentTime, futureDate, calendarHeight, screenHeight, screenOpacity, calendarOpacity, showHeader, items, inviteHeight, inviteOpacity, invite, list } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Modal
                    animationIn="fadeInUp"
                    animationInTiming={500}
                    animationOut="fadeOutDown"
                    animationOutTiming={200}
                    isVisible={this.state.isModalVisible}
                    style={{ backgroundColor: 'white', margin: 0, marginTop: height / 6, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                >
                    <View style={{ paddingLeft: 20, flex: 1 }}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={this.toggleModal}
                                style={{
                                    paddingTop: 30,
                                    flexDirection: 'row'
                                }} >
                                <Icon
                                    name="angle-down"
                                    type="font-awesome"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 26
                                    }}
                                >F2F with Dawid Wozniak</Text>
                                <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 16 }}>Wednesday, 01/22/2020</Text>
                                <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 16 }}>12:00 AM — 1:00 PM</Text>
                            </View>
                            <View style={{ marginTop: 30 }}>
                                <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 14 }}>People invited</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    {list.map((v, i) => {
                                        return (
                                            <Image
                                                key={i}
                                                style={{ width: 50, height: 50, borderRadius: 50, margin: 5 }}
                                                source={{ uri: list[i].avatar_url }} />
                                        )
                                    })}
                                </View>
                                <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 14, marginTop: 20 }}>Type</Text>
                                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#D5DFF7', height: 30, alignItems: 'center', borderRadius: 15, width: '35%', marginTop: 10 }}>
                                    <Image
                                        style={{ marginRight: 10 }}
                                        source={require('../../assets/images/message.png')} />
                                    <Text style={{ color: '#2F61D5', fontSize: 16, fontWeight: '700' }}>Meeting</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 16 }}>Short description</Text>
                            <Text style={{ marginTop: 10, fontSize: 18 }}>
                                We’ll have small feedback session
                                and talk about your future objectives
                            </Text>
                            <TouchableOpacity
                                style={{ marginTop: 10, backgroundColor: '#d5dff7', padding: 3, paddingRight: 8, borderRadius: 20, paddingTop: 10, paddingBottom: 10, width: width / 2, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="check"
                                        color="#2F61D5"
                                        size={22} />
                                    <Text style={{ fontSize: 18, color: '#2F61D5', fontWeight: '700' }}>You’ve joined</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {!showHeader && !invite ? <View style={{ paddingTop: 20, paddingLeft: 20, flexDirection: 'row' }}>
                    <Icon
                        name="arrow-left"
                        size={40}
                        type="feather"
                    />
                </View> : showHeader && invite ? <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 10, height: height / 6, backgroundColor: '#d3d3df', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this.hideDateTimePicker1}>
                        <Icon
                            name="arrow-left"
                            size={40}
                            type="feather"
                            iconStyle={{ width: 200 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, fontWeight: '700', textAlign: 'center', paddingBottom: 10, width: '100%' }}>DashSync project kick-off</Text>
                </View> :
                        <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 10, height: height / 6, backgroundColor: '#d3d3df', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <TouchableOpacity activeOpacity={0.5} onPress={this.hideDateTimePicker}>
                                <Icon
                                    name="arrow-left"
                                    size={40}
                                    type="feather"
                                    iconStyle={{ width: 200 }}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 24, fontWeight: '700', textAlign: 'center', paddingBottom: 10, width: '100%' }}>DashSync project kick-off</Text>
                        </View>}
                <Animated.ScrollView>
                    <KeyboardAvoidingView
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        behavior={Platform.OS === "ios" ? "padding" : null}
                        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                        style={{ flex: 1 }}
                    >
                        <Animated.View style={{ height: screenHeight, opacity: screenOpacity }}>
                            <View>
                                <Form>
                                    <Item floatingLabel>
                                        <Label style={{ fontWeight: '600', fontSize: 22, margin: -8, paddingLeft: 20, opacity: 0.5 }}>Name Your Meeting</Label>
                                        <Input style={{ paddingLeft: 20 }} />
                                    </Item>
                                </Form>
                            </View>
                            <View style={{ paddingLeft: 30, marginTop: 20 }}>
                                <Text style={{ fontSize: 20, opacity: 0.6 }}>Invite People</Text>
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={this.showInvite}
                                        activeOpacity={0.5} style={{ borderColor: 'grey', borderStyle: 'dashed', borderWidth: 1, height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                                        <Icon
                                            name="add"
                                            iconStyle={{ fontSize: 32, opacity: 0.2 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Animated.View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 18, marginBottom: 10, opacity: 0.4 }}>Choose Date</Text>
                                    <TouchableOpacity activeOpacity={0.5} onPress={this.showDateTimePicker} style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 18, marginRight: 30 }}>{today}, {currentTime} --- {futureDate}</Text>
                                        <Icon
                                            name="angle-down"
                                            type="font-awesome"
                                        />
                                    </TouchableOpacity>
                                </Animated.View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ fontSize: 18, marginBottom: 10, opacity: 0.5 }}>Choose Meeting Type</Text>
                                    <View style={{ marginTop: 5, flexDirection: 'row', marginRight: 20 }}>
                                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#E9F9F0', height: 30, alignItems: 'center', borderRadius: 15, width: '48%', marginRight: 15 }}>
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require('../../assets/images/Bitmap1.png')} />
                                            <Text style={{ color: '#22D369', fontSize: 16, fontWeight: '700' }}>Project Meeting</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#D5DFF7', height: 30, alignItems: 'center', borderRadius: 15, width: '35%' }}>
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require('../../assets/images/message.png')} />
                                            <Text style={{ color: '#2F61D5', fontSize: 16, fontWeight: '700' }}>Meeting</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: 5, flexDirection: 'row', marginRight: 20 }}>
                                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE2DC', height: 30, alignItems: 'center', borderRadius: 15, marginRight: 15, width: '30%' }}>
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require('../../assets/images/webinar.png')} />
                                            <Text style={{ color: '#FF7052', fontSize: 16, fontWeight: '700' }}>Webinar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#E3D9FC', height: 30, alignItems: 'center', borderRadius: 15, marginRight: 15, width: '30%' }}>
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require('../../assets/images/status.png')} />
                                            <Text style={{ color: '#7540EE', fontSize: 16, fontWeight: '700' }}>Status</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#D8F0F8', height: 30, alignItems: 'center', borderRadius: 15, marginRight: 15, width: '30%' }}>
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require('../../assets/images/other.png')} />
                                            <Text style={{ color: '#3FB6DC', fontSize: 16, fontWeight: '700' }}>Other</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ marginTop: 20, marginRight: 20 }}>
                                    <Label style={{ marginLeft: 3 }}>Write short Description</Label>
                                    <Textarea rowSpan={4}
                                        style={{ borderWidth: 1, borderColor: 'white', borderBottomColor: 'rgba(0,0,0,0.3)', backgroundColor: 'rgba(0,0,0,0.009)' }}
                                        placeholder="Message..." />
                                    <TouchableOpacity
                                        onPress={this.toggleModal} >
                                        <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 18, fontWeight: 'bold', marginTop: 15, marginLeft: 30 }}>Schedule meeting</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Animated.View>
                    </KeyboardAvoidingView>
                </Animated.ScrollView>

                <Animated.View style={{ height: calendarHeight, opacity: calendarOpacity, backgroundColor: '#d3d3df' }}>
                    <View style={{ backgroundColor: 'white', height: height * 5 / 6, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                        <View style={{ flexDirection: 'row', paddingLeft: 20, justifyContent: 'space-between', paddingRight: 20, paddingTop: 10 }}>
                            <Text style={{ fontSize: 18, marginBottom: 10 }}>Choose Date</Text>
                            <TouchableOpacity onPress={this.hideDateTimePicker}>
                                <Icon
                                    name="angle-down"
                                    type="font-awesome"
                                />
                            </TouchableOpacity>
                        </View>
                        <Calendar
                            onDayPress={(e) => this.updateDate(e)}
                            minDate={new Date()}
                            markedDates={items}
                        />
                    </View>
                </Animated.View>

                <Animated.View style={{ height: inviteHeight, opacity: inviteOpacity, backgroundColor: '#d3d3df' }}>
                    <View style={{ backgroundColor: 'white', height: height, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                        <View style={{ flexDirection: 'row', paddingLeft: 20, justifyContent: 'space-between', paddingRight: 20, paddingTop: 10 }}>
                            <Text style={{ fontSize: 18, marginBottom: 10 }}>Invite people</Text>
                            <TouchableOpacity onPress={this.hideDateTimePicker1}>
                                <Icon
                                    name="angle-down"
                                    type="font-awesome"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                            <Item>
                                <Icon
                                    type="feather"
                                    color="rgba(0,0,0,0.2)"
                                    name="search"
                                />
                                <Input
                                    placeholder="Search by name"
                                    placeholderTextColor="rgba(0,0,0,0.1)"
                                />
                            </Item>
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <Text style={{ paddingLeft: 20 }}>Recent</Text>
                        </View>

                        <Container style={{ flex: 1, borderColor: 1, borderWidth: 1 }}>
                            <Content>
                                <List>
                                    {list.map((v, i) => {
                                        return (
                                            <ListItem avatar key={i} style={{ paddingTop: 2, paddingBottom: 2 }} noBorder={true}>
                                                <Left>
                                                    <Thumbnail source={{ uri: v.avatar_url }} />
                                                </Left>
                                                <Body>
                                                    <Text style={{ marginTop: 10 }}>{v.name}</Text>
                                                    <Text style={{ color: 'rgba(0,0,0,0.5)', marginTop: 5 }} note>{v.subtitle}</Text>
                                                </Body>
                                                <Right>
                                                    {v.add ? <TouchableOpacity
                                                        onPress={() => {
                                                            var l1 = list
                                                            list[i].add = !v.add
                                                            this.setState({
                                                                list: l1
                                                            })
                                                        }}
                                                        style={{ marginTop: 10, backgroundColor: '#e9f9f0', padding: 3, paddingRight: 8, borderRadius: 20 }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Icon name="check"
                                                                color="#2DC76D"
                                                                size={22} />
                                                            <Text style={{ fontSize: 18, color: '#2DC76D' }}>Added</Text>
                                                        </View>
                                                    </TouchableOpacity> : <TouchableOpacity
                                                        onPress={() => {
                                                            var l1 = list
                                                            list[i].add = !v.add
                                                            this.setState({
                                                                list: l1
                                                            })
                                                        }}
                                                        style={{ marginTop: 10, backgroundColor: '#f1ebfe', padding: 3, paddingRight: 8, borderRadius: 20 }}>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <Icon name="add"
                                                                    color="#7540EE"
                                                                    size={22} />
                                                                <Text style={{ fontSize: 18, color: '#7540EE' }}>Add</Text>
                                                            </View>
                                                        </TouchableOpacity>}
                                                </Right>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Content>
                        </Container>
                    </View>
                </Animated.View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});


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

export default connect(mapStateToProps, mapDispatchToProps)(NewMeeting)
