/**
 * Created by youngil on 2016-10-31.
 */
import * as actions from './index';
import $ from 'jquery';
import * as apiconfig from './apiconfig.js'

$.ajaxSetup({
    beforeSend: function (xhr) {
        xhr.setRequestHeader("appKey", apiconfig.apiKey);
    }
});



export const get_current_weather = (latitude) => {
    return (dispatch) => {
        $.ajax({
            url: apiconfig.minute,
            type: 'GET',
            data: {
                //예시 데이터
                //API 버전 정보
                version: apiconfig.version,
                //위도로 날씨정보 검색
                // lat: "37.5714000000",
                lat: latitude,
                //주소로 날씨정보 검색
                // -시(특별, 광역), 도
                city: "서울",
                //관측소 지점번호(stnid)로 날씨정보 검색
                stnid: "108",
                //tobe appkey가 노출되어있음. 다른방식으로세팅해야할듯.
            },
            success: function (res) {
                console.log('응답', res);
                console.log('요청 위치', res.weather.minutely[0]['station']['name']);
                console.log('현재기온', res.weather.minutely[0]['temperature'].tc);
                console.log('현재풍속', res.weather.minutely[0]['wind'].wspd);
                // console.log(V, bodyTemp,'wwwwwwwwwwwwwwwwwffff');
                dispatch(actions.showWeather(res))
            }
        })
    }
};