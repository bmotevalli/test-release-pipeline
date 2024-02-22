import { put, takeLatest } from 'redux-saga/effects';
import { authApi } from '../../services/api';

import { actionTypes, setUser } from './actions';

function* handleGetUser(action) {
    try {
        if (action.user) {
            const response = yield authApi.GET('/user', { user: action.user });
            yield put(setUser(response.data));
        }
        else {
            yield put(setUser(action))
        }
        
    } catch (e) {
        yield console.log(e.message); // put(error(e.message || JSON.stringify(e)));
    }
}

export default function* watchGetUser() {
    yield takeLatest(actionTypes.GET_USER, handleGetUser);
}