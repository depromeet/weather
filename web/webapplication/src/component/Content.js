/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap'

const CarouselInstance = (
    <Carousel>
        <Carousel.Item>
            <center>
                <p>오늘날씨</p>
            </center>
        </Carousel.Item>
        <Carousel.Item>
            <center>
                <p>내일날씨</p>
            </center>
        </Carousel.Item>
        <Carousel.Item>
            <center>
                <p>이번주날씨</p>
            </center>
        </Carousel.Item>
    </Carousel>
);

class Content extends Component {

    render() {
        return (
            <div className="weather-inform">
                {CarouselInstance}
            </div>
        );
    }
}
export default Content;
