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
        let day = new Map();
        let dayArray = [];
        const getArray = () => {
            this.props.thisWeekend.sky &&
            Object.keys(this.props.thisWeekend.sky).map((val, i) => {
                    if (!this.props.thisWeekend.sky[val].startsWith('SKY')) {
                        if (val.endsWith('2day')) {
                            console.log('endswidths 2day', this.props.thisWeekend.sky[val]);
                            dayArray.concat(["2day",this.props.thisWeekend.sky[val]]);
                            day.set(dayArray);
                            console.log('day', day)
                        }
                        else if (val.endsWith('3day')) {
                            console.log('endswidths 3day', this.props.thisWeekend.sky[val]);
                            let dayArray = ["3day",this.props.thisWeekend.sky[val]];
                            day.set(dayArray);
                            console.log('day', day)
                        }
                        else if (val.endsWith('4day')) {
                            console.log('endswidths 4day', this.props.thisWeekend.sky[val])
                            let dayArray = ["4day",this.props.thisWeekend.sky[val]];
                            day.set(dayArray);
                            console.log('day', day)
                        }
                        else if (val.endsWith('5day')) {
                            console.log('endswidths 5day', this.props.thisWeekend.sky[val])
                            let dayArray = ["5day",this.props.thisWeekend.sky[val]];
                            day.set(dayArray);
                            console.log('day', day)
                        }
                        else if (val.endsWith('6day')) {
                            console.log('endswidths 6day', this.props.thisWeekend.sky[val])
                            let dayArray = ["6day",this.props.thisWeekend.sky[val]];
                            day.set(dayArray);
                            console.log('day', day)
                        }
                        else if (val.endsWith('7day')) {
                            console.log('endswidths 7day', this.props.thisWeekend.sky[val])
                            let dayArray = ["7day",this.props.thisWeekend.sky[val]];
                            day.set(dayArray);
                            console.log('day', day)
                        }
                        else if (val.endsWith('8day')) {
                            console.log('endswidths 8day', this.props.thisWeekend.sky[val])
                            let dayArray = ["8day",this.props.thisWeekend.sky[val]];
                            day.set(dayArray);
                            console.log('day', day)
                        }
                        else if (val.endsWith('9day')) {
                            console.log('endswidths 9day', this.props.thisWeekend.sky[val])
                            let dayArray = ["9day",this.props.thisWeekend.sky[val]];
                            day.set(dayArray);
                            console.log('day', day)
                        }
                        else if (val.endsWith('10day')) {
                            console.log('endswidths 10day', this.props.thisWeekend.sky[val])
                            let dayArray = ["10day",this.props.thisWeekend.sky[val]];
                            day.set(dayArray);
                            console.log('day', day)
                        }
                    }
                }
            )
        };
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
                                <div className="thisWeekendWeather">
                                    {
                                        this.props.thisWeekend.sky &&
                                        Object.keys(this.props.thisWeekend.sky).map((val, i) => {
                                                console.log('this.props.thisWeekend.sky[val]', this.props.thisWeekend.sky[val]);
                                                if (!this.props.thisWeekend.sky[val].startsWith('SKY')) {
                                                    if (val.startsWith('am')) {
                                                        return <div
                                                            key={val}
                                                            className="inner-thisWeekendWeather col-sm-2"
                                                        >
                                                            {this.props.thisWeekend.sky[val]}
                                                        </div>
                                                    }
                                                }
                                            }
                                        )
                                    }
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