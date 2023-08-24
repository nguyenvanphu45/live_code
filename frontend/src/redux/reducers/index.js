import { combineReducers } from 'redux';
import auth from '../reducers/authReducer';
import challenge from '../reducers/challengeReducer';

export default combineReducers({
    auth,
    challenge
});
