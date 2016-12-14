/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import '../css/App.css';
import imgsrc from '../images/test_avatar.jpg'
import imgsrc1 from '../images/22.png'
import {Modal, Button, Checkbox} from 'react-bootstrap'
import * as firebase from 'firebase';
import * as actions from '../actions/index';

class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            statement: "오뎅날씨",
            statement1: "코트날씨"
        };


        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

        // super();
        // this.state = {
        //
        // };
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

    getInitialState() {
        const rootRef = firebase.database().ref().child('weather');
        const statementRef = rootRef.child('statement');


        statementRef.on('value', snap => {
            this.setState({
                statement: snap.val()
            });
        });
    }

    render() {
        // console.log(this.state.showModal);
        return (
            <div>
                <img onClick={this.open} src={imgsrc} className="img-responsive center-block avatarImg" alt="아바타"
                     width="500" height="300"/>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>투표</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Checkbox inline>
                            1.<p> {this.state.statement}</p>
                            <img src={imgsrc} className="img-responsive center-block" width="500"/>
                        </Checkbox>
                        {' '}
                        <Checkbox inline>
                            2.<p> {this.state.statement1}</p>
                          <img src={imgsrc1} className="img-responsive center-block" alt="아바타" width="500"/>
                        </Checkbox>
                        {' '}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" onClick={this.close}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Avatar;
