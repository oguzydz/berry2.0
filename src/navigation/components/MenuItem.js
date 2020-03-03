import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import Font from 'react-native-vector-icons/Ionicons';

import Icon from '../../components/Icon';

export default class MenuItem extends Component {



    render() {

        const { screen, icon, screenName, nav } = this.props;


        return (
            <TouchableOpacity onPress={() => nav.navigate(screenName)}>
                <View style={styles.container}>
                    <View style={styles.icon}>
                        <Icon name={icon} size={30} color="#4F8EF7" />
                    </View>
                    <View style={styles.screenTitle}>
                        <Text style={styles.screenText}>{screen}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        paddingLeft: 0
    },
    icon: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,

    },
    screenTitle: {
        alignContent: "flex-start",
        justifyContent: "center",
        flex: 2,
        paddingLeft: 10
    },
    screenText: {
        fontWeight: "bold"
    }
})