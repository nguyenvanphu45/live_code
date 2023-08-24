import ACTIONS from '../actions';

const initialState = {
    challenge: [],
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTIONS.UPDATE_CHALLENGE:
            return {
                ...state,
                user: action.payload,
            };

        case ACTIONS.GET_CHALLENGE:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};

export default authReducer;
