import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { connect } from 'react-redux';
import * as actions from '../../store/actions/analyticsActions';

class AboutScreen extends Component {
    componentDidMount = () => {
        this.props.navigation.addListener('willFocus', () => {
            const timer = setInterval(() => {
                this.props.screen_time("About")
            }, 1000)

            this.props.navigation.addListener('willBlur', () => {
                clearInterval(timer)
            })
        })

    }



    render() {
        return (
            <View>
                <Text> textInComponent </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
