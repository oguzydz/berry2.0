import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'

import Constants from 'expo-constants';

import Icon from '../components/Icon'


import { connect } from 'react-redux';
import * as themeActions from '../store/actions/themeActions';

const { width, height } = Dimensions.get('window');



class Header extends Component {



    toggleMenu = () => {
        const { routeName } = this.props.navigation.state;

        if (routeName === "HomeScreen") {
            this.props.navigation.toggleDrawer()
        } else if (routeName === "AboutScreen") {
            this.props.navigation.toggleDrawer()
        } else if (routeName === "TrashScreen") {
            this.props.navigation.toggleDrawer()
        } else if (routeName === "AddScreen") {
            this.props.navigation.goBack()
        } else if (routeName === "EditScreen") {
            this.props.navigation.goBack()
        }

    }


    screenTitle = () => {
        const { routeName } = this.props.navigation.state;

        if (routeName === "HomeScreen") {
            return "TODOS"
        } else if (routeName === "AboutScreen") {
            return "ABOUT"
        } else if (routeName === "TrashScreen") {
            return "TRASH"
        } else if (routeName === "AddScreen") {
            return "ADD TODO"
        } else if (routeName === "EditScreen") {
            return "EDIT TODO"
        }

    }


    toggleTheme = () => {
        if (this.props.theme === "light") {
            this.props.set_dark();
        } else if (this.props.theme === "dark") {
            this.props.set_light();
        }
    }


    menuIcon = () => {
        const { routeName } = this.props.navigation.state;

        if (routeName === "HomeScreen") {
            return "menu"
        } else if (routeName === "AboutScreen") {
            return "menu"
        } else if (routeName === "TrashScreen") {
            return "menu"
        } else if (routeName === "AddScreen") {
            return "arrow-back"
        } else if (routeName === "EditScreen") {
            return "arrow-back"
        }

    }



    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme === "light" ? "#5639a1" : "#000", }]}>
                <View style={styles.left}>
                    <TouchableOpacity onPress={this.toggleMenu}>
                        <Icon name={this.menuIcon()} size={40} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.center}>
                    <Text style={styles.centerText}>
                        {this.screenTitle()}
                    </Text>
                </View>
                <View style={styles.right}>
                    <TouchableOpacity onPress={this.toggleTheme}>
                        {this.props.theme === "light" ? <View style={[styles.themeBtn, { backgroundColor: "#000", }]}><Icon name="moon" size={30} color="#EBC815" /></View> : <View style={[styles.themeBtn, { backgroundColor: "#8cbed6", }]}><Icon name="sunny" size={30} color="#f2f27a" /></View>}
                    </TouchableOpacity>
                </View>
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
        set_dark: () => dispatch(themeActions.theme_dark()),
        set_light: () => dispatch(themeActions.theme_light()),

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);


const styles = StyleSheet.create({
    container: {
        width: width,
        height: 95,
        paddingTop: Constants.statusBarHeight,
        flexDirection: "row"
    },
    left: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    center: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    centerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    right: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    themeBtn: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 9,
        paddingLeft: 9,
        borderRadius: 40
    }


})