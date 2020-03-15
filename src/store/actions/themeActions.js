import * as actions from './actionTypes';

export const theme_light = () => async dispatch => {
    dispatch({
        type: actions.THEME_LIGHT
    })
}

export const theme_dark = () => async dispatch => {
    dispatch({
        type: actions.THEME_DARK
    })
}
