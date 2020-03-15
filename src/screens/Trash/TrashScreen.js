import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import List from '../../components/List';
import Icon from '../../components/Icon';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/analyticsActions';

import Header from '../../components/Header';
import { Backdrop } from 'react-native-backdrop'
import { Colors } from '../../components/Colors';

const { width, height } = Dimensions.get('window')

class TrashScreen extends Component {

    componentDidMount = () => {
        this.props.navigation.addListener('willFocus', () => {
            const timer = setInterval(() => {
                this.props.screen_time("Trash")
            }, 1000)

            this.props.navigation.addListener('willBlur', () => {
                clearInterval(timer)
            })
        })

    }


    getState = () => {
        console.log(this.props.state.analytics.statistics.ScreensSessionTime)
    }


    state = {
        isVisible: false
    }

    popupView = () => {

        this.menu = [{
            text: "Move to Trash",
            icon: "trash",
            id: 1
        }, {
            text: "Archive",
            icon: "archive",
            id: 2
        }, {
            text: "Copy All Text",
            icon: "copy",
            id: 3
        }, {
            text: "Share",
            icon: "share",
            id: 4
        }, {
            text: "Set Alarm",
            icon: "clock",
            id: 5
        }]



        const review = <Backdrop
            visible={this.state.isVisible}
            handleOpen={() => this.setState({ isVisible: true })}
            handleClose={() => this.setState({ isVisible: false })}
            onClose={() => { }}
            swipeConfig={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80,
            }}
            animationConfig={{
                speed: 14,
                bounciness: 4,
            }}
            overlayColor="rgba(0,0,0,0.2)"
            backdropStyle={{
                backgroundColor: '#fff',
                height: height / 1.5,
                width: width - 50,
                alignSelf: "center",
                bottom: 60,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
            }}>
            <View style={{ height: "100%" }}>
                <View style={{ height: 60, marginBottom: 15, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 19, fontWeight: "bold" }}>ACTIONS</Text>
                </View>
                {this.menu.map((item, key) => (
                    <View key={item.id}>
                        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10, marginBottom: 10, }}>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Icon name={item.icon} size={25} />
                            </View>
                            <View style={{ flex: 5, justifyContent: "center" }}>
                                <Text style={{ fontSize: 16 }}>{item.text}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ height: 1, width: "100%", alignSelf: "flex-end", backgroundColor: "#f5f5f5" }}></View>
                    </View>
                ))}
                <TouchableOpacity
                    onPress={() => this.setState({ isVisible: false })}
                    style={{ alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: Colors.red, width: width - 200, padding: 13, alignSelf: "center", borderRadius: 5, position: "absolute", bottom: 0 }}>
                    <Text style={{ fontWeight: "bold", color: Colors.red }}>CLOSE ACTIONS</Text>
                </TouchableOpacity>
            </View>
        </Backdrop>

        if (this.state.isVisible === true) {
            return review
        } else {
            return null
        }

    }

    openMenu = (todoId) => {
        this.setState({ isVisible: true })
        console.log(todoId)
    }


    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme === "light" ? "#5639a1" : "#000", }]}>
                <Header navigation={this.props.navigation} />

                <List
                    navigation={this.props.navigation}
                    screenName={this.props.navigation.state.routeName}
                    openMenu={this.openMenu}
                />

                {this.popupView()}
            </View>
        )
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(TrashScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5639a1",
    }
})