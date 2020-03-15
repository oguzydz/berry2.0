import * as actions from './actionTypes';


export const set_device = (device) => async dispatch => {
    dispatch({
        type: actions.SET_DEVICE,
        payload: device
    })
}

export const auth_user = (userAuth) => async dispatch => {
    dispatch({
        type: actions.AUTH_USER,
        payload: userAuth
    })
}

export const screen_clicked = (screen) => async dispatch => {
    dispatch({
        type: actions.SCREEN_CLICKED,
        payload: screen
    })
}


export const screen_time = (screen) => async dispatch => {
    dispatch({
        type: actions.SCREEN_TIME,
        payload: screen
    })
}


export const buttons_clicked = (button) => async dispatch => {
    dispatch({
        type: actions.BUTTONS_CLICKED,
        payload: button
    })
}