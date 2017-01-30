import React, {Component} from 'react';


export const ThisWeekendWeather = (sky, temperature) => {
    Object.assign(sky, temperature);
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
    const dayParse = (day) => (
        [...day.entries()].map((val, i) => {
            return <li
                key={val}
                className="TempFont-weather"
            >{val}, {i}</li>
        })
    );
    return <center>
        {getArray()}
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
};