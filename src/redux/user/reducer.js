import { actionTypes } from './actions';

// -----------------------------------------------------------------------------
// Initial state
// -----------------------------------------------------------------------------

let initialState = {
    user: null
};

const userState = JSON.parse(localStorage.getItem('userState'));

if (userState) {
    initialState = {
        ...initialState,
        user: userState.user
    }
}

// -----------------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------------

function setUser(state, action) {
    const objStore = {
        ...state,
        user: action.user,
    };
    if (action.user.user) {
        localStorage.setItem('userState', JSON.stringify(objStore));
    } else {
        localStorage.removeItem('userState');
    }    
    return objStore;
}

// -----------------------------------------------------------------------------
// Reducer
// -----------------------------------------------------------------------------

const actionsMap = {
    [actionTypes.SET_USER]: setUser
};

export default function reducer(state = initialState, action) {
    const reducerFunction = actionsMap[action.type];
    return reducerFunction ? reducerFunction(state, action) : state;
}