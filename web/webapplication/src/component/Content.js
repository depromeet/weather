/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap'


class Content extends Component {

    render() {
        return (
            <div className="carousel">
                <Carousel className="carousel2">
                    <Carousel.Item
                        active={true}>
                        <p
                            className="carouselItem"
                        >오늘날씨</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p
                            className="carouselItem"
                        >내일날씨</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p
                            className="carouselItem"
                        >이번주날씨</p>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default Content;
