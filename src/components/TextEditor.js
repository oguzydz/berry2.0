import React, { Component } from 'react'
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, Text, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native'

import { connect } from 'react-redux'
import * as actions from '../store/actions/todoActions'

import { Colors } from './Colors';
import CNRichTextEditor, { CNToolbar, getInitialObject, getDefaultStyles, convertToObject } from "react-native-cn-richtext-editor";
const defaultStyles = getDefaultStyles({
    color: Colors.white
});

import Icon from './Icon'
import { TextInput } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window')

class TextEditor extends Component {
    constructor(props) {
        super(props);


        const getTodo = () => {
            const { from, id } = this.props.nav.state.params;
            if (from === "addbutton") {
                return new Date().getTime()
            } else if (from === "anywhere") {
                const getTodo = this.props.todos.filter(todo => todo.id === id);
                return getTodo[0].createdAt;
            }
        }


        this.state = {
            selectedTag: 'body',
            selectedStyles: ['title'],
            value: [getInitialObject()],
            downButton: false,
            
            todo: {
                id: this.props.todos.length + 1,
                title: "",
                content: [],
                createdAt: getTodo(),
                // createdAt: getTodo().id !== null ? getTodo('createdAt') : new Date().getTime(),
                editedAt: new Date().getTime(),
                words: 0,
                characters: 0,
                readTime: 0,
                lastEditingDevice: this.props.info.deviceName,
                isPinned: false,
                isAlarmed: false,
                isTrashed: false,
            },
            titleInput: false
        };

        this.editor = null;
        this.words = []
    }

    // setInfo = () => {
    //     const createdAt = new Date().getTime();
    //     this.setState({
    //         todo: {
    //             ...this.state.todo,
    //             createdAt: createdAt,
    //             lastEditingDevice: this.props.info.deviceName
    //         }
    //     })
    // }


    onStyleKeyPress = (toolType) => {
        this.editor.applyToolbar(toolType);
    }

    onSelectedTagChanged = (tag) => {
        this.setState({
            selectedTag: tag
        })
    }

    onSelectedStyleChanged = (styles) => {
        this.setState({
            selectedStyles: styles,
        })
    }

    onValueChanged = (value) => {
        this.setState({
            value: value
        })
        this.setState({
            todo: {
                ...this.state.todo,
                content: this.state.value,
            }
        })

        this.props.add_todo(this.state.todo)
    }

    arrowDownBtn = () => {
        Keyboard.dismiss()
        this.setState({ downButton: false })
    }

    componentDidMount = () => {
        // console.log(this.props.info.deviceName)
        console.log(this.state.todo)
    }

    componentWillMount = () => {
        // this.props.add_todo(this.state.todo)
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                // enabled
                keyboardVerticalOffset={0}
                style={{
                    flex: 1,
                    paddingTop: 10,
                    backgroundColor: Colors.purple,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}>
                <TextInput
                    placeholder="Title"
                    placeholderTextColor={Colors.gray}
                    style={styles.titleInput}
                    onFocus={() => this.setState(() => ({ downButton: true, titleInput: true }))}
                />
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                    <View style={styles.main}>
                        <CNRichTextEditor
                            ref={input => this.editor = input}
                            onSelectedTagChanged={this.onSelectedTagChanged}
                            onSelectedStyleChanged={this.onSelectedStyleChanged}
                            value={this.state.value}
                            style={{ backgroundColor: Colors.purple }}
                            styleList={defaultStyles}
                            onValueChanged={this.onValueChanged}
                            placeholder={"Type something..."}
                            textInputStyle={{ color: Colors.white }}
                            // onFocus={() => this.arrowDownBtn}
                            onFocus={() => this.setState(() => ({ downButton: true, titleInput: false }))}
                        />
                    </View>
                </TouchableWithoutFeedback>

                <View style={{
                    minHeight: 35
                }}>
                    {this.state.downButton === true ?
                        <View
                            style={{ alignSelf: "flex-end", marginRight: 20, backgroundColor: Colors.white, padding: 2, paddingRight: 10, paddingLeft: 10, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                        >
                            <TouchableOpacity onPress={this.arrowDownBtn}>
                                <Icon name="arrow-down" size={30} color={Colors.purple} />
                            </TouchableOpacity>
                        </View>
                        : null
                    }

                    {this.state.titleInput === true ? null :

                        <CNToolbar
                            style={{
                                height: 35,
                                borderRadius: 0
                            }}
                            iconSetContainerStyle={{
                                flexGrow: 1,
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                            }}
                            size={30}
                            iconSet={[
                                {
                                    type: 'tool',
                                    iconArray: [{
                                        toolTypeText: 'title',
                                        iconComponent:
                                            <Text style={[styles.toolbarButton, { fontWeight: "bold" }]}>
                                                H
                                        </Text>
                                    }]
                                },
                                {
                                    type: 'tool',
                                    iconArray: [{
                                        toolTypeText: 'bold',
                                        buttonTypes: 'style',
                                        iconComponent:
                                            <Text style={[styles.toolbarButton, { fontWeight: "bold" }]}>
                                                B
                                        </Text>
                                    }]
                                },
                                {
                                    type: 'tool',
                                    iconArray: [{
                                        toolTypeText: 'italic',
                                        buttonTypes: 'style',
                                        iconComponent:
                                            <Text style={[styles.toolbarButton, { fontWeight: "bold", fontStyle: 'italic' }]}>
                                                i
                                        </Text>
                                    }]
                                },
                                {
                                    type: 'tool',
                                    iconArray: [{
                                        toolTypeText: 'underline',
                                        buttonTypes: 'style',
                                        iconComponent:
                                            <Text style={[styles.toolbarButton, { fontWeight: "bold", fontStyle: 'italic', textDecorationLine: 'underline' }]}>
                                                U
                                        </Text>
                                    }]
                                },
                                {
                                    type: 'seperator'
                                },
                                {
                                    type: 'tool',
                                    iconArray: [{
                                        toolTypeText: 'ul',
                                        buttonTypes: 'tag',
                                        iconComponent:
                                            <Text style={[styles.toolbarButton, { fontWeight: "bold" }]}>
                                                ⦁
                                        </Text>
                                    }]
                                },
                                {
                                    type: 'tool',
                                    iconArray: [{
                                        toolTypeText: 'ol',
                                        buttonTypes: 'tag',
                                        iconComponent:
                                            <Text style={[styles.toolbarButton]}>
                                                1-
                                        </Text>
                                    }]
                                },

                            ]}
                            selectedTag={this.state.selectedTag}
                            selectedStyles={this.state.selectedStyles}
                            onStyleKeyPress={this.onStyleKeyPress}
                        />
                    }
                </View>
            </KeyboardAvoidingView >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.analytics,
        todos: state.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_todo: (todo) => dispatch(actions.add_todo(todo)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);

var styles = StyleSheet.create({
    main: {
        flex: 1,
        // marginTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 1,
        alignItems: 'stretch',
    },
    toolbarButton: {
        fontSize: 20,
        width: 28,
        height: 28,
        textAlign: 'center'
    },
    italicButton: {
        fontStyle: 'italic'
    },
    boldButton: {
        fontWeight: 'bold'
    },
    underlineButton: {
        textDecorationLine: 'underline'
    },
    lineThroughButton: {
        textDecorationLine: 'line-through'
    },
    titleInput: {
        width: width - 70,
        alignSelf: "center",
        height: 40,
        fontSize: 22,
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#442d80",
        color: Colors.white
    }
});