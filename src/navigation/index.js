import React from 'react'
import { Dimensions } from 'react-native'


// Screen'lar import ediliyor. 

//Drawer Screens
import HomeScreen from '../screens/Home/HomeScreen';
import TrashScreen from '../screens/Trash/TrashScreen';
import AboutScreen from '../screens/About/AboutScreen';

// StackNavigator Screens
import AddScreen from '../screens/Add/AddScreen';
import EditScreen from '../screens/Edit/EditScreen';
import DetailScreen from '../screens/Detail/DetailScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';


import Drawer from './Drawer';
import Example from '../components/Example';



const mainDrawer = createDrawerNavigator({
    HomeScreen,
    TrashScreen,
    AboutScreen,
    AddScreen,
    EditScreen,
    DetailScreen: {
        screen: DetailScreen,
        navigationOptions: {
            drawerLockMode: 'locked-closed'
        }
    }
}, {
    drawerType: "slide",
    keyboardDismissMode: "none",
    drawerPosition: "left",
    overlayColor: 1,
    contentComponent: Drawer,
    drawerWidth: Dimensions.get('window').width / 1.5,
    hideStatusBar: true
})

const Stacks = createStackNavigator({
    mainDrawer: {
        screen: mainDrawer,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        }
    },
    AddScreen: {
        screen: AddScreen,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        }
    },
    EditScreen: {
        screen: EditScreen,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        }
    },
    DetailScreen: {
        screen: DetailScreen,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        },
    },
    Example: {
        screen: Example,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        },
    },
}, {
    // initialRouteName: "Example",
    // initialRouteName: "DetailScreen"
})


const Stack = createSwitchNavigator({
    Stacks,
    Drawer,
});



export const AppContainer = createAppContainer(Stack);

// export const AppNavigator = createAppContainer(navigator);