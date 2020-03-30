import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'

// Redux
import { connect } from 'react-redux'
import * as analyticsActions from '../store/actions/analyticsActions'
import * as todoActions from '../store/actions/todoActions'

// Styles & Components
import { styles } from './AddButtonStyles';
import Icon from './Icon';
import { Colors } from './Colors';
const { width } = Dimensions.get("window")


class AddButton extends Component {

    styles = () => {
        if (this.props.theme === "light") {
            return styles.light;
        } else {
            return styles.dark;
        }
    }

    determineId = () => {
        if (this.props.todos.length === 0) {
            return 0
        } else {
            return this.props.todos.length + 1
        }
    }


    addButton = () => {
        this.props.start_todo(this.determineId())
        this.props.nav.push("AddScreen", { newTodoId: this.determineId() })
    }


    render() {
        return (
            <View
                style={[this.styles().fixedButtonView, this.props.todos.length < 0 ? { width: width } : { width: width - (width - 105) }]}>
                {this.props.todos.length > 0 ? null :
                    <View style={this.styles().alertView}>
                        <View style={this.styles().textView}>
                            <Text style={this.styles().text}>Let's Start from here!</Text>
                        </View>
                        <View style={this.styles().textIconView}>
                            <Icon
                                size={30}
                                name="arrow-forward"
                                color={Colors.black}
                            />
                        </View>
                    </View>
                }
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={this.styles().fixedButton}
                        onPress={() => this.addButton()}>
                        <Icon
                            name="add"
                            style={this.styles().fixedAddIcon}
                            size={50}
                            color={this.styles().fixedAddIcon.color}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
        todos: state.todos
    }
}


const mapDispatchToProps = dispatch => {
    return {
        button_clicked: (button) => dispatch(analyticsActions.buttons_clicked(button)),
        start_todo: (todoId) => dispatch(todoActions.start_todo(todoId)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddButton) 