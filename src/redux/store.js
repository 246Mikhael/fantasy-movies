import { configureStore} from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const loadState = () => {
    let preloadedState = localStorage.getItem('reduxStateMovies');

    if(preloadedState === null){
        return;
    }
    return JSON.parse(preloadedState);
}

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState(),
    middleware:[sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
})

store.subscribe(()=>{
    localStorage.setItem('reduxStateMovies', JSON.stringify(store.getState()))
})

sagaMiddleware.run(rootSaga)
