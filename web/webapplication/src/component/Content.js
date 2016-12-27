/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap'
import * as c3 from 'c3';


class Content extends Component {

    componentDidMount() {
        this._renderChart()
    };

    _renderChart() {
        c3.generate({
            bindto: '#chart',
            data: {
                columns: [

                    ['data1',15, 25,32,10,11]
                ]
            }
        });

        c3.generate({
            bindto: '#chart2',
            data: {

                columns: [
                    ['data1', 50, 25,32,10,11]
                ]
            }
        });

        c3.generate({
            bindto: '#chart3',
            data: {
                columns: [
                    ['data1', 32, 25,32,10,11]
                ]
            }
        });

    }

    render() {

        return (

            <div className="weather-inform">
                <Carousel
                    indicators='False'
                >
                    <Carousel.Item>
                        <center>
                            <p>오늘날씨</p>
                            <div className="carousel-weather" id="chart"></div>
                        </center>
                    </Carousel.Item>
                    <Carousel.Item>
                        <center>
                            <p>내일날씨</p>
                            <div className="carousel-weather" id="chart2"></div>
                        </center>
                    </Carousel.Item>
                    <Carousel.Item>
                        <center>

                            <p>이번주날씨</p>
                            <div className="carousel-weather" id="chart3"></div>
                        </center>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default Content;
