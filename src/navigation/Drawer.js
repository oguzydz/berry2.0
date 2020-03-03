import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants';

import { connect } from 'react-redux'
import * as actions from '../store/actions/analyticsActions'

import MenuItem from './components/MenuItem'


// Gerekli olanlar menü item classı
// meni item içinde icon ekleme

const { width, height } = Dimensions.get('window')

class Drawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MenuItem screen="TODOS" icon="albums" screenName="HomeScreen" nav={this.props.navigation} onPress={() => this.props.menu_clicked("Home")} />
                <MenuItem screen="TRASH" icon="trash" screenName="TrashScreen" nav={this.props.navigation} onPress={() => this.props.menu_clicked("Trash")} />
                <MenuItem screen="ABOUT" icon="finger-print" screenName="AboutScreen" nav={this.props.navigation} onPress={() => this.props.menu_clicked("About")} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menu_clicked: (screen) => dispatch(actions.screen_clicked(screen)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)

const styles = StyleSheet.create({
    container: {
        width: width / 2,
        padding: 20
    }

})  