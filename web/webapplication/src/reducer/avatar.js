/**
 * Created by youngil on 2016-11-21.
 */

const initialState = {
    //얼굴표정
    face:{
        emotion:''
    },

    //의상
    wear: {
        top: '',
        middle: '',
        bottom: '',
    },
};

export default function avatar(state = initialState, action) {
    console.log('in the reducer avatar: ', action);
    switch (action.type) {
        case 'CURRENT_TEMP':
            return {
                ...state,
                // number: state.number + 1,
            };
        default:
            return state;
    }
}