import React, {Component} from 'react';
import Header from './component/Header';
import Content from './component/Content';


class App extends Component {

    render() {
        return (
            <div className="App">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default App;