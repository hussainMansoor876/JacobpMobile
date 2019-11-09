import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'


export default class Siderbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <DrawerItems {...props} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}