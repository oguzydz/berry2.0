import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux';
import * as actions from '../../store/actions/analyticsActions';

import Header from '../../components/Header';



class AddScreen extends Component {

    componentDidMount = () => {
        this.props.navigation.addListener('willFocus', () => {
            const timer = setInterval(() => {
                this.props.screen_time("Add")
            }, 1000)

            this.props.navigation.addListener('willBlur', () => {
                clearInterval(timer)
            })
        })

    }


    render() {
        return (
            <View style={{ alignItems: "center", alignContent: "center", flex: 1 }}>
                <Header navigation={this.props.navigation} />

                <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                    <Text>Go Back</Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen)
