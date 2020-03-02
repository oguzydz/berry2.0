// Screen'lar import ediliyor.
import AddScreen from '../screens/Add/AddScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import TrashScreen from '../screens/Trash/TrashScreen';
import AboutScreen from '../screens/About/AboutScreen';
import EditScreen from '../screens/Edit/EditScreen';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


const navigator = createDrawerNavigator({
    HomeScreen,
    AddScreen,
    TrashScreen,
    AboutScreen,
    EditScreen,
})

export const AppContainer = createAppContainer(navigator);