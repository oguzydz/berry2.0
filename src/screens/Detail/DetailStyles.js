import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import { Colors } from '../../components/Colors';
const { width, height } = Dimensions.get('window');

export const styles = {
    light: {
        container: {
            flex: 1,
            backgroundColor: Colors.purple,
        },
        popupContainer: {
            // width: width / 1.5,
            width: width,
            height: height + Constants.statusBarHeight,
            top: -Constants.statusBarHeight,
            position: "absolute",
            flex: 1,
            paddingTop: Constants.statusBarHeight,
        }
    },
    dark: {
        container: {
            flex: 1,
            backgroundColor: Colors.black,
        },
        popupContainer: {
            // width: width / 1.5,
            width: width,
            height: height,
            right: 0,
            position: "fixed",
            zIndex: 10,
            backgroundColor: "red",
            flex: 1,
            paddingTop: Constants.statusBarHeight,
        }
    },
}