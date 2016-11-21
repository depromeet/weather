/**
 * Created by youngil on 2016-11-21.
 */

import * as types from '../actions/ActionsTypes';

const initialState = {
    number: 0,
    dumbObject: {
        d: 0,
    },

};

export default function avatar (state = initialState, action) {
    console.log('in the reducer avatar: ',action);
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1,
                // dumbObject: {...state.dumbObject, u: 0}
                // showForm:state.showForm
            };
        default:
            return state;
    }
}