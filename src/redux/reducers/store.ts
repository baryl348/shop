import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

 const rootReducer = combineReducers({
  form: formReducer,
});

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store
