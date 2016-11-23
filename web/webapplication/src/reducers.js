/**
 * Created by youngil on 2016-11-21.
 */
import {combineReducers} from 'redux';
import avatar from './reducer/avatar';
import weather from './reducer/weather';

const reducers = combineReducers({
    avatar, weather
});

export default reducers;