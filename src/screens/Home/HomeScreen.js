import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/analyticsActions';


import Header from '../../components/Header';


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

    getState = () => {
        console.log(this.props)
    }


    render() {

        return (
            <View style={[styles.container, { backgroundColor: this.props.theme === "light" ? "#5639a1" : "#000", }]}>
                <Header navigation={this.props.navigation} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("TrashScreen")}>
                    <Text>go trash</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.getState}>
                    <Text>getState</Text>
                </TouchableOpacity>
            </View>
        )
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5639a1",
    }
})

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        screen_time: (screen) => dispatch(actions.screen_time(screen)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

