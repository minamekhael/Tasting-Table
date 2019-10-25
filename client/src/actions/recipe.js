  
import { GET_RECIPES_SUCCESS, GET_RECIPES_FAILURE } from '../constants/recipe';

export const getRecipesSuccess = details => ({
      type: GET_RECIPES_SUCCESS,
      details,
    });

export const getRecipesFailure = details => ({
      type: GET_RECIPES_FAILURE,
      details,
    });

export const getRecipes = () => (dispatch,getState) => {
    try {
        const url = "http://localhost:3001/recipes";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => {
              dispatch(getRecipesSuccess({
                  recipes: response
              }))
          })
    } catch (e) {
        dispatch(getRecipesFailure())
    }
}