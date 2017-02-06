import React, {Component} from 'react';


class ThisWeekendWeather extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {thisWeekend} = this.props;
        const {sky} = thisWeekend;
        const {temperature} = thisWeekend;

        const day2 = new Map();
        const day3 = new Map();
        const day4 = new Map();
        const day5 = new Map();
        const day6 = new Map();
        const day7 = new Map();
        const day8 = new Map();
        const day9 = new Map();
        const day10 = new Map();
        const dayArray = [];

        const getArray = () => {
            sky &&
            Object.keys(sky).forEach(weather => {
                    if (!sky[weather].startsWith('SKY')) {
                        if (weather.endsWith('2day')) {
                            day2.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('3day')) {
                            day3.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('4day')) {
                            day4.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('5day')) {
                            day5.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('6day')) {
                            day6.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('7day')) {
                            day7.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('8day')) {
                            day8.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('9day')) {
                            day9.set(weather, sky[weather])
                        }
                        else if (weather.endsWith('10day')) {
                            day10.set(weather, sky[weather])
                        }
                    }
                }
            );
            dayArray.push(day2);
            dayArray.push(day3);
            dayArray.push(day4);
            dayArray.push(day5);
            dayArray.push(day6);
            dayArray.push(day7);
            dayArray.push(day8);
            dayArray.push(day9);
            dayArray.push(day10);
        };
        if (typeof sky !== 'undefined' && typeof temperature !== 'undefined') {
            Object.assign(sky, temperature);
            getArray()
        }


        const dayParse = (day) => (
            [...day.entries()].map((val, i) => {
                console.log('weekendval', val, typeof val[1]);
                let img_src = '';
                if (val[1] === '맑음') {
                    img_src = require('../images/weather_fine_color.png');
                } else if (val[1] === '구름조금') {
                    img_src = require('../images/some_cloud.png');
                } else if (val[1] === '구름많음') {
                    img_src = require('../images/many_cloud.png');
                } else if (val[1] === '구름많고 비') {
                    img_src = require('../images/weather_rain.png');
                } else if (val[1] === '구름많고 눈') {
                    img_src = require('../images/weather_snow.png');
                } else if (val[1] === '구름많고 비 또는 눈') {
                    img_src = require('../images/rain_snow.png');
                } else if (val[1] === '흐림') {
                    img_src = require('../images/weather_fadeout.png');
                } else if (val[1] === '흐리고 비') {
                    img_src = require('../images/weather_rain.png');
                } else if (val[1] === '흐리고 눈') {
                    img_src = require('../images/weather_snow.png');
                } else if (val[1] === '흐리고 비 또는 눈') {
                    img_src = require('../images/rain_snow.png');
                } else if (val[1] === '흐리고 낙뢰') {
                    img_src = require('../images/thunderstorm.png');
                } else if (val[1] === '뇌우, 비') {
                    img_src = require('../images/thunderstorm.png');
                } else if (val[1] === '뇌우, 눈') {
                    img_src = require('../images/weather_snow.png');
                } else if (val[1] === '뇌우, 비 또는') {
                    img_src = require('../images/weather_rain.png');
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
                />
                    {/*/>{val}, {i}*/}
                </li>
            })
        );
        return <div>
            <center>
                <p
                    className="h3 TempFont"
                >주간 날씨</p>
                {
                    dayArray &&
                    dayArray.map((val, i) => (
                            <div className="col-sm-4 col-xs-4 col-lg-2 col-md-2">
                                {dayParse(val)}
                            </div>
                        )
                    )
                }
            </center>
        </div>
    }
}
export default ThisWeekendWeather;

