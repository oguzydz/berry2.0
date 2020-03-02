import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import { connect } from 'react-redux'
import * as actions from '../store/actions/themeActions';

class Theme extends Component {

    render() {
        // console.log(this.props);
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 30 }}>{this.props.theme} OĞUZ </Text>
                <Button
                    title="Theme"
                    onPress={() => this.props.theme_dark()}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        ...state.theme,
        ...state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        theme_dark: () => dispatch(actions.theme_dark()),
        theme_light: () => dispatch(actions.theme_light())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Theme);

