/**
 * Created by youngil on 2016-11-21.
 */
import React, {Component} from 'react';
import TempInfo from './TempInfo'

class Header extends Component {
    render() {
        // let de = d3.select("body").append("div").text("새로운 문장");
        return (
            <div className="row-top">
                <TempInfo/>
            </div>
        );
    }
}
export default Header;
