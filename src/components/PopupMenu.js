import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'

// Yardımcı Libs
import { Backdrop } from 'react-native-backdrop'


import Icon from './Icon';
import { Colors } from './Colors';

const { width, height } = Dimensions.get('window')



export default class PopupMenu extends Component {

    // Bu class içinde menü ile todo işlemleri bağlanacak.


    renderMenu = () => {


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
            visible={this.props.isVisible}
            // handleOpen={() => this.props.actionsMenu("openMenu")}
            handleClose={() => this.props.actionsMenuClose()}
            onClose={() => { }}
            swipeConfig={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80,
            }}
            animationConfig={{
                speed: 14,
                bounciness: 4,
            }}
            overlayColor="rgba(0,0,0,0.5)"
            backdropStyle={{
                backgroundColor: '#fff',
                height: height / 1.5,
                width: width - 50,
                alignSelf: "center",
                bottom: 0,
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
            </View>
        </Backdrop>

        return review;


    }

    render() {
        return (
            // this.props.isVisible === true ? this.renderMenu() : null
            this.renderMenu()
        )
    }
}
