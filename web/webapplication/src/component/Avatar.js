/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import '../css/App.css'
import imgsrc from '../images/test_avatar.jpg'
import {Modal} from 'react-bootstrap'

class Avatar extends Component {

    constructor(props){
        super(props);
        this.state = {
            showModal:false
        };
        this.open = this.open.bind(this);
        this.close= this.close.bind(this);
    }
    close() {
        this.setState({
            showModal: false
        })
    }
    open() {
        this.setState({
            showModal: true
        });
    }

    render() {
        console.log(this.state.showModal);
        return (
            <div>
                <a href="#">
                    <img onClick={this.open} src={imgsrc} className="img-responsive center-block" alt="아바타" width="500"/>
                </a>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>투표</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>투표하기</h4>
                    </Modal.Body>
                </Modal>
                아바타
            </div>
        );
    }
}

export default Avatar;
