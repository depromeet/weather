import React, {Component} from 'react';
import Header from './component/Header';
import Content from './component/Content';
import Avatar from './component/Avatar'
import '../node_modules/c3/c3.css' //이거 지우면안됨


class App extends Component {

    render() {
        const now = new Date();
        const nightTime = new Date().setHours(17,30,0);
        const morningTime = new Date().setHours(8,0,0);
        let cname = 'night';
        if ((now <= nightTime)&&(now>=morningTime) ){
            cname = 'day'
        }
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                <script src="https://d3js.org/d3.v4.js"></script>

                <div className={cname==='day'?'dayback':'nightback'}>
                    <div className="container-fluid">
                        <Header/>
                        <Avatar/>
                        <Content/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
