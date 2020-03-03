import React, { Component } from 'react'
import { Text, View, Switch, StyleSheet, TouchableOpacity } from 'react-native'

import { store } from '../store/index'
import * as actions from '../store/actions/themeActions'

 


export default class ThemeButton extends Component {

    toggleTheme = () => {
        const theme = store.getState().theme.theme;

        if (theme === "light") {
            store.dispatch(actions.theme_dark)
        }
        if (theme === "dark") {
            store.dispatch(actions.theme_light)
        }
    }

   
 

    render() {
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <TouchableOpacity style={styles.btn}>
                    <View></View>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    btn: {
        backgroundColor: "white",
        height: 38,
        borderRadius: 16
    }
}
)

 