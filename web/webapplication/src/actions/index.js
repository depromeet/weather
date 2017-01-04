/**
 * Created by youngil on 2016-11-21.
 */


export function showWeather(res) {
    const V = Math.pow(res.weather.minutely[0]['wind'].wspd, 0.16);
    return {
        type: "CURRENT_TEMP",
        //현재온도
        current_temp: res.weather.minutely[0]['temperature'].tc,
        //요청지역
        location: res.weather.minutely[0]['station']['name'],
        wind: res.weather.minutely[0]['wind'].wspd,

        //체감온도 계산
        body_temp: 13.12 + 0.6215 * res.weather.minutely[0]['temperature'].tc - 11.37 * V + 0.3965 * V * res.weather.minutely[0]['temperature'].tc
    }
}