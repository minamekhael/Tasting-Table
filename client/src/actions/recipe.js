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
          .then(responseJSON => {
              dispatch(getRecipesSuccess({
                  recipes: responseJSON
              }))
          })
    } catch (error) {
        dispatch(getRecipesFailure())
    }
}

export const deleteRecipe = (id, callback) => (dispatch,getState) => {
  console.log('C')
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
        console.log('D')
        dispatch(deleteRecipeSuccess())
       callback();
      })
}


// Why async actions aren't giving you an error in Redux
// Why we are console.loging ACBD* vs ACDB
// React Doc -> 12. Thinking in React
// 1-11 artcile
