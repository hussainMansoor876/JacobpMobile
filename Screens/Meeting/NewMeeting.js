import React from 'react';
import { View, Dimensions, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Form, Item, Label, Input, Button, Picker, Icon as NativeIcon } from 'native-base'
import { connect } from 'react-redux';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Icon } from 'react-native-elements'
import FeatherIcon from "react-native-feather1s";
import Moment from 'moment'


class NewMeeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get('window').width,
            screenHeight: Dimensions.get('window').height,
            items: {},
            today: 'Today',
            currentTime: Moment(new Date()).format("h:mm A"),
            futureDate: ''

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
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    componentDidMount() {
        SplashScreen.hide();
        console.log("Hello", this.state.currentTime)
    }

    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }

    render() {
        const { today, currentTime, futureDate } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 10, justifyContent: 'space-between', alignItems: 'center', paddingRight: 10 }}>
                    <FeatherIcon
                        name="arrow-left"
                        size={40}
                        // thin={true}
                        iconStyle={{ width: 200 }}
                    />
                </View>
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
                        <TouchableOpacity style={{ borderColor: 'grey', borderStyle: 'dashed', borderWidth: 1, height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                            <Icon
                                name="add"
                                iconStyle={{ fontSize: 32, opacity: 0.2 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 18, marginBottom: 10, opacity: 0.4 }}>Choose Date</Text>
                        <TouchableOpacity onPress={this.showDateTimePicker} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, marginRight: 30 }}>{today}, {currentTime} --- {futureDate}</Text>
                            <Icon
                                name="angle-down"
                                type="font-awesome"
                            />
                        </TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDateTimePicker}
                            date={new Date()}
                            mode="datetime"
                            minimumDate={new Date()}
                        />
                    </View>
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
                </View>
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
