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

        editorContainer: {
            zIndex: -1,
            backgroundColor: Colors.purple,
        },
        textContainer: {
            zIndex: -1,
            backgroundColor: Colors.purple,
            marginBottom: 0
        },


        popupContainer: {
            // width: width / 1.5,
            width: width,
            height: height + Constants.statusBarHeight,
            top: -Constants.statusBarHeight,
            position: "absolute",
            flex: 1,
            paddingTop: Constants.statusBarHeight,
        },
        titleInput: {
            width: width,
            height: 70,
            color: Colors.white,
            fontSize: 20,
            padding: 20,
            backgroundColor: Colors.purple,
        },
        textInput: {
            width: width,
            color: Colors.white,
            fontSize: 20,
            padding: 20,
            backgroundColor: Colors.purple,
            borderBottomColor: Colors.white,
            marginBottom: 10,
            height: height - 155
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