import React from "react";
import Button from './ui/Button';
import {deleteRecipe} from '../actions/recipe';
import { connect } from 'react-redux';


class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipe: { ingredients: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `http://localhost:3001/recipes/${id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ recipe: response }))
      .catch(error => console.log(error.message));
  }

 handleDeleteRecipe() {
    const {dispatch} = this.props;
    const {
      match: {
        params: { id }
      }
    } = this.props;
    console.log('A')
   dispatch(deleteRecipe(id, this.navRecipes.bind(this)))
   console.log('B')
     console.log()
}
  navRecipes(){
    this.props.history.push("/recipes")
  }

  render() {
    const { recipe } = this.state;
    let ingredientList = "No ingredients available";
    if (recipe.ingredients.length > 0) {
      ingredientList = recipe.ingredients
        .split(",")
        .map((ingredient, index) => (
          <li key={index} className="list-group-item">
            {ingredient}
          </li>
        ));
    }

    const recipeInstruction = this.addHtmlEntities(recipe.instruction);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={recipe.image}
            alt={`${recipe.name}`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {recipe.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Ingredients</h5>
                {ingredientList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Preparation Instructions</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${recipeInstruction}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              < Button onClick={this.handleDeleteRecipe} text="Delete Recipe" red={true}/>
              < Button onClick={()=> this.props.history.push('/recipes')} text="Back to Recipes" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ recipes: state.recipes.recipes });
export default connect(mapStateToProps)(Recipe);
