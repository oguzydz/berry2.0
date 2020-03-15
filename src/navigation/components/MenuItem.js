import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'


import Icon from '../../components/Icon';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/analyticsActions';

class MenuItem extends Component {

    goFunctions = (screenName, screenSN) => {
        this.props.nav.navigate(screenName);
        this.props.menu_clicked(screenSN);
    }

    render() {

        const {
            screen,
            icon,
            screenName,
            nav,
            index,
            activePage,
            theme,
            screenSN
        } = this.props;

        return (  
            <TouchableOpacity onPress={() => activePage === index ? nav.toggleDrawer() : this.goFunctions(screenName, screenSN)}>
                <View style={[styles.container, { backgroundColor: activePage === index ? theme === "light" ? "#eee" : "#bbbbbb" : null }]}>
                    <View style={styles.icon}>
                        <Icon name={icon} size={30} color={theme === "light" ? "#5639a1" : "#000"} />
                    </View>
                    <View style={styles.screenTitle}>
                        <Text style={[styles.screenText, { color: theme === "light" ? "#5639a1" : "#000" }]}>{screen}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        menu_clicked: (screen) => dispatch(actions.screen_clicked(screen)),
    }
}


export default connect(null, mapDispatchToProps)(MenuItem);


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        paddingLeft: 0,
        marginBottom: 10,
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
    },
    arrowDown: {
        position: "absolute",
        right: 10,
        padding: 10,
        alignContent: "center",
        justifyContent: "center"
    }
})