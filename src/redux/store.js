import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
// import { logActions } from '../settings/constants';

// const loggingMiddleware = (store) => {
//     return (next) => {
//         return (action) => {
//             if (logActions) {
//                 const collapsed = false;
//                 const msg = `Action: ${action.type}`;
//                 if (collapsed) console.groupCollapsed(msg);
//                 else console.group(msg);
//                 console.log('Action:', action);
//                 console.log('Previous state:', store.getState());
//             }

//             const result = next(action);

//             if (logActions) {
//                 console.log('New state:', store.getState());
//                 console.groupEnd();
//             }

//             return result;
//         };
//     };
// };

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(reducers, {}, compose(applyMiddleware(...middlewares)));

export default store;

sagaMiddleware.run(sagas);
