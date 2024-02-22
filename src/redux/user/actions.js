export const actionTypes = {
    GET_USER: 'GET_USER',
    SET_USER: 'SET_USER'
}

export const getUser = (user) => ({
    type: actionTypes.GET_USER,
    user,
});

export const setUser = (user) => ({
    type: actionTypes.SET_USER,
    user,
})