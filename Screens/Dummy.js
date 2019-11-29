import React from 'react';
import { View, Dimensions, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, Platform } from 'react-native';


class Dummy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get('window').width,
            screenHeight: Dimensions.get('window').height,
            isUser: false
        }
    }

    render() {
        const { screenHeight, screenWidth, isUser } = this.state
        return (
            <View style={{ width: screenWidth, height: screenHeight }}>
               <Text>Hello</Text>
            </View>
        );
    }
}


export default Dummy;
