import React, { Component } from 'react'
import { View, FlatList, Dimensions, Text, ScrollView } from 'react-native'

// Redux
import { connect } from 'react-redux'
import * as actions from '../store/actions/analyticsActions';

// Yardımcı Libs
import { AdMobBanner, AdMobInterstitial, PublisherBanner, AdMobRewarded } from 'expo-ads-admob';

// Styles & Components
import Item from '../components/Item'
import { Colors } from './Colors';
const { width } = Dimensions.get("window");


// Bu sayfada reklam istatistikleri toplanacak



class List extends Component {



    componentDidMount = () => {
        // console.log(this.props.todos)
    }

    openMenu = (todoId) => {
        this.props.openMenu(todoId)
    }

    styles = () => {
        if (this.props.theme === "light") {
            return styles.light;
        } else {
            return styles.dark;
        }
    }


    render() {

        return (
            <View style={{ flex: 1, }}>
                <FlatList
                    data={this.props.todos}
                    contentContainerStyle={{ paddingBottom: 100}}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        if (index / 3 === 1) {
                            return (
                                <View>
                                    <View style={this.styles().bannerBg}>

                                        <AdMobBanner
                                            bannerSize="banner"
                                            servePersonalizedAds
                                            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID
                                            // adUnitID="ca-app-pub-9786663498474045/7315132402"
                                            onDidFailToReceiveAdWithError={err => {
                                                console.log(err)
                                            }}
                                            onAdViewDidReceiveAd={() => {
                                                // console.log("Ad Recieved");
                                            }}
                                        />
                                    </View>
                                    <Item
                                        todo={item}
                                        nav={this.props.navigation}
                                        openMenu={this.openMenu}
                                        theme={this.props.theme}
                                    />
                                </View>
                            )
                        } else {
                            return (
                                <View>
                                    <Item
                                        todo={item}
                                        nav={this.props.navigation}
                                        openMenu={this.openMenu}
                                        theme={this.props.theme}
                                    />
                                </View>
                            )
                        }

                    }}
                />
                {/* <View style={{height: 80}}></View> */}
            </View>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        theme: state.theme.theme,
        todos: state.todos
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }


export default connect(mapStateToProps, null)(List);


const styles = {
    dark: {
        bannerBg: {
            backgroundColor: Colors.black,
            width: width,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 12,
            paddingTop: 12,
            borderTopWidth: 1,
            borderColor: Colors.white
        }
    },
    light: {
        bannerBg: {
            backgroundColor: Colors.purple,
            width: width,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 12,
            paddingTop: 12,
            borderTopWidth: 0.4,
            borderColor: Colors.white
        }
    },
}