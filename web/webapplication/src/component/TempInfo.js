/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as api from '../actions/apiAjax';
import styles from '../css/App.css'

class TempInfo extends Component {
    
    constructor(props){
        super(props);
        this.getGeo = this.getGeo.bind(this);
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
        this.getGeo()
    }

    getGeo() {
        navigator.geolocation.getCurrentPosition((position)=>{
            this.succes(position);
        }); //현재 위치 정보를 조사하고 성공 실패 했을시 호출되는 함수 설정
        console.log("위치정보 확인 성공!");
    }
    succes(position){
        // for (let property in position.coords) { //반복문 돌면서 출력
        //     console.log("Key 값:" + property + " 정보:" + position.coords[property]);
        // }
        console.log(position);
        this.props.getCurrentWeather(position.coords['latitude']);
    }
    render() {
        return (
            <div
                className={styles.TempInform}
            >
                <button onClick={this.getGeo}>위치확인 (click!)
                </button>
                <h3
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
        getCurrentWeather: (latitude ) => {
            dispatch(api.get_current_weather(latitude))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TempInfo);