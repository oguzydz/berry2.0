import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, I18nManager, Dimensions, TouchableOpacity } from 'react-native'

// Yardımcı Libs
import moment from 'moment'
import { Swipeable, RectButton } from 'react-native-gesture-handler';

// Redux
import { connect } from 'react-redux'
import * as todoActions from '../store/actions/todoActions';

// Styles & Components
import Icon from '../components/Icon'
import { Colors } from '../components/Colors';
import { styles } from './ItemStyles';


class Item extends Component {

    styles = () => {
        if (this.props.theme === "light") {
            return styles.light;
        } else {
            return styles.dark;
        }
    }


    renderRightAction = (text, color, x, progress, icon) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });

        const pressHandler = () => {
            this.close();

            if (icon === "more") {
                this.props.openMenu(this.props.todo.id)
            } else if (icon === "pin") {
                console.log("do pin")
            } else if (icon === "trash") {
                console.log("trash")
            }

        };
        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                    style={[this.styles().rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}>
                    <Icon name={icon} size={30} color={this.props.theme === "light" ? Colors.white : Colors.black} /><Text style={this.styles().actionText}>{text}</Text>
                </RectButton>
            </Animated.View>
        );
    };


    renderRightActions = progress => {

        return (
            <View style={{ width: 192, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
                {this.renderRightAction('More', this.props.theme === "light" ? Colors.gray : Colors.gray, 192, progress, 'more')}
                {this.renderRightAction('Pin', this.props.theme === "light" ? Colors.yellow : Colors.darkYellow, 128, progress, 'pin')}
                {this.renderRightAction("Trash", this.props.theme === "light" ? Colors.red : Colors.darkRed_600, 64, progress, 'trash')}
            </View>
        );
    }



    updateRef = ref => {
        this._swipeableRow = ref;
    };


    close = () => {
        this._swipeableRow.close();
    };


    calculateWordCountTitle = () => {
        const { title } = this.props.todo;

        if (title.length > 20) {
            return title.trim().slice(0, 20) + '...';
        } else {
            return title
        }

    }

    calculateWordCountText = () => {
        const { text } = this.props.todo;
        if (text.length > 100) {
            return text.trim().slice(0, 100) + '...';
        } else {
            return text
        }
    }


    calculcateDate = () => {
        const { editedAt } = this.props.todo;
        moment.updateLocale('en', {
            relativeTime: {
                future: '%s',
                past: '%s',
                s: 's',
                ss: '%ss',
                m: '1m',
                mm: '%dm',
                h: '1h',
                hh: '%dh',
                d: '1d',
                dd: '%dd',
                M: '1m',
                MM: '%dM',
                y: '1y',
                yy: '%dY'
            }
        });
        return moment(editedAt).fromNow()
    }

    goDetails = () => {
        const { nav, todo } = this.props;
        nav.push("DetailScreen", { id: todo.id })
    }





    renderTodo = () => {
        const { nav, todo, theme } = this.props;

        const todoUI =
            <View style={this.styles().todoUIBox}>
                <View style={this.styles().todoUIBoxLeftWrap}>
                    <View style={this.styles().calculateDateBox}>
                        <Text style={this.styles().calculateDateText}>{this.calculcateDate()}</Text>
                    </View>

                    {todo.isPinned === true ?
                        <View style={this.styles().pinBox}>
                            <Icon name="pin" size={20} color={theme === "light" ? Colors.purple : Colors.black} />
                        </View>
                        : null
                    }
                    {todo.isAlarmed === true ?
                        <View style={this.styles().isAlarmedBox}>
                            <Icon name="clock" size={20} color={theme === "light" ? Colors.white : Colors.black} />
                        </View>
                        : null
                    }
                </View>

                <View style={this.styles().swipeBox}>
                    <Swipeable
                        ref={this.updateRef}
                        friction={2}
                        leftThreshold={30}
                        rightThreshold={40}
                        renderRightActions={this.renderRightActions}>

                        <TouchableOpacity onPress={() => this.goDetails()}>
                            <View style={this.styles().contentWrap}>
                                <Text style={this.styles().title}>{this.calculateWordCountTitle()}</Text>
                                <Text style={this.styles().desc}>{this.calculateWordCountText()}</Text>
                            </View>

                        </TouchableOpacity>
                    </Swipeable>
                </View>
            </View>



        if (nav.state.routeName === "HomeScreen") {
            if (todo.isTrashed !== true) {
                return todoUI;
            }
        } else if (nav.state.routeName === "TrashScreen") {
            if (todo.isTrashed === true) {
                return todoUI;

            }
        }
    }

    render() {


        const { todo, screenName, theme } = this.props;

        // render Edilecekler: 

        /*
            Eğer sayfa adı home ise ona göre todoları filtrele
            ardından tarihlere göre başlıklar ata veya sol kısımda ne kadar oldu zamanı göster
            Üstüne tıklandığı zaman screen Animasyonla todo nun sayfasına git veya düzenleme sayfasına git
            editör olayını hallet
            Sağ kısımdan çekildiği zaman gelecek menüler
                *more
                    more olduğu zaman alttan menü çıkar
                        menü
                            move to trash
                            archive
                            share todo by text
                            copy todo identity
                *highlight yap en üste taşı,
                *trash butonu

            todo search kısmını oluştur

        */

        return (
            <View>
                {this.renderTodo()}
            </View>
        )
    }
}

export default Item

