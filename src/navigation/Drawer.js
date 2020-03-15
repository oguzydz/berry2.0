import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants';

import { connect } from 'react-redux'
import * as actions from '../store/actions/analyticsActions'

import MenuItem from './components/MenuItem'


// Gerekli olanlar menü item classı
// meni item içinde icon ekleme

const { width } = Dimensions.get('window')

class Drawer extends Component {


    render() {

        const nav = this.props.navigation;
        const theme = this.props.theme;
        return (
            <View style={[styles.container, { backgroundColor: theme === "light" ? "#fff" : "#8c8b8c" }]}>
                <MenuItem screen="TODOS" icon="albums" screenName="HomeScreen" screenSN="Home" nav={nav} activePage={nav.state.index} index={0} theme={theme} />
                <MenuItem screen="TRASH" icon="trash" screenName="TrashScreen" screenSN="Trash" nav={nav} activePage={nav.state.index} index={1} theme={theme} />
                <MenuItem screen="ABOUT" icon="finger-print" screenName="AboutScreen" screenSN="About" nav={nav} activePage={nav.state.index} index={2} theme={theme} />
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
        width: width / 1.5,
        paddingTop: 20,
        flexDirection: "column",
        flex: 1,
    }
})  