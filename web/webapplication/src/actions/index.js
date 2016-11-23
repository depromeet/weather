/**
 * Created by youngil on 2016-10-31.
 */
import * as types from './ActionsTypes';

export function showWeather(res){
    return {
        type:types.CURRENT_TEMP,
        //현재온도
        current_temp: res.weather.minutely[0]['temperature'].tc,
        //요청지역
        location:res.weather.minutely[0]['station']['name']
    }
}