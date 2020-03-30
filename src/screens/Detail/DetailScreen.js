
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Animated, Easing, Keyboard } from 'react-native'


// Redux
import { connect } from 'react-redux'

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


class DetailScreen extends Component {

    getTodo = () => {
        // const { id } = this.props.navigation.state.params;
        // const { todos } = this.props
        // const getTodo = todos.filter(todo => todo.id === id);
        // return getTodo[0];
        const todo = {
            title: "Okula git",
            text: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
            createdAt: 1583944283442,
            editedAt: 1583944310362,
            words: 20,
            characters: 120,
            readTime: 2,
            lastEditingDevice: "OĞUZ IPHONE'U",
            isPinned: true,
            isAlarmed: true,
            isTrashed: false,
            isHadTodoList: false,
            isCompletedTodoList: 0,
            id: 1
        }

        return todo
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
    }

    toggleDrawer = () => {
        this.setState({
            visible: !this.state.visible
        })
    }


    componentDidMount = () => {
        // console.log(this.props)
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



                <Editor
                    setKeyboard={this.setKeyboard}
                    todo={this.props.navigation.state.params.id !== null ? null : this.props.navigation.state.params.id}
                />


                {this.state.downButton === true ?
                    <KeyboardAccessoryView
                        style={{ backgroundColor: Colors.purple, borderTopWidth: 0 }}
                    >
                        <View
                            style={{ alignSelf: "flex-end", marginRight: 20, backgroundColor: Colors.white, padding: 2, paddingRight: 10, paddingLeft: 10, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                            <TouchableOpacity onPress={this.arrowDownBtn}>
                                <Icon name="arrow-down" size={30} color={Colors.purple} />
                            </TouchableOpacity>
                        </View>
                    </KeyboardAccessoryView>
                    : null
                }

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        theme: state.theme.theme
    }
}


export default connect(mapStateToProps, null)(DetailScreen)
