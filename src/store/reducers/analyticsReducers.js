import * as actions from '../actions/actionTypes'
import { initalState } from '../../firebase/data'

const analyticsReducers = (state = initalState, action) => {
    switch (action.type) {
        case actions.SET_DEVICE:
            return {
                ...state,
                deviceName: action.payload.deviceName,
                deviceYearClass: action.payload.deviceYearClass
            }
        // Auth'ın için setup işlemi kullanıcı app'e ilk girdiğinde alınır.
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
        // Drawer Menü'de hangi buton menüsüne bastığını ölçüyor.
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

        // Kullanıcının hangi sayfada ne kadar süre geçirdiğini hesaplıyor
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