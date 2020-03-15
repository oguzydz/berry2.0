import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, Linking } from 'react-native';

// Yardımcı Libs
import Icon from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';
import { Backdrop } from "react-native-backdrop";


// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/analyticsActions';

// Styles & Components
import Header from '../../components/Header';
import { styles } from './Styles';
const { width, height } = Dimensions.get('window');





class AboutScreen extends Component {

    componentDidMount = () => {
        this.props.navigation.addListener('willFocus', () => {
            const timer = setInterval(() => {
                this.props.screen_time("About")
            }, 1000)

            this.props.navigation.addListener('willBlur', () => {
                clearInterval(timer)
            })
        })

    }


    goSocial = (where) => {

        if (where === "oguzydz") {
            this.buttonClicked("WebSite")
            this.setState((state) => ({
                ...state,
                goingUrl: 'https://' + where + '.me',
                isVisible: true
            }))
        } else {
            this.buttonClicked(where)
            this.setState((state) => ({
                ...state,
                goingUrl: where === "linkedin" ? 'https://www.linkedin.com/in/o%C4%9Fuz-yildiz-079790143/' : 'https://' + where + '.com/oguzydz',
                isVisible: true
            }))
        }
    }

    getStarted = () => {
        const url = 'mailto:oguzydzapp@gmail.com?subject=Berry\'den%20Geliyorum&amp;body=Uygulama%20veya%20ba%C5%9Fka%20fikirlerim%20var%3A%0A';
        Linking.openURL(url);
    }

    buttonClicked = (button) => {
        this.props.buttons_clicked(button);
    }

    state = {
        isVisible: false,
        goingUrl: '',
    }

    popupView = () => {


        const review = <Backdrop
            visible={this.state.isVisible}
            handleOpen={() => this.setState({ isVisible: true })}
            handleClose={() => this.setState({ isVisible: false })}
            onClose={() => { }}
            swipeConfig={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80,
            }}
            animationConfig={{
                speed: 14,
                bounciness: 4,
            }}
            overlayColor="rgba(0,0,0,0.65)"
            backdropStyle={{
                backgroundColor: '#fff',
                height: height - 60,
                width: width - 50,
                alignSelf: "center"
            }}>
            <View style={{ width: width - 80, height: height - 130 }}>
                <WebView
                    style={{ borderRadius: 20, borderBottomEndRadius: 0, borderBottomLeftRadius: 0 }}
                    source={{ uri: this.state.goingUrl }}
                />
                <TouchableOpacity
                    style={[{ position: "absolute", zIndex: 2, marginBottom: 0, bottom: 30, alignSelf: "center", }, this.props.theme == "light" ? styles.light.button : styles.dark.button]}
                    onPress={() => Linking.openURL(this.state.goingUrl)}
                >
                    <Text style={styles.light.buttonText}>
                        GO DIRECT!
                    </Text>
                </TouchableOpacity>
            </View>
        </Backdrop>

        if (this.state.isVisible === true && this.state.goingUrl !== '') {
            return review
        } else {
            return null
        }

    }


    render() {
        const { theme } = this.props;

        return (
            <View style={theme === "light" ? styles.light.container : styles.dark.container}>

                <Header navigation={this.props.navigation} />

                {this.popupView()}

                <Text style={theme == "light" ? styles.light.h1 : styles.dark.h1}>
                    I'm {"\n"}Oğuz Yıldız!
                </Text>

                <Text style={theme == "light" ? styles.light.h4 : styles.dark.h4}>
                    I like dabbling in various parts of frontend development and like to learn about new technologies.
                </Text>

                <View style={styles.light.hr}></View>

                <View style={styles.light.socialIcons}>
                    <Icon
                        onPress={() => this.goSocial('Linkedin')}
                        style={theme == "light" ? styles.light.icon : styles.dark.icon}
                        name="logo-linkedin"
                        size={35}
                    />
                    <Icon
                        onPress={() => this.goSocial('Github')}
                        style={theme == "light" ? styles.light.icon : styles.dark.icon}
                        name="logo-github"
                        size={35}
                    />
                    <Icon
                        onPress={() => this.goSocial('Twitter')}
                        style={theme == "light" ? styles.light.icon : styles.dark.icon}
                        name="logo-twitter"
                        size={35}
                    />
                    <Icon
                        onPress={() => this.goSocial('Instagram')}
                        style={theme == "light" ? styles.light.icon : styles.dark.icon}
                        name="logo-instagram"
                        size={35}
                    />
                    <Icon
                        onPress={() => this.goSocial('oguzydz')}
                        style={theme == "light" ? styles.light.icon : styles.dark.icon}
                        name="ios-desktop"
                        size={35}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => this.getStarted()}
                    style={theme == "light" ? styles.light.button : styles.dark.button}>
                    <Text style={styles.light.buttonText}>
                        LET'S GET STARTED!
                    </Text>
                </TouchableOpacity>


            </View>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        screen_time: (screen) => dispatch(actions.screen_time(screen)),
        buttons_clicked: (button) => dispatch(actions.buttons_clicked(button)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)



