import { combineReducers } from 'redux';
import reducer from './reducer'
import githubReducer from './githubReducer';
    export default combineReducers({
        app: reducer,
        github: githubReducer
    });