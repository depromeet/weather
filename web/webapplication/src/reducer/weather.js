/**
 * Created by youngil on 2016-11-23.
 */

import update from 'react-addons-update'

const initialState = {
    //지역
    location: '통신에러',

    //현재온도
    current_temp: '통신에러',

    //풍속
    wind: '통신에러',

    //체감온도
    body_temp: '통신에러',

    thisWeekend: {
        grid: '통신에러',
        location: '통신에러',
        sky: '',
        temperature: '통신에러',
        timeRelease: '통신에러',
    }
};

export default function weather(state = initialState, action) {
    switch (action.type) {
        case 'CURRENT_TEMP':
            return {
                ...state,
                current_temp: action.current_temp,
                location: action.location,
                wind: action.wind,
                body_temp: action.body_temp

            };
        case 'showMidWeather':
            return update(state, {
                thisWeekend: {
                    grid:{$set:action.grid},
                    location:{$set:action.location},
                    sky:{$set: action.sky},
                    temperature:{$set: action.temperature},
                    timeRelease:{$set:action.timeRelease},
                }
            });
        default:
            return state;
    }
}