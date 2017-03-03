/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap'
import {connect} from 'react-redux';
import * as api from '../actions/apiAjax';
import * as c3 from 'c3';
import ThisWeekendWeather from './ThisWeekendWeather'
import TodayWeather from './TodayWeather'


class Content extends Component {


    componentDidMount() {
        this.getGeo();
        this.props.getVote();
    };

    componentWillReceiveProps(nextProps) {
        console.log('this.props, nextProps', this.props, nextProps);
        if (this.props !== nextProps) {
            this._renderChart()
        }
    }

    getGeo() {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("위치정보 확인 성공! ", position);
            this.geo_succes(position);
        }, (error) => {
            console.log("위치정보 확인 실패!", error);
            this.geo_error(error);
        }); //현재 위치 정보를 조사하고 성공 실패 했을시 호출되는 함수 설정
    }

    geo_succes(position) {
        this.props.get_weekend_weather(position.coords['latitude'], position.coords['longitude']);
        this.props.get_3day_weather(position.coords['latitude'], position.coords['longitude']);
    }

    geo_error(error) {
        // 위치정보 제공 거부시 기본적으로 서울 로 표시되게한다.
        this.props.get_weekend_weather(37.5714000000, 126.9658000000);
        this.props.get_3day_weather(37.5714000000, 126.9658000000);
    }

    _renderChart() {
        // c3.generate({
        //     bindto: '#chart',
        //     // size:{
        //     //     height:300
        //     // },
        //     data: {
        //         columns: [
        //             ['data1', 15, 25, 32, 10, 11]
        //         ]
        //     },
        // });
        c3.generate({
            bindto: '#chart3',
            data: {
                columns: [
                    ['data1', 32, 25, 32, 10, 11]
                ]
            }
        });

    }

    render() {
        console.log('this.props.show3dayWeather', this.props);

        return (
            <div
                className="row-bottom"
            >
                    <Carousel
                        pauseOnHover={true}
                    >
                        <Carousel.Item>
                            <TodayWeather
                                show3dayWeather={this.props.show3dayWeather}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <ThisWeekendWeather
                                thisWeekend={this.props.thisWeekend}
                            />
                        </Carousel.Item>
                    </Carousel>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        thisWeekend: state.weather.thisWeekend,
        show3dayWeather: state.weather.show3dayWeather,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        get_weekend_weather: (latitude, longitude) => {
            dispatch(api.get_weekend_weather(latitude, longitude))
        },
        getCurrentWeather: (latitude, long) => {
            dispatch(api.get_current_weather(latitude, long))
        },
        get_3day_weather: (latitude, long) => {
            dispatch(api.get_3day_weather(latitude, long))
        },
        getVote: () => {
            dispatch(api.getVote())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);