import React from 'react'
import {Dimensions} from 'react-native'


// Screen'lar import ediliyor.
import AddScreen from '../screens/Add/AddScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import TrashScreen from '../screens/Trash/TrashScreen';
import AboutScreen from '../screens/About/AboutScreen';
import EditScreen from '../screens/Edit/EditScreen';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Drawer from './Drawer';


const navigator = createDrawerNavigator({
    HomeScreen,
    AddScreen,
    TrashScreen,
    AboutScreen,
    EditScreen,
}, {
    drawerType: "slide",
    keyboardDismissMode: "none",
    drawerPosition: "left",
    overlayColor: 1,
    contentComponent: Drawer,
    drawerWidth: Dimensions.get('window').width / 1.5,
})

export const AppContainer = createAppContainer(navigator);