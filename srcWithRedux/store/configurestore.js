
import  { createStore, combineReducers, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducers from '../reducers/entries.reducers';
import createSagaMiddleware from 'redux-saga';
// import { count, testSaga } from '../sagas/testSaga';
import { initSagas } from '../sagas';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
  const store =  createStore(
    combineReducers({
    entries : entriesReducers,
  }),composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);
initSagas(sagaMiddleware);
// sagaMiddleware.run(testSaga)
// sagaMiddleware.run(count)
return store;
}

export default configureStore;