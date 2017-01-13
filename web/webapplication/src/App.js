import React, {Component} from 'react';
import Header from './component/Header';
import Content from './component/Content';
import Avatar from './component/Avatar'
import '../node_modules/c3/c3.css' //이거 지우면안됨


class App extends Component {

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                <script src="https://d3js.org/d3.v4.js"></script>
                <div className="container-fluid">
                    <Header/>
                    <Avatar/>
                    <Content/>
                </div>
            </div>
        );
    }
}

export default App;
