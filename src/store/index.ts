import createSagaMiddleware from 'redux-saga';
import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import rootSaga from './root-saga';
import rootReducer from './root-reducer';


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});


export type AppState = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootSaga);


export default store;
