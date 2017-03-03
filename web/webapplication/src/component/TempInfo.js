/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as api from '../actions/apiAjax';
import {FadeLoader} from 'halogen'
// import styles from '../css/App.css'

class TempInfo extends Component {


    
    componentWillMount() {
    }

    componentDidMount() {
        //tobe 60초에 한번씩 호출 추후에 수정예정
        //개발시 주석처리.
        // setInterval(this.props.getCurrentWeather,60*1000);
        this.getGeo()
    }
    getGeo() {
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log("위치정보 확인 성공! ", position);
            this.geo_succes(position);
        },(error) =>{
            console.log("위치정보 확인 실패!", error);
            this.geo_error(error);
        }); //현재 위치 정보를 조사하고 성공 실패 했을시 호출되는 함수 설정

    }
    geo_succes(position){
        // for (let property in position.coords) { //반복문 돌면서 출력
        //     console.log("Key 값:" + property + " 정보:" + position.coords[property]);
        // }
        this.props.getCurrentWeather(position.coords['latitude'],position.coords['longitude']);
    }
    geo_error(error){
        // 위치정보 제공 거부시 기본적으로 서울 로 표시되게한다.
        this.props.getCurrentWeather(37.5714000000	,126.9658000000);
    }


    render() {
        const now = new Date();
        console.log(now);

        const month = now.getMonth()+1;
        const date = now.getDate();
        const wee = now.getDay();
        let today = '';
        if (wee == 0){
            today = '일'
        }else if (wee == 1) {
            today = '월';
        }else if (wee == 2) {
            today = '화';
        }else if (wee ==3 ){
            today = '수';
        }else if (wee ==4){
            today = '목';
        }else if (wee ==5){
            today = '금';
        }else if (wee ==6){
            today = '토'
        }
        return (
            <div
                className="TempInform"
            >
                <p
                    className="TempFont"
                >{`${month}월 ${date}일 ${today}요일`}</p>
                <p
                    className="TempFont big-temp-info"
                >
                    {this.props.loading =='loading'? <FadeLoader/>:this.props.current_temp} ℃
                </p>

                <p
                    className="TempFont"
                >체감온도 : &nbsp;
                    <small
                        className="TempNum"
                    >{this.props.loading =='loading'? <FadeLoader/>:Math.round(this.props.body_temp)} ℃</small>

                </p>
                <p

                    className="TempFont"
                >
                    <small
                        className="TempNum"
                    >{this.props.loading =='loading'? <FadeLoader/>:this.props.location} &nbsp;
                    </small>

                </p>
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
        timeObservation : state.weather.timeObservation,
        loading:state.weather.loading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentWeather: (latitude, long ) => {
            dispatch(api.get_current_weather(latitude, long))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TempInfo);