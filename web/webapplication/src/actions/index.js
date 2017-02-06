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
        body_temp: 13.12 + 0.6215 * res.weather.minutely[0]['temperature'].tc - 11.37 * V + 0.3965 * V * res.weather.minutely[0]['temperature'].tc,
        //관측시간
        timeObservation:res.weather.minutely[0].timeObservation
    }
}

export function showMidWeather(res) {
    res = res.weather.forecast6days[0];
    return {
        type:"showMidWeather",
        grid:res.grid,
        location:res.location,
        sky:res.sky,
        temperature:res.temperature,
        timeRelease:res.timeRelease
    }
}

export function show3dayWeather(res) {
    res = res.weather.forecast3days[0];
    return {
        type:"show3dayWeather",
        //위치정보
        grid:res.grid,
        //발표시간
        timeRelease:res.timeRelease,
        //3시간 간격으로 온도, 하늘상태, 습도, 강수량, 풍향, 풍속 확인
        fcst3hour:res.fcst3hour,
        //6시간 간격으로 눈/비 확인
        fcst6hour:res.fcst6hour,
        fcstdaily:res.fcstdaily,
    }
}

export function loading() {
    return {
        type:"loading",
    }
}

export function loadingDone(){
    "use strict";
    return {
        type:"loadingDone",
    }
}

// 하늘상태코드명(발표시간+N시간)
// - SKY_S01: 맑음
// - SKY_S02: 구름조금
// - SKY_S03: 구름많음
// - SKY_S04: 구름많고 비
// - SKY_S05: 구름많고 눈
// - SKY_S06: 구름많고 비 또는 눈
// - SKY_S07: 흐림
// - SKY_S08: 흐리고 비
// - SKY_S09: 흐리고 눈
// - SKY_S10:  흐리고 비 또는 눈
// - SKY_S11: 흐리고 낙뢰
// - SKY_S12: 뇌우, 비
// - SKY_S13: 뇌우, 눈
// - SKY_S14: 뇌우, 비 또는