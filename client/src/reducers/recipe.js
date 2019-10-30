import {
    GET_RECIPES_SUCCESS,
    GET_RECIPES_FAILURE,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE } from '../constants/recipe'

const initialState = {
    recipes: []
};


export default function RecipeReducer(state = initialState, action){
    switch (action.type) {
        case GET_RECIPES_SUCCESS:
            console.log('get recipe success',action.details.recipes)
            return {
                recipes: action.details.recipes
            }
        case GET_RECIPES_FAILURE:
            return {
                ...state,
                recipes: action.details.recipe
            }

      case DELETE_RECIPE_SUCCESS:
            console.log('delete recipe success',state)
            return {
                ...state
            }
       case DELETE_RECIPE_FAILURE:
            return {
                ...state,
                recipes: action.details.recipe
            }
        default:
            return {...state}
    }
}
