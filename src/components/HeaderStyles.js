import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import { Colors } from './Colors';
const { width, height } = Dimensions.get('window');

export const styles = {
    light: {
        container: {
            width: width,
            height: 95,
            paddingTop: Constants.statusBarHeight,
            flexDirection: "row",
            backgroundColor: Colors.purple,
        },
        left: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        center: {
            flex: 4,
            alignItems: "center",
            justifyContent: "center"
        },
        centerText: {
            fontSize: 20,
            fontWeight: "bold",
            color: Colors.white
        },
        right: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        themeBtn: {
            paddingTop: 3,
            paddingBottom: 3,
            borderRadius: 40,
            backgroundColor: "#000",
            paddingRight: 9,
            paddingLeft: 9,
        },
        popupContainer: {
            width: width / 1.5,
            height: height,
            right: 0,
            position: "absolute",
            zIndex: 3,
            backgroundColor: "red",
            flex: 1,
            paddingTop: Constants.statusBarHeight,
        },
        infoBtn: {
            borderRadius: 30,
            // backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#fff",
            padding: 16,
            paddingTop: 0,
            paddingBottom: 0,
        }

    },
    dark: {
        container: {
            width: width,
            height: 95,
            paddingTop: Constants.statusBarHeight,
            flexDirection: "row"
        },
        left: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        center: {
            flex: 4,
            alignItems: "center",
            justifyContent: "center"
        },
        centerText: {
            fontSize: 20,
            fontWeight: "bold",
            color: Colors.gray
        },
        right: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        themeBtn: {
            paddingTop: 3,
            paddingBottom: 3,
            borderRadius: 40,
            backgroundColor: "#8cbed6",
            paddingRight: 7,
            paddingLeft: 7,
        },
        popupContainer: {
            width: width / 1.5,
            height: height,
            right: 0,
            position: "absolute",
            zIndex: 2,
            backgroundColor: "red",
            flex: 1
        }
    }
}