import React, {Component} from 'react';
import Header from './component/Header';
import Content from './component/Content';
import styles from './css/App.css'

class App extends Component {

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                <div className="container">
                    <div className={styles.backimage}>
                        <Header/>
                        <Content/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;