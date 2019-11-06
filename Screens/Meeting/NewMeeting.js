import React from 'react';
import { View, Dimensions, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, Platform, SafeAreaView, StyleSheet, Animated, Easing } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Form, Item, Label, Input, Textarea } from 'native-base'
import { connect } from 'react-redux';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Icon } from 'react-native-elements'
import FeatherIcon from "react-native-feather1s";
import Moment from 'moment'
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
            showHeader: false
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
            this.setState({ showHeader: false })
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

    render() {
        const { today, currentTime, futureDate, calendarHeight, screenHeight, screenOpacity, calendarOpacity, showHeader, items } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {!showHeader ? <View style={{ paddingTop: 20, paddingLeft: 20, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Icon
                        name="arrow-left"
                        size={40}
                        type="feather"
                    // thin={true}]
                    />
                </View> :
                    <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 10, height: height / 6, alignItems: 'flex-start', backgroundColor: '#d3d3df' }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.hideDateTimePicker}>
                            <Icon
                                name="arrow-left"
                                size={40}
                                type="feather"
                                iconStyle={{ width: 200 }}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 24, fontWeight: '700', textAlign: 'center', paddingBottom: 10 }}>DashSync project kick-off</Text>
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
                                    <TouchableOpacity activeOpacity={0.6} style={{ borderColor: 'grey', borderStyle: 'dashed', borderWidth: 1, height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                                        <Icon
                                            name="add"
                                            iconStyle={{ fontSize: 32, opacity: 0.2 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Animated.View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 18, marginBottom: 10, opacity: 0.4 }}>Choose Date</Text>
                                    <TouchableOpacity onPress={this.showDateTimePicker} style={{ flexDirection: 'row' }}>
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
                                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#E9F9F0', height: 30, paddingTop: 2, borderRadius: 15, width: '45%', marginRight: 15 }}>
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require('../../assets/images/Bitmap1.png')} />
                                            <Text style={{ color: '#22D369', fontSize: 16, fontWeight: '700' }}>Project Meeting</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#DFDFF7', height: 30, paddingTop: 2, borderRadius: 15, width: '35%' }}>
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require('../../assets/images/message.png')} />
                                            <Text style={{ color: '#2F61D5', fontSize: 16, fontWeight: '700' }}>Meeting</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: 5, flexDirection: 'row', marginRight: 20 }}>
                                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFE2DC', height: 30, paddingTop: 2, borderRadius: 15, marginRight: 15, width: '30%' }}>
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require('../../assets/images/webinar.png')} />
                                            <Text style={{ color: '#FF7052', fontSize: 16, fontWeight: '700' }}>Webinar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#E3D9FC', height: 30, paddingTop: 2, borderRadius: 15, marginRight: 15, width: '30%' }}>
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require('../../assets/images/status.png')} />
                                            <Text style={{ color: '#7540EE', fontSize: 16, fontWeight: '700' }}>Status</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#D8F0F8', height: 30, paddingTop: 2, borderRadius: 15, marginRight: 15, width: '30%' }}>
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
                                    <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 18, fontWeight: 'bold', marginTop: 15, marginLeft: 30 }}>Schedule meeting</Text>
                                </View>
                            </View>
                        </Animated.View>
                    </KeyboardAvoidingView>
                </Animated.ScrollView>

                <Animated.View style={{ height: calendarHeight, opacity: calendarOpacity, backgroundColor: '#d3d3df' }}>
                    <View style={{ backgroundColor: 'white', height: height * 5 / 6, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
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
                            // markedDates={{
                            //     '2019-11-16': { selected: true, selectedColor: '#7540EE', activeOpacity: 0 }
                            // }}
                            markedDates={items}
                        />
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
