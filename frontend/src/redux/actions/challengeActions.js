import ACTIONS from '.';

export const fetchChallenge = async (id, axiosJWT) => {
    const res = await axiosJWT.get('http://10.10.23.32:5000/challenge');

    return res;
};

export const dispatchGetChallenge = (challenge) => {
    return {
        type: ACTIONS.GET_CHALLENGE,
        payload: challenge,
    };
};

export const dispatchUpdateChallenge = (user) => {
    return {
        type: ACTIONS.UPDATE_USER,
        payload: user,
    };
};
