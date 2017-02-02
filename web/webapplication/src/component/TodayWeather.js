/**
 * Created by youngil on 2017-02-02.
 */

import React, {Component}  from 'react';

class TodayWeather extends Component {

    render() {

        const {show3dayWeather} = this.props
        const {sky} = show3dayWeather.fcst3hour
        const {temperature} = show3dayWeather.fcst3hour
        if (typeof sky != 'undefined' && typeof temperature != 'undefined') {
            Object.assign(sky, temperature);
            getArray()
        }
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
        };
        console.log('show3dayWeather', show3dayWeather)
        console.log('sky', sky)
        console.log('temperature', temperature)
        return (
            <div>
                <center>
                    <p
                        className="h3 TempFont"
                    >오늘날씨</p>
                    <div className="carousel-weather" id="chart"></div>
                </center>
            </div>
        );
    }
}


export default TodayWeather;

