
import React, { Component } from 'react'
import { View, TouchableOpacity, Keyboard } from 'react-native'


// Redux
import { connect } from 'react-redux'
import * as todoActions from '../../store/actions/todoActions';
import * as analyticsActions from '../../store/actions/analyticsActions';


// Styles & Components
import Header from '../../components/Header';
import { styles } from './AddStyles';
import RightDrawer from '../../components/RightDrawer'
import { Colors } from '../../components/Colors';
import Icon from '../../components/Icon'
import Editor from '../../components/Editor'
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'


class AddScreen extends Component {

    componentDidMount = () => {
        this.focus = this.props.navigation.addListener('willFocus', () => {
            const timer = setInterval(() => {
                this.props.screen_time("Add")
            }, 1000)

            console.log(this.props.navigation.state.params)

            this.props.navigation.addListener('willBlur', () => {
                clearInterval(timer)

            })
        })

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
        title: "",
        text: "",
    }

    toggleDrawer = () => {
        this.setState({
            visible: !this.state.visible
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
            title: title
        }), () => {
            this.props.update_todo({
                id: this.props.navigation.state.params.newTodoId,
                title: this.state.title,
                text: this.state.text, 
            })
        })
    }

    setText = (text) => {
        this.setState(() => ({
            text: text
        }), () => {
            this.props.update_todo({
                id: this.props.navigation.state.params.newTodoId,
                title: this.state.title,
                text: this.state.text, 
            })
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
                    todo={"new"}
                    setTitle={(title) => this.setTitle(title)}
                    setText={(text) => this.setText(text)}
                    id={this.props.navigation.state.params.newTodoId}
                />


                {this.state.downButton === true ?
                    <KeyboardAccessoryView
                        style={{ backgroundColor: Colors.purple, borderTopWidth: 0 }}>
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
        theme: state.theme.theme,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        add_todo: (todo) => { dispatch(todoActions.add_todo(todo)) },
        update_todo: (values) => {dispatch(todoActions.update_todo(values))},
        screen_time: (screen) => dispatch(analyticsActions.screen_time(screen)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen)
