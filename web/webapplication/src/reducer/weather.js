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
    //관측시간
    timeObservation: '통신에러',


    thisWeekend: {
        grid: '통신에러',
        location: '통신에러',
        sky: '',
        temperature: '통신에러',
        timeRelease: '통신에러',
    },
    show3dayWeather: {
        //위치정보
        grid: '통신에러',
        //발표시간
        timeRelease: '통신에러',
        //3시간 간격으로 온도, 하늘상태, 습도, 강수량, 풍향, 풍속 확인
        fcst3hour: '통신에러',
        //6시간 간격으로 눈/비 확인
        fcst6hour: '통신에러',
        fcstdaily: '통신에러',
    },
    loading: 'INIT',
};

export default function weather(state = initialState, action) {
    switch (action.type) {
        case 'CURRENT_TEMP':
            return update(state, {
                current_temp: {$set: action.current_temp},
                location: {$set: action.location},
                wind: {$set: action.wind},
                body_temp: {$set: action.body_temp},
                timeObservation: {$set: action.timeObservation},
            });
        case 'showMidWeather':
            return update(state, {
                thisWeekend: {
                    grid: {$set: action.grid},
                    location: {$set: action.location},
                    sky: {$set: action.sky},
                    temperature: {$set: action.temperature},
                    timeRelease: {$set: action.timeRelease},
                }
            });
        case 'show3dayWeather':
            return update(state, {
                show3dayWeather: {
                    //위치정보
                    grid: {$set: action.grid},
                    //발표시간
                    timeRelease: {$set: action.timeRelease},
                    //3시간 간격으로 온도, 하늘상태, 습도, 강수량, 풍향, 풍속 확인
                    fcst3hour: {$set: action.fcst3hour},
                    //6시간 간격으로 눈/비 확인
                    fcst6hour: {$set: action.fcst6hour},
                    fcstdaily: {$set: action.fcstdaily},
                }
            });
        case 'loading':
            return update(state, {
                loading: {$set:'loading'},
            });
        case 'loadingDone':
            return update(state, {
                loading: {$set:'DONE'}
            });
        default:
            return state;
    }
}