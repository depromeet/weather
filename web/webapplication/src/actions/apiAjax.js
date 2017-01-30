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

export const get_current_weather = (latitude, longitude) => {
    return (dispatch) => {
        $.ajax({
            url: 'http://apis.skplanetx.com/weather/current/minutely',
            type: 'GET',
            data: {
                //예시 데이터
                //API 버전 정보
                version: apiconfig.version,
                //위도로 날씨정보 검색
                lat: latitude,
                lon: longitude,
                //주소로 날씨정보 검색
                // -시(특별, 광역), 도
                city: "서울",
                //관측소 지점번호(stnid)로 날씨정보 검색
                stnid: "108",
                //tobe appkey가 노출되어있음. 다른방식으로세팅해야할듯.
            },
            success: function (res) {
                console.log('현재시간 응답', res);
                dispatch(actions.showWeather(res))
            },
            error: function (request, status, error) {
                console.log('현재시간 응답 error',request, status, error);
            }
        })
    }
};

export const get_weekend_weather = (latitude,longitude) =>{
    return (dispatch) => {
        $.ajax({
            url: 'http://apis.skplanetx.com/weather/forecast/6days',
            type:'GET',
            data:{
                version:apiconfig.version,
                lat: latitude,
                lon: longitude,
                city:'서울',
                stnid:"108",
            },

            success: function (res) {
                console.log('이번주 응답', res);
                dispatch(actions.showMidWeather(res))
            },
            error: function (request, status, error) {
                console.log('이번주 응답 error',request, status, error);
            }
        })
    }
};

export const get_3day_weather = (latitude,longitude) =>{
    return (dispatch) => {
        $.ajax({
            url: 'http://apis.skplanetx.com/weather/forecast/3days',
            type:'GET',
            data:{
                version:apiconfig.version,
                lat: latitude,
                lon: longitude,
                city:'서울',
                stnid:"108",
            },
            success: function (res) {
                console.log('3day 응답', res);
                dispatch(actions.show3dayWeather(res))
            },
            error: function (request, status, error) {
                console.log('3day 응답 error',request, status, error);
            }
        })
    }
};
