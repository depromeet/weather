/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import TempInfo from './TempInfo'
import Avatar from './Avatar'

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 text-left">
                        <TempInfo/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <Avatar/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
