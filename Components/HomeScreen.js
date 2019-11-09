import React from 'react'
import { View, Text } from 'react-native'


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.navigation)
        return (
            <View>
                <Text>HomeScreen</Text>
            </View>
        )
    }
}