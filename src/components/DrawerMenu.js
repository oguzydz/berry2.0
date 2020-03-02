import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerMenu extends Component {

    state = {
        menu: [
            {
                id: 1,
                navOptionThumb: 'ios-albums',
                navOptionName: 'TODOS',
                screenToNavigate: 'Home',
            },
            {
                id: 2,
                navOptionThumb: 'ios-trash',
                navOptionName: 'TRASH',
                screenToNavigate: 'Trash',
            },
            {
                id: 3,
                navOptionThumb: 'ios-finger-print',
                navOptionName: 'ABOUT',
                screenToNavigate: 'About',
            }
        ]
    }

    render() {

        return (
            <View style={styles.container}>
                {this.state.menu.map((item, key) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => {
                            global.currentScreenIndex = key;
                            this.props.navigation.navigate(item.screenToNavigate);
                        }}
                    >
                        <View

                            style={[
                                {
                                    backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
                                }
                            ]}
                        >
                            <View style={{ marginRight: 10, marginLeft: 20 }}>

                                <Icon
                                    name={item.navOptionThumb}
                                    
                                />

                            </View>

                            <Text
                                style={[
                                    
                                    {
                                        fontWeight: global.currentScreenIndex === key ? 'bold' : 'normal',

                                    }
                                ]}
                            >
                                {item.navOptionName}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fefefe'
    }
})
