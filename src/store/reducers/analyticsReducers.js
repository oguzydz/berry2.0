import * as actions from '../actions/actionTypes'

const initalState = {
    lastChecked: '', //
    userFirebaseId: '', //
    createdAtFBAccount: '', //
    lastLoginFB: '',//
    deviceName: '',//
    deviceYearClass: '',//
    appUserId: '',//
    statistics: {
        lastSession: '',
        lastSessionLoginDate: '',
        lastSessionTotalTime: '',
        TotalSessionTime: '',
        ScreensSessionTime: {
            HomeScreen: 0, // screen adı burada olacak ve string olarak süre eklenecek + olarak
            TrashScreen: 0,
            AboutScreen: 0,
            EditScreen: 0,
            AddScreen: 0,
        },
        ButtonsClicked: {
            Add: '',
            Theme: '',
            Edit: '',
            Trash: '',
            DeleteAll: '',
            Recycle: '',
            About: {
                Linkedin: '',
                Github: '',
                Twitter: '',
                Instagram: '',
                WebSite: '',
                GetStarted: '',

            },
            Menu: {
                Home: 0,
                About: 0,
                Trash: 0,
            },
            Dark: '',
            Light: '',
        },
        ThemeSessionTime: {
            light: '',
            dark: '',
        },
        Ads: {
            HomeBanner: '',
            TrashBanner: '',
            PopupAds: '',
        },
        isSync: false,
        isAnonymous: true,
        todos: [],
        userInfo: {
            username: '',
            password: '',
            email: '',
        }
    }
}

const analyticsReducers = (state = initalState, action) => {
    switch (action.type) {
        case actions.SET_DEVICE:
            return {
                ...state,
                deviceName: action.payload.deviceName,
                deviceYearClass: action.payload.deviceYearClass
            }
        case actions.AUTH_USER:
            return {
                ...state,
                appUserId: action.payload.appUserId,
                lastLoginFB: action.payload.lastLoginFB,
                lastChecked: action.payload.lastChecked,
                isAnonymous: action.payload.isAnonymous,
                userFirebaseId: action.payload.userFirebaseId,
                createdAtFBAccount: action.payload.createdAtFBAccount,
            }
        case actions.SCREEN_CLICKED:
            if (action.payload === "Home") {
                return {
                    ...state,
                    statistics: {
                        ...state.statistics,
                        ButtonsClicked: {
                            ...state.statistics.ButtonsClicked,
                            Menu: {
                                ...state.statistics.ButtonsClicked.Menu,
                                Home: state.statistics.ButtonsClicked.Menu.Home + 1
                            }
                        }
                    }
                }
            } else if (action.payload === "Trash") {
                return {
                    ...state,
                    statistics: {
                        ...state.statistics,
                        ButtonsClicked: {
                            ...state.statistics.ButtonsClicked,
                            Menu: {
                                ...state.statistics.ButtonsClicked.Menu,
                                Trash: state.statistics.ButtonsClicked.Menu.Trash + 1
                            }
                        }
                    }
                }
            } else if (action.payload === "About") {
                return {
                    ...state,
                    statistics: {
                        ...state.statistics,
                        ButtonsClicked: {
                            ...state.statistics.ButtonsClicked,
                            Menu: {
                                ...state.statistics.ButtonsClicked.Menu,
                                About: state.statistics.ButtonsClicked.Menu.About + 1
                            }
                        }
                    }
                }
            }

        case actions.SCREEN_TIME:
            if (action.payload === "Trash") {
                return {
                    ...state,
                    statistics: {
                        ...state.statistics,
                        ScreensSessionTime: {
                            ...state.statistics.ScreensSessionTime,
                            TrashScreen: state.statistics.ScreensSessionTime.TrashScreen + 1
                        }
                    }
                }
            } else if (action.payload === "About") {
                return {
                    ...state,
                    statistics: {
                        ...state.statistics,
                        ScreensSessionTime: {
                            ...state.statistics.ScreensSessionTime,
                            AboutScreen: state.statistics.ScreensSessionTime.AboutScreen + 1
                        }
                    }
                }
            } else if (action.payload === "Edit") {
                return {
                    ...state,
                    statistics: {
                        ...state.statistics,
                        ScreensSessionTime: {
                            ...state.statistics.ScreensSessionTime,
                            Edit: state.statistics.ScreensSessionTime.EditScreen + 1
                        }
                    }
                }
            } else if (action.payload === "Add") {
                return {
                    ...state,
                    statistics: {
                        ...state.statistics,
                        ScreensSessionTime: {
                            ...state.statistics.ScreensSessionTime,
                            AddScreen: state.statistics.ScreensSessionTime.AddScreen + 1
                        }
                    }
                }
            } else if (action.payload === "Home") {
                return {
                    ...state,
                    statistics: {
                        ...state.statistics,
                        ScreensSessionTime: {
                            ...state.statistics.ScreensSessionTime,
                            HomeScreen: state.statistics.ScreensSessionTime.HomeScreen + 1
                        } 
                    }
                }


            }
    }
    return state;
}

export default analyticsReducers;