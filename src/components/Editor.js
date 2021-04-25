import React, { Component } from 'react'
import { Dimensions, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, View, TextInput } from 'react-native'
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

// Redux
import { connect } from 'react-redux'
import * as actions from '../store/actions/todoActions';


import { Colors } from './Colors'
const { width, height } = Dimensions.get('window')


class Editor extends Component {

    state = {
        id: "",
        text: "",
        title: "",
        createdAt: "",
        arrowDownBtn: true,
    }

    componentDidMount = () => {
        console.log(this.props.todo)
        // this.getTodo();
    }

    getTodo = () => {
        const filtered = this.props.todos.filter(todo => todo.id === this.props.id);

        console.log(filtered[0])

        // this.setState({
        //     title: filtered[0].title,
        //     text: filtered[0].text,
        //     id: filtered[0].id
        // })

    }


    setTitle = (title) => {
        this.props.setTitle(title)
    }

    setText = (text) => {
        this.props.setText(text)
    }


    render() {


        return (
            <ScrollView
                keyboardDismissMode="on-drag"
                style={styles.container}>

                <TextInput
                    style={styles.titleInput}
                    placeholder="Title"
                    placeholderTextColor="gray"
                    onFocus={this.props.setKeyboard}
                    onChangeText={(text) => this.setTitle(text)}
                // value={filtered[0].title}
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setText(text)}
                    placeholder="Type something"
                    placeholderTextColor="gray"
                    multiline={true}
                    numberOfLines={10}
                    underlineColorAndroid="transparent"
                    keyboardShouldPersistTaps='handled'
                    onFocus={this.props.setKeyboard}
                // value={filtered[0].text}

                />

            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        theme: state.theme.theme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add_todo: (todo) => { dispatch(actions.add_todo(todo)) },
        start_todo: (todoId) => { dispatch(actions.start_todo(todoId)) },
        get_todo: (todoId) => dispatch(actions.get_todo(todoId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)


const styles = StyleSheet.create({
    container: {
        zIndex: -1
    },
    titleInput: {
        width: width,
        height: 70,
        color: Colors.white,
        fontSize: 20,
        padding: 20,
        backgroundColor: Colors.purple,
    },
    textInput: {
        width: width,
        color: Colors.white,
        fontSize: 20,
        padding: 20,
        backgroundColor: Colors.purple,
        borderBottomColor: Colors.white,
        marginBottom: 10,
        height: height - 155
    }
})