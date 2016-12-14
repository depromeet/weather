/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import TempInfo from './TempInfo'
import Avatar from './Avatar'
import styles from '../css/App.css'

class Header extends Component {
    render() {
        return (
            <div className={styles.Headerr}>
                <TempInfo/>
                <Avatar/>
            </div>
        );
    }
}

export default Header;
