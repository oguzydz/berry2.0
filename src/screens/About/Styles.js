import { Colors } from '../../components/Colors';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = {
    light: {
        container: {
            backgroundColor: Colors.purple,
            flex: 1,
            alignItems: "center",
        },
        h1: {
            fontSize: 40,
            color: Colors.white,
            fontWeight: "bold",
            width: width - 40,
        },
        h4: {
            fontSize: 17,
            color: Colors.white,
            paddingTop: 20,
            width: width - 40
        },
        hr: {
            width: width - 40,
            height: 1,
            backgroundColor: Colors.gray,
            marginTop: 20,
            marginBottom: 20
        },
        socialIcons: {
            width: width - 40,
            flexDirection: "row",
            justifyContent: 'center'
        },
        icon: {
            color: Colors.white,
            marginLeft: 20,
            marginRight: 20,
        },
        button: {
            width: width - 200,
            backgroundColor: Colors.red,
            padding: 15,
            borderRadius: 10,
            marginTop: 100
        },
        buttonText: {
            color: Colors.white,
            textAlign: "center",
            fontWeight: "bold"
        }
    },
    dark: {
        container: {
            flex: 1,
            backgroundColor: Colors.black,
            alignItems: "center",
        },
        h1: {
            fontSize: 40,
            color: Colors.gray,
            fontWeight: "bold",
            width: width - 40,
        },
        h4: {
            fontSize: 17,
            color: Colors.gray,
            paddingTop: 20,
            width: width - 40
        },
        hr: {
            width: width - 40,
            height: 1,
            backgroundColor: Colors.gray,
            marginTop: 20,
            marginBottom: 20
        },
        socialIcons: {
            width: width - 40,
            flexDirection: "row",
            justifyContent: 'center'
        },
        icon: {
            color: Colors.gray,
            fontSize: 35,
            marginLeft: 20,
            marginRight: 20,
        },
        button: {
            width: width - 200,
            backgroundColor: Colors.darkRed,
            padding: 15,
            borderRadius: 10,
            marginTop: 100
        },
        buttonText: {
            color: Colors.gray,
            textAlign: "center",
            fontWeight: "bold"
        }
    }
}