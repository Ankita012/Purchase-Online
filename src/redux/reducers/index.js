import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts:ProductReducer,
    product: selectedProductReducer,
})
export default reducers;