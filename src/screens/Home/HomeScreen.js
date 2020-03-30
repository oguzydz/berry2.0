import React, { Component } from 'react'
import { View } from 'react-native'

// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/analyticsActions';

// Styles & Components
import Header from '../../components/Header';
import List from '../../components/List';
import { styles } from './HomeStyles';
import PopupMenu from '../../components/PopupMenu';
import AddButton from '../../components/AddButton';



class HomeScreen extends Component {
    componentDidMount = () => {
        this.focus = this.props.navigation.addListener('willFocus', () => {
            const timer = setInterval(() => {
                this.props.screen_time("Home")
            }, 1000)


            this.props.navigation.addListener('willBlur', () => {
                clearInterval(timer)
 
            })
        })
    }

    state = {
        isVisible: false
    }

    openMenu = (todoId) => {
        this.setState({ PopupMenuActiveId: todoId })
        this.setState({ isVisible: true })

    }

    actionsMenuClose = () => {
        this.setState({ isVisible: false })
    }


    styles = () => {
        if (this.props.theme === "light") {
            return styles.light;
        } else {
            return styles.dark;
        }
    }

    navigationWithPush = (routeName, params) => {
        this.props.navigation.push("AddScreen");
    };


    render() {

        return (
            <View style={this.styles().container}>
                <Header navigation={this.props.navigation} />
                <List
                    navigation={this.props.navigation}
                    screenName={this.props.navigation.state.routeName}
                    openMenu={this.openMenu}
                />
                <PopupMenu todoId={this.state.PopupMenuActiveId} isVisible={this.state.isVisible} actionsMenuClose={this.actionsMenuClose} />

                <AddButton
                    nav={this.props.navigation}
                />
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
        state: state,
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        screen_time: (screen) => dispatch(actions.screen_time(screen)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

