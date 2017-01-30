/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap'
import {connect} from 'react-redux';
import * as api from '../actions/apiAjax';
import * as c3 from 'c3';


class Content extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getGeo();


    };

    componentWillReceiveProps(nextProps) {
        console.log('this.props, nextProps', this.props, nextProps);
        if (this.props !== nextProps) {
            this._renderChart()
        }
    }

    getGeo() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.succes(position);
        }); //현재 위치 정보를 조사하고 성공 실패 했을시 호출되는 함수 설정
        console.log("위치정보 확인 성공!");
    }

    succes(position) {
        // for (let property in position.coords) { //반복문 돌면서 출력
        //     console.log("Key 값:" + property + " 정보:" + position.coords[property]);
        // }
        console.log('position', position);
        // this.props.getCurrentWeather(position.coords['latitude']);
        this.props.get_weekend_weather(position.coords['latitude'], position.coords['longitude']);
    }

    _renderChart() {
        c3.generate({
            bindto: '#chart',
            // size:{
            //     height:300
            // },
            data: {
                columns: [
                    ['data1', 15, 25, 32, 10, 11]
                ]
            },
        });
        c3.generate({
            bindto: '#chart2',
            data: {
                columns: [
                    ['data1', 50, 25, 32, 10, 11]
                ]
            }
        });
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
        console.log('Content: this.props', this.props);
        Object.assign(this.props.thisWeekend.sky, this.props.thisWeekend.temperature);
        console.log('...this.props.thisWeekend.sky', this.props.thisWeekend.sky);
        let day2 = new Map();
        let day3 = new Map();
        let day4 = new Map();
        let day5 = new Map();
        let day6 = new Map();
        let day7 = new Map();
        let day8 = new Map();
        let day9 = new Map();
        let day10 = new Map();
        const getArray = () => {
            this.props.thisWeekend.sky &&
            Object.keys(this.props.thisWeekend.sky).forEach(weather => {
                    if (weather.endsWith('2day') && !this.props.thisWeekend.sky[weather].startsWith('SKY')) {
                        day2.set(weather, this.props.thisWeekend.sky[weather])
                    }
                    else if (weather.endsWith('3day') && !this.props.thisWeekend.sky[weather].startsWith('SKY')) {
                        day3.set(weather, this.props.thisWeekend.sky[weather])
                    }
                    else if (weather.endsWith('4day') && !this.props.thisWeekend.sky[weather].startsWith('SKY')) {
                        day4.set(weather, this.props.thisWeekend.sky[weather])
                    }
                    else if (weather.endsWith('5day') && !this.props.thisWeekend.sky[weather].startsWith('SKY')) {
                        day5.set(weather, this.props.thisWeekend.sky[weather])
                    }
                    else if (weather.endsWith('6day') && !this.props.thisWeekend.sky[weather].startsWith('SKY')) {
                        day6.set(weather, this.props.thisWeekend.sky[weather])
                    }
                    else if (weather.endsWith('7day') && !this.props.thisWeekend.sky[weather].startsWith('SKY')) {
                        day7.set(weather, this.props.thisWeekend.sky[weather])
                    }
                    else if (weather.endsWith('8day') && !this.props.thisWeekend.sky[weather].startsWith('SKY')) {
                        day8.set(weather, this.props.thisWeekend.sky[weather])
                    }
                    else if (weather.endsWith('9day') && !this.props.thisWeekend.sky[weather].startsWith('SKY')) {
                        day9.set(weather, this.props.thisWeekend.sky[weather])
                    }
                    else if (weather.endsWith('10day') && !this.props.thisWeekend.sky[weather].startsWith('SKY')) {
                        day10.set(weather, this.props.thisWeekend.sky[weather])
                    }
                }
            );
            console.log(day2);
            console.log(day3);
            console.log(day4);
            console.log(day5);
            console.log(day6);
            console.log(day7);
            console.log(day8);
            console.log(day9);
            console.log(day10);
        };

        const day2Parse = () => {
            for (let [k, v] of day2) {
                console.log(`key = ${k}, value = ${v}`);
                return <li>{k} , {v}</li>
            }
        };

        const dayParse = (day) => (
            [...day.entries()].map((val, i) => {
                console.log(`key = ${val}, value = ${i}`);
                return <li>{val}, {i}</li>
            })
        );
        return (
            <div className="row row-bottom"
            >
                <div
                    className="col-xs-12 col-sm-12 col-md-12 col-lg-12 innerWeather"
                >
                    <Carousel

                    >
                        {getArray()}
                        <Carousel.Item
                        >
                            <center>
                                <p
                                    className="h3 TempFont"
                                >오늘날씨</p>
                                <div className="carousel-weather" id="chart"></div>
                            </center>
                        </Carousel.Item>
                        <Carousel.Item>
                            <center>
                                <p
                                    className="h3 TempFont"
                                >주간 날씨</p>
                                <div className="thisWeekendWeather col-sm-12">
                                    <div
                                        className="col-sm-2"
                                    >
                                        {
                                            day2.size &&
                                            dayParse(day2)
                                        }
                                    </div>
                                    <div
                                        className="col-sm-2"
                                    >
                                        {
                                            day3.size &&
                                            dayParse(day3)
                                        }
                                    </div>
                                    <div
                                        className="col-sm-2"
                                    >
                                        {
                                            day4.size &&
                                            dayParse(day4)
                                        }
                                    </div>
                                    <div
                                        className="col-sm-2"
                                    >
                                        {
                                            day5.size &&
                                            dayParse(day5)
                                        }
                                    </div>
                                    <div
                                        className="col-sm-2"
                                    >
                                        {
                                            day6.size &&
                                            dayParse(day6)
                                        }
                                    </div>
                                    <div
                                        className="col-sm-2"
                                    >
                                        {
                                            day7.size &&
                                            dayParse(day7)
                                        }
                                    </div>
                                </div>
                            </center>
                        </Carousel.Item>
                        <Carousel.Item
                        >
                            <center>
                                <p
                                    className="h3 TempFont"
                                >이번주날씨</p>
                                <div className="carousel-weather" id="chart3"></div>
                            </center>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        thisWeekend: state.weather.thisWeekend,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        get_weekend_weather: (latitude, longitude) => {
            dispatch(api.get_weekend_weather(latitude, longitude))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);