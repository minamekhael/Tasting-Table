import {
    GET_RECIPES_SUCCESS,
    GET_RECIPES_FAILURE
} from '../constants/recipe'

const initialState = {
    recipes: []
};

export default function RecipeReducer(state = initialState, action){
    switch (action.type) {
        case GET_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: action.details.recipes
            }
            break;
        case GET_RECIPES_FAILURE:
            return {
                ...state,
                recipe: action.details.recipe
            }
            break;
        default:
            return {...state}
    }
}