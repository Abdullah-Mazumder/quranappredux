import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { fullSurahReducer } from "./reducers/fullSurahReducer";
import { nobleQuranReducer } from "./reducers/nobleQuranReducer";
import { shortSurahReducer } from "./reducers/shortSurahReducer";

const rootReducer = combineReducers({
  shortSurah: shortSurahReducer,
  fullSurahDetails: fullSurahReducer,
  nobleQuran: nobleQuranReducer,
});

const middleware = [thunkMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
