import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { store } from '../../store/index';
import * as actions from '../../store/actions/analyticsActions';


class HomeScreen extends Component {

    componentWillMount = () => {
        store.dispatch(actions.screen_time("Home"))
    }


    render() {

        return (
            <View>
                <Text> textInComponent </Text>
                <TouchableOpacity onPress={() => store.dispatch(actions.screen_clicked("Home"), console.log(store.getState()))}>
                    <Text> Press Home </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Trash')}>
                    <Text> Press Home </Text>
                </TouchableOpacity>
            </View>
        )
    }
}



export default HomeScreen

