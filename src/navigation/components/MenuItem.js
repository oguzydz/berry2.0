import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Font from 'react-native-vector-icons/Ionicons';

export default class MenuItem extends Component {



    render() {

        return (
            <View style={{ margin: 20 }}>
                <Font name="md-woman" size={20} color="#4F8EF7" />
            </View>
        )
    }
}
