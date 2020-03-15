import { Colors } from '../components/Colors';
export const styles = {
    light: {
        title: {
            fontSize: 22,
            paddingTop: 5,
            paddingBottom: 10,
            paddingLeft: 5,
            fontWeight: "500",
            color: Colors.white
        },
        desc: {
            paddingBottom: 10,
            paddingLeft: 5,
            color: Colors.white
        },

        leftAction: {
            flex: 1,
            backgroundColor: '#497AFC',
            justifyContent: 'center',
        },
        actionText: {
            color: Colors.white,
            fontSize: 16,
            backgroundColor: 'transparent',
            padding: 10,
        },
        rightAction: {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
        },
        todoUIBox: {
            flexDirection: "row",
            borderTopWidth: 0.4,
            borderColor: Colors.white
        },
        todoUIBoxLeftWrap: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: Colors.purple,
            padding: 10,
            paddingLeft: 0,
            paddingRight: 0
        },
        calculateDateBox: {
            backgroundColor: Colors.red,
            padding: 5,
            borderRadius: 4,
            paddingLeft: 9,
            paddingRight: 9
        },
        calculateDateText: {
            fontSize: 15,
            fontWeight: "600",
            color: Colors.white
        },
        pinBox: {
            backgroundColor: Colors.yellow,
            padding: 5,
            borderRadius: 4,
            paddingLeft: 13,
            paddingRight: 13,
            alignItems: "center",
            marginTop: 11
        },
        isAlarmedBox: {
            backgroundColor: Colors.red,
            padding: 5,
            borderRadius: 4,
            paddingLeft: 11,
            paddingRight: 11,
            alignItems: "center",
            marginTop: 10
        },
        swipeBox: {
            flex: 5,
            backgroundColor: Colors.purple,
            borderTopRightRadius: 0,
            borderBottomEndRadius: 0
        },
        contentWrap: {
            padding: 14,
            paddingLeft: 5,
            paddingBottom: 34,
            justifyContent: "center"
        }
    },
    dark: {
        title: {
            fontSize: 22,
            paddingTop: 5,
            paddingBottom: 10,
            paddingLeft: 5,
            fontWeight: "500",
            color: Colors.gray
        },
        desc: {
            paddingBottom: 10,
            paddingLeft: 5,
            color: Colors.gray
        },
        hr: {
            height: 4,
            backgroundColor: Colors.gray,
            borderBottomLeftRadius: 5,
            bottom: 0
        },
        leftAction: {
            flex: 1,
            backgroundColor: '#497AFC',
            justifyContent: 'center',
        },
        actionText: {
            color: Colors.black,
            fontSize: 16,
            backgroundColor: 'transparent',
            padding: 10,
        },
        rightAction: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        todoUIBox: {
            flexDirection: "row",
            borderTopWidth: 1,
            borderColor: Colors.gray
        },
        todoUIBoxLeftWrap: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: Colors.black,
            padding: 10,
            paddingLeft: 0,
            paddingRight: 0
        },
        calculateDateBox: {
            backgroundColor: Colors.gray,
            padding: 5,
            borderRadius: 4,
            paddingLeft: 9,
            paddingRight: 9
        },
        calculateDateText: {
            fontSize: 15,
            fontWeight: "600",
            color: Colors.black
        },
        pinBox: {
            backgroundColor: Colors.darkYellow,
            padding: 5,
            borderRadius: 4,
            paddingLeft: 13,
            paddingRight: 13,
            alignItems: "center",
            marginTop: 11
        },
        isAlarmedBox: {
            backgroundColor: Colors.darkRed_600,
            padding: 5,
            borderRadius: 4,
            paddingLeft: 11,
            paddingRight: 11,
            alignItems: "center",
            marginTop: 10
        },
        swipeBox: {
            flex: 5,
            backgroundColor: Colors.black,
            borderTopRightRadius: 0,
            borderBottomEndRadius: 0
        },
        contentWrap: {
            padding: 14,
            paddingLeft: 5,
            paddingBottom: 34,
            justifyContent: "center"
        }
    }
}