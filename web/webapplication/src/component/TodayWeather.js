/**
 * Created by youngil on 2017-02-02.
 */

import React, {Component}  from 'react';

class TodayWeather extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {show3dayWeather} = this.props;
        const {sky} = show3dayWeather.fcst3hour;
        const {temperature} = show3dayWeather.fcst3hour;
        const hour4 = new Map();
        const hour7 = new Map();
        const hour10 = new Map();
        const hour13 = new Map();
        const hour16 = new Map();
        const hour19 = new Map();
        const hour22 = new Map();
        const hourArray = [];
        const getArray = () => {
            sky &&
            Object.keys(sky).forEach(weather => {
                    if (!sky[weather].startsWith('SKY')) {
                        if (weather.endsWith('e4hour') || weather.endsWith('p4hour')) {
                            hour4.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('e7hour') || weather.endsWith('p7hour')) {
                            hour7.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('10hour')) {
                            hour10.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('13hour')) {
                            hour13.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('16hour')) {
                            hour16.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('19hour')) {
                            hour19.set(weather, sky[weather])
                        }
                    }
                }
            );
            hourArray.push(hour4);
            hourArray.push(hour7);
            hourArray.push(hour10);
            hourArray.push(hour13);
            hourArray.push(hour16);
            hourArray.push(hour19);
            // hourArray.push(hour22);
        };
        if (typeof sky !== 'undefined' && typeof temperature !== 'undefined') {
            Object.assign(sky, temperature);
            getArray()
        }
        const hourParse = (hour) => (
            [...hour.entries()].map((val, i) => {
                let img_src='';
                if (val[1] === '맑음') {
                    img_src = require('../images/weather_fine_color.png');
                } else if (val[1] === '구름조금') {
                    img_src=require('../images/some_cloud.png');
                } else if (val[1] === '구름많음') {
                    img_src=require('../images/many_cloud.png');
                } else if (val[1] === '구름많고 비') {
                    img_src=require('../images/weather_rain.png');
                } else if (val[1] === '구름많고 눈') {
                    img_src=require('../images/weather_snow.png');
                } else if (val[1] === '구름많고 비 또는 눈') {
                    img_src=require('../images/rain_snow.png');
                } else if (val[1] === '흐림') {
                    img_src=require('../images/weather_fadeout.png');
                } else if (val[1] === '흐리고 비') {
                    img_src=require('../images/weather_rain.png');
                } else if (val[1] === '흐리고 눈') {
                    img_src=require('../images/weather_snow.png');
                } else if (val[1] === '흐리고 비 또는 눈') {
                    img_src=require('../images/rain_snow.png');
                } else if (val[1] === '흐리고 낙뢰') {
                    img_src=require('../images/thunderstorm.png');
                } else if (val[1] === '뇌우, 비') {
                    img_src=require('../images/thunderstorm.png');
                } else if (val[1] === '뇌우, 눈') {
                    img_src=require('../images/weather_snow.png');
                } else if (val[1] === '뇌우, 비 또는') {
                    img_src=require('../images/weather_rain.png');
                } else {
                    //숫자로 된건 넘어간다.
                    return
                }
                return <li
                    key={val.toString()}
                    className="TempFont-weather"
                ><img
                    src={img_src}
                    width={150}
                    className="img-responsive weathersumnail"
                />
                    <p>{val[1]}</p>
                </li>
            })
        );
        const dateParse = (i) => {
            console.log('iarray', i);
            const now = new Date();
            const dd = now.getHours() + (i+1)*3;
            const parseddate = new Date(now.setHours(dd));
            return <p>{`${parseddate.getHours()}시`}</p>
        };
        console.log('TodayWeather props', this.props);
        return (
            <div>
                <center>
                    <p
                        className="h3 TempFont"
                    >오늘날씨</p>
                    {
                        hourArray &&
                        hourArray.map((val, i) => (
                            <div
                                key={i.toString()}
                                className="col-sm-4 col-xs-4 col-lg-2 col-md-2"
                            >
                                {hourParse(val)}
                                {dateParse(i)}
                            </div>
                        ))
                    }
                </center>
            </div>
        );
    }
}
export default TodayWeather;