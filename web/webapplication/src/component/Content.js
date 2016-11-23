/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap'


class Content extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <br/>
                        <div className="carousel">
                            <Carousel className="carousel2">
                                <Carousel.Item
                                    active={true}>
                                    <p>오늘날씨</p>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <p>내일날씨</p>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <p>이번주날씨</p>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
