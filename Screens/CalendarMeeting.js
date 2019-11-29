import React from 'react';
import { View, Dimensions, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Button } from 'native-base'
import { connect } from 'react-redux';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Icon } from 'react-native-elements'


class CalendarMeeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get('window').width,
            screenHeight: Dimensions.get('window').height,
            items: {}
        }
    }

    componentDidMount() {
        SplashScreen.hide();
        console.log('this***', this.props)
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 10; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <View style={[styles.item, { height: item.height }]}><Text>{item.name} Hello</Text></View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    render() {
        const { screenHeight, screenWidth } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ position: 'absolute', bottom: 30, right: 0, width: 100, height: 100 }}>
                    <Button light style={{ backgroundColor: '#FF7052', justifyContent: 'center', alignItems: 'center', borderRadius: 50, height: 70, width: 70 }}
                    >
                        <Icon
                            name="add"
                            iconStyle={{ fontSize: 32 }}
                            color="white" />
                    </Button>
                </View>
                <ScrollView style={{ width: screenWidth, height: screenHeight }}>
                    <Agenda
                        items={this.state.items}
                        ref={e => this.agendaRef = e}
                        loadItemsForMonth={this.loadItems.bind(this)}
                        selected={'2017-05-16'}
                        renderItem={this.renderItem.bind(this)}
                        renderEmptyDate={this.renderEmptyDate.bind(this)}
                        rowHasChanged={this.rowHasChanged.bind(this)}
                    // futureScrollRange={5}
                    // pastScrollRange={5}
                    // renderKnob={() => {
                    //     return (<View style={{ flex: 1 }} >
                    //         <Text>Hello</Text>
                    //     </View>);
                    // }}
                    // markingType={'period'}
                    // markedDates={{
                    //    '2017-05-08': {textColor: '#666'},
                    //    '2017-05-09': {textColor: '#666'},
                    //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
                    //    '2017-05-21': {startingDay: true, color: 'blue'},
                    //    '2017-05-22': {endingDay: true, color: 'gray'},
                    //    '2017-05-24': {startingDay: true, color: 'gray'},
                    //    '2017-05-25': {color: 'gray'},
                    //    '2017-05-26': {endingDay: true, color: 'gray'}}}
                    // monthFormat={'yyyy'}
                    // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
                    //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
                    />
                </ScrollView>
            </SafeAreaView >
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

export default connect(mapStateToProps, mapDispatchToProps)(CalendarMeeting)
