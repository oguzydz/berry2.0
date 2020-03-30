import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'

// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/analyticsActions';


// Styles & Components 
import List from '../../components/List';
import Header from '../../components/Header';
import { styles } from './TrashStyles';
import PopupMenu from '../../components/PopupMenu';

class TrashScreen extends Component {

    componentDidMount = () => {
        this.props.navigation.addListener('willFocus', () => {
            const timer = setInterval(() => {
                this.props.screen_time("Trash")
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
        screen_time: (screen) => dispatch(actions.screen_time(screen)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrashScreen)

 