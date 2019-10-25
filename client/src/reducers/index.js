import { combineReducers } from 'redux';
import RecipeReducer from './recipe';

const reducers = combineReducers({
    recipes: RecipeReducer
});

export default reducers;