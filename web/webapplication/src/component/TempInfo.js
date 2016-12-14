/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import styles from '../css/App.css'

class TempInfo extends Component {
    
    constructor(props){
        super(props);
        this.getGeo = this.getGeo.bind(this);
        this.succes = this.succes.bind(this)
    }
    
    componentWillMount() {
        //마운트되면 ajax호출
        this.props.getCurrentWeather();
    }

    componentDidMount() {
        console.log('wwww');
        //tobe 60초에 한번씩 호출 추후에 수정예정
        //개발시 주석처리.
        // setInterval(this.props.getCurrentWeather,60*1000);
    }

    getGeo() {
        navigator.geolocation.getCurrentPosition(this.succes); //현재 위치 정보를 조사하고 성공 실패 했을시 호출되는 함수 설정
        console.log("위치정보 확인 성공!");
    }
    succes(){
        // for (let property in position.coords) { //반복문 돌면서 출력
        //     console.log("Key 값:" + property + " 정보:" + position.coords[property]);
        // }
    }
    render() {
        return (
            <div
                className={styles.TempInform}
            >
                <h3
                    onClick={this.getGeo}
                >현재 온도
                    <small>{this.props.current_temp}</small>
                </h3>
                <h3>체감온도
                    <small>{Math.round(this.props.body_temp)}</small>
                </h3>
                <h3>위치
                    <small>{this.props.location}</small>
                </h3>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        current_temp: state.weather.current_temp,
        current_wind: state.weather.current_temp,
        location: state.weather.location,
        body_temp: state.weather.body_temp,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentWeather: () => {
            $.ajax({
                url: 'http://apis.skplanetx.com/weather/current/minutely',
                type: 'GET',
                data: {
                    //예시 데이터
                    //API 버전 정보
                    version: "1",
                    //위도로 날씨정보 검색
                    lat: "37.5714000000",
                    //주소로 날씨정보 검색
                    // -시(특별, 광역), 도
                    city: "서울",
                    //관측소 지점번호(stnid)로 날씨정보 검색
                    stnid: "108",
                    //tobe appkey가 노출되어있음. 다른방식으로세팅해야할듯.
                    appKey: "08c49bca-1e76-3ff9-a0d3-ab47a5b87ba1"
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TempInfo);