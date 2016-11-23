/**
 * Created by youngil on 2016-11-23.
 */
import * as types from '../actions/ActionsTypes';

const initialState = {
    //지역
    location:'통신에러',

    //현재온도
    current_temp: '통신에러',
};

export default function weather (state = initialState, action) {
    switch (action.type) {
        case types.CURRENT_TEMP:
            return {
                ...state,
                current_temp: action.current_temp,
                location:action.location
            };
        default:
            return state;
    }
}