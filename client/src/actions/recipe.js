import {
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE
 } from '../constants/recipe';

 export const deleteRecipeFailure = details => ({
  type: DELETE_RECIPE_FAILURE,
  details,
});

 export const deleteRecipeSuccess = details => ({
      type: DELETE_RECIPE_SUCCESS,
      details,
    });

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

export const deleteRecipe = (id, callback) => (dispatch,getState) => {
  const url = `http://localhost:3001/recipes/${id}`;
    fetch(url, {
      method: 'DELETE'
      })

      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })

      .then((response) => {
        dispatch(deleteRecipeSuccess())
       callback();
      })
}
