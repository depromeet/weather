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
            hourArray.push(hour22);
        };
        if (typeof sky !== 'undefined' && typeof temperature !== 'undefined') {
            Object.assign(sky, temperature);
            getArray()
        }
        const hourParse = (hour) => (
            [...hour.entries()].map((val, i) => {
                return <li
                    key={val.toString()}
                    className="TempFont-weather"
                >{val}, {i}</li>
            })
        );
        return (
            <div>
                <center>
                    <p
                        className="h3 TempFont"
                    >오늘날씨</p>
                    {
                        hourArray &&
                        hourArray.map((val, i) => (
                            <div className="col-sm-3 col-xs-3">
                                {hourParse(val)}
                            </div>
                        ))
                    }
                </center>
            </div>
        );
    }
}
export default TodayWeather;