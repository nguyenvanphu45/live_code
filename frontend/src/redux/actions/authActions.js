import ACTIONS from '.';

export const dispatchLogin = (user) => {
    return {
        type: ACTIONS.LOGIN,
        payload: user,
    };
};

export const fetchUser = async (id, axiosJWT) => {
    const res = await axiosJWT.get('http://10.20.20.56:5000/users');

    return res;
};

export const dispatchGetUser = (user) => {
    return {
        type: ACTIONS.GET_USER,
        payload: user,
    };
};

export const dispatchUpdateUser = (user) => {
    return {
        type: ACTIONS.UPDATE_USER,
        payload: user,
    };
};

export const dispatchLogoutUser = () => {
    return {
        type: ACTIONS.LOGOUT,
    };
};
