// import React, { Component } from 'react'
// import { View, StyleSheet, Text, TouchableOpacity, Animated, I18nManager } from 'react-native'
// import { connect } from 'react-redux';
// import * as actions from '../../store/actions/analyticsActions';
// import * as themeActions from '../../store/actions/themeActions';

// import Header from '../../components/Header';

// import { Swipeable, RectButton } from 'react-native-gesture-handler';

// import AppleStyleSwipeableRow from '../../components/Swipe';

// class HomeScreen extends Component {


//     componentDidMount = () => {
//         this.focus = this.props.navigation.addListener('willFocus', () => {
//             const timer = setInterval(() => {
//                 this.props.screen_time("Home")
//             }, 1000)

//             this.props.navigation.addListener('willBlur', () => {
//                 clearInterval(timer)
//             })
//         })

//     }

//     getState = () => {
//         console.log(this.props.state.analytics.statistics)
//     }


//     state = {
//         isArchive: false
//     }

//     LeftActions = (progress, dragX) => {

//         const scale = dragX.interpolate({
//             inputRange: [0, 50, 100, 101],
//             outputRange: [-20, 0, 0, 1],
//             // extrapolate: 'clamp'
//         })

//         return (
//             <RectButton onPress={this.close} style={{ backgroundColor: "#388e3c", justifyContent: "center", flex: 1, padding: 10 }}>
//                 <Animated.Text style={{ color: "white", fontWeight: "600", transform: [{ translateX: scale }] }}>Delete</Animated.Text>
//             </RectButton >
//         )
//     }


//     renderLeftActions = (progress, dragX) => {
//         const trans = dragX.interpolate({
//             inputRange: [0, 50, 100, 101],
//             outputRange: [-20, 0, 0, 1],
//         });
//         return (
//             <RectButton style={styles.leftAction} onPress={this.close}>
//                 <Animated.Text
//                     style={[
//                         styles.actionText,
//                         {
//                             transform: [{ translateX: trans }],
//                         },
//                     ]}>
//                     Archive
//             </Animated.Text>
//             </RectButton>
//         );
//     };
//     renderRightAction = (text, color, x, progress) => {
//         const trans = progress.interpolate({
//             inputRange: [0, 1],
//             outputRange: [x, 0],
//         });
//         const pressHandler = () => {
//             this.close();
//             alert(text);
//         };
//         return (
//             <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
//                 <RectButton
//                     style={[styles.rightAction, { backgroundColor: color }]}
//                     onPress={pressHandler}>
//                     <Text style={styles.actionText}>{text}</Text>
//                 </RectButton>
//             </Animated.View>
//         );
//     };


//     renderRightActions = progress => (
//         <View style={{ width: 192, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
//             {this.renderRightAction('More', '#C8C7CD', 192, progress)}
//             {this.renderRightAction('Flag', '#ffab00', 128, progress)}
//             {this.renderRightAction('More', '#dd2c00', 64, progress)}
//         </View>
//     );
//     updateRef = ref => {

//         this._swipeableRow = ref;
//     };
//     close = () => {
//         this._swipeableRow.close();
//     };


//     render() {

//         return (
//             <View style={[styles.container, { backgroundColor: this.props.theme === "light" ? "#5639a1" : "#000", }]}>
//                 <Header navigation={this.props.navigation} />
//                 <TouchableOpacity onPress={() => this.props.navigation.navigate("TrashScreen")}>
//                     <Text>go trash</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={this.getState}>
//                     <Text style={{ fontSize: 30, color: "white" }}>getState</Text>
//                 </TouchableOpacity>


//                 <Swipeable
//                     ref={this.updateRef}
// onSwipeableLeftOpen = {() => console.log("deneme")}
//                     friction={2}
//                     leftThreshold={30}
//                     rightThreshold={40}
//                     renderLeftActions={this.renderLeftActions}
//                     renderRightActions={this.renderRightActions}>

//                     <View style={{ backgroundColor: "white", padding: 20 }}>
//                         <Text>Deneme yazısıdır. Deneme yazısıdır.Deneme yazısıdır. Deneme yazısıdır.Deneme yazısıdır. Deneme yazısıdır.</Text>
//                     </View>
//                 </Swipeable>



//             </View>
//         )
//     }
// }





// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#5639a1",
//     },
//     leftAction: {
//         flex: 1,
//         backgroundColor: '#497AFC',
//         justifyContent: 'center',
//     },
//     actionText: {
//         color: 'white',
//         fontSize: 16,
//         backgroundColor: 'transparent',
//         padding: 10,
//     },
//     rightAction: {
//         alignItems: 'center',
//         flex: 1,
//         justifyContent: 'center',
//     },
// })

// const mapStateToProps = (state) => {
//     return {
//         theme: state.theme.theme,
//         state: state
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         screen_time: (screen) => dispatch(actions.screen_time(screen)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

