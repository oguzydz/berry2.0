
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Animated, Easing, Keyboard, ScrollView, TextInput, Dimensions } from 'react-native'


// Redux
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/todoActions'


// Styles & Components
import Header from '../../components/Header';
import { styles } from './DetailStyles';
import RightDrawer from '../../components/RightDrawer'
import { Colors } from '../../components/Colors';
import Icon from '../../components/Icon'

import TextEditor from '../../components/TextEditor'
import Editor from '../../components/Editor'
// import Draft from '../../components/Draft';

import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'



const { width, height } = Dimensions.get('window');


class DetailScreen extends Component {


    constructor(props) {
        super(props);
        const { id } = this.props.navigation.state.params;
        const { todos } = this.props
        const getTodo = todos.filter(todo => todo.id === id);

        const get = getTodo[0];

        const todo = {
            title: get.title,
            text: get.text,
            createdAt: get.createdAt,
            editedAt: new Date().getTime(),
            words: get.words,
            characters: get.characters,
            readTime: get.readTime,
            lastEditingDevice: get.lastEditingDevice,
            isPinned: get.isPinned,
            isAlarmed: get.isAlarmed,
            isTrashed: get.isTrashed,
            isHadTodoList: get.isHadTodoList,
            isCompletedTodoList: get.isCompletedTodoList,
            id: get.id
        }



        this.state = {
            todo: todo
        }

    }


    styles = () => {
        if (this.props.theme === "light") {
            return styles.light;
        } else {
            return styles.dark;
        }
    }

    state = {
        visible: false,
        downButton: true,
        todo: '',
        height: 40,
        keyboard: false,
    }

    toggleDrawer = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _keyboardDidShow = () => {
        this.setState({
            keyboard: true
        })
    }

    _keyboardDidHide = () => {
        this.setState({
            keyboard: false
        })
    }

  
    arrowDownBtn = () => {
        Keyboard.dismiss()
        this.setState({ downButton: false })
    }

    setKeyboard = () => {
        this.setState({
            downButton: true
        })
    }



    setTitle = (title) => {
        this.setState(() => ({
            todo: {
                ...this.state.todo,
                title: title
            }
        }), () => {
            this.props.update_todo(this.state.todo)
        })
    }

    setText = (text) => {
        this.setState(() => ({
            todo: {
                ...this.state.todo,
                text: text
            }
        }), () => {
            this.props.update_todo(this.state.todo)
        })
    }


    render() {

        return (
            <View style={[this.styles().container]}>

                <Header
                    navigation={this.props.navigation}
                    rightDrawer={this.toggleDrawer}
                />

                {this.state.visible === true ?
                    <View style={[this.styles().popupContainer]}>
                        <RightDrawer
                            visible={this.state.visible}
                            closePopup={this.toggleDrawer}
                        />
                    </View>
                    : null}



                <ScrollView
                    keyboardDismissMode="on-drag"
                    style={this.styles().editorContainer}>

                    <TextInput
                        style={this.styles().titleInput}
                        placeholder="Title"
                        placeholderTextColor="gray"
                        onFocus={this.props.setKeyboard}
                        onChangeText={(text) => this.setTitle(text)}
                        value={this.state.todo.title}
                    />


                    <ScrollView
                        keyboardDismissMode="on-drag"
                        style={this.styles().textContainer}>

                        <TextInput
                            style={[this.styles().textInput, { height: this.state.keyboard === true ? height - 425 : height - 155 }]}
                            onChangeText={(text) => this.setText(text)}
                            placeholder="Type something"
                            placeholderTextColor="gray"
                            multiline={true}
                            numberOfLines={10}
                            underlineColorAndroid="transparent"
                            keyboardShouldPersistTaps='handled'
                            onFocus={this.props.setKeyboard}
                            value={this.state.todo.text}

                        />

                    </ScrollView>

                </ScrollView>

                <KeyboardAccessoryView
                    style={{ backgroundColor: null, borderTopWidth: 0 }}
                >
                    <View
                        style={{ zIndex: -2, alignSelf: "flex-end", marginRight: 20, backgroundColor: Colors.white, padding: 2, paddingRight: 10, paddingLeft: 10, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                        <TouchableOpacity onPress={this.arrowDownBtn}>
                            <Icon name="arrow-down" size={30} color={Colors.purple} />
                        </TouchableOpacity>
                    </View>
                </KeyboardAccessoryView>


            </View >
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
        update_todo: (todo) => dispatch(Actions.update_todo(todo))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
