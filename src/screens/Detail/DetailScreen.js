
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import Header from '../../components/Header';


class DetailScreen extends Component {
    componentDidMount = () => {
        console.log(this.props.navigation.state.params.id)
    }

    getTodo = () => {
        const { id } = this.props.navigation.state.params;
        const { todos } = this.props
        const getTodo = todos.filter(todo => todo.id === id);
        return getTodo[0];
    }

    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} />
                <Text style={{ color: "black" }}> {this.getTodo().text} </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps, null)(DetailScreen)