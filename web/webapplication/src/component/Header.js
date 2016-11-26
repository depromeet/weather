/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import TempInfo from './TempInfo'
import Avatar from './Avatar'

class Header extends Component {
    render() {
        return (
            <div>
                <TempInfo/>
                <Avatar/>
            </div>

        );
    }
}

export default Header;
