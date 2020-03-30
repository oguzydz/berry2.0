import { Colors } from './Colors';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const SIZE = 65
export const styles = {
    light: {
        fixedButtonView: {
            position: "absolute",
            bottom: 0,
            padding: 20,
            flexDirection: "row",
            alignSelf: "flex-end",
            zIndex: 2
        },
        fixedButton: {
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-end",
            backgroundColor: Colors.red,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
        },
        fixedAddIcon: {
            color: Colors.white
        },
        alertView: {
            flex: 4,
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
            paddingRight: 20
        },
        textView: {
            backgroundColor: Colors.yellow,
            padding: 10,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20
        },
        text: {
            fontSize: 19,
            fontWeight: "bold"
        },
        textIconView: {
            backgroundColor: Colors.yellow,
            padding: 5,
            paddingLeft: 0,
            paddingRight: 13,
            borderTopRightRadius: 5,
            borderBottomEndRadius: 5
        }

    },
    dark: {
        fixedButtonView: {
            position: "absolute",
            bottom: 0,
            padding: 20,
            flexDirection: "row",
            alignSelf: "flex-end",
            zIndex: 2
        },
        fixedButton: {
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-end",
            backgroundColor: Colors.darkRed_600,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
        },
        fixedAddIcon: {
            color: Colors.gray
        },
        alertView: {
            flex: 4,
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
            paddingRight: 20
        },
        textView: {
            backgroundColor: Colors.darkYellow,
            padding: 10,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20
        },
        text: {
            fontSize: 19,
            fontWeight: "bold",
            color: Colors.black
        },
        textIconView: {
            backgroundColor: Colors.darkYellow,
            padding: 5,
            paddingLeft: 0,
            paddingRight: 13,
            borderTopRightRadius: 5,
            borderBottomEndRadius: 5
        }

    }
}