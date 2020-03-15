import React, { Component } from 'react'
import { Text, View } from 'react-native'


import { connect } from 'react-redux';
import * as actions from '../../store/actions/analyticsActions';

class EditScreen extends Component {

    componentDidMount = () => {
        this.props.navigation.addListener('willFocus', () => {
            const timer = setInterval(() => {
                this.props.screen_time("Edit")
            }, 1000)

            this.props.navigation.addListener('willBlur', () => {
                clearInterval(timer)
            })
        })

    }


    calculateWordCountTitle = () => {
        const { title, text } = this.props.todo;

        const titleLength = title.trim().split(/\s+/).length // kelime sayacı bu kayıt ederken lazım olacaktır.
        const textLength = text.trim().split(/\s+/).length

        const checkRateText = width / textLength;
        const checkRateTitle = width / titleLength;

        if (title.length > 20) {
            return title.trim().slice(0, 20) + '...';
        } else {
            return title
        }

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

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen)
