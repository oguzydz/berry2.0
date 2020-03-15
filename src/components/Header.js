import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Yardımcı Libs
import { withNavigationFocus } from 'react-navigation';

// Styles & Components
import Icon from '../components/Icon'
import { styles } from './HeaderStyles';
import { Colors } from './Colors';

// Redux
import { connect } from 'react-redux';
import * as themeActions from '../store/actions/themeActions';
import * as actions from '../store/actions/analyticsActions';




class Header extends Component {


    toggleMenu = () => {
        const { routeName } = this.props.navigation.state;

        this.props.buttons_clicked("MenuIcon");

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
        } else if (routeName === "DetailScreen") {
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
        } else if (routeName === "DetailScreen") {
            return "TODO"
        }

    }


    toggleTheme = () => {
        if (this.props.theme === "light") {
            this.props.set_dark();
            this.props.buttons_clicked("Dark");
        } else if (this.props.theme === "dark") {
            this.props.set_light();
            this.props.buttons_clicked("Light");
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
        } else if (routeName === "DetailScreen") {
            return "arrow-back"
        }

    }


    styles = () => {
        if (this.props.theme === "light") {
            return styles.light;
        } else {
            return styles.dark;
        }
    }

    render() {


        const { theme } = this.props;

        return (
            <View style={this.styles().container}>
                <View style={this.styles().left}>
                    <TouchableOpacity onPress={this.toggleMenu}>
                        <Icon name={this.menuIcon()} size={40} color={theme === "light" ? Colors.white : Colors.gray} />
                    </TouchableOpacity>
                </View>
                <View style={this.styles().center}>
                    <Text style={this.styles().centerText}>
                        {this.screenTitle()}
                    </Text>
                </View>
                <View style={this.styles().right}>
                    <TouchableOpacity onPress={this.toggleTheme}>
                        {theme === "light" ? <View style={this.styles().themeBtn}><Icon name="moon" size={30} color="#EBC815" /></View> : <View style={this.styles().themeBtn}><Icon name="sunny" size={30} color="#f2f27a" /></View>}
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
        buttons_clicked: (button) => dispatch(actions.buttons_clicked(button))
    }
}


export default withNavigationFocus(connect(mapStateToProps, mapDispatchToProps)(Header));


