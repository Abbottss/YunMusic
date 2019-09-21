import {
    createStore,
    applyMiddleware
} from "redux"
import rootReducers from "./reducer"
import thunk from "redux-thunk"
export default createStore(rootReducers,applyMiddleware(thunk));