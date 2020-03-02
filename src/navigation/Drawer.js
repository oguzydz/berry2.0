import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

import MenuItem from './components/MenuItem'


// Gerekli olanlar menü item classı
// meni item içinde icon ekleme

const {width, height} = Dimensions.get('window')


export default class Drawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MenuItem />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: width / 2
})  