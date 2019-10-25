import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'; 
import { getRecipes } from '../actions/recipe';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount(){
    const {dispatch}= this.props;
    console.log('component mounted', this.props)
    dispatch(getRecipes())
  }

  componentDidUpdate(){
    console.log('component updated', this.props) 
  }

  render() {
    console.log('render', this.props)
    const { recipes } = this.props;
    const allRecipes = recipes.map((recipe, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={recipe.image}
            className="card-img-top"
            alt={`${recipe.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{recipe.name}</h5>
            <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    ));
    const noRecipe = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No recipes yet. Why not <Link to="/new_recipe">create one</Link>
        </h4>
      </div>
    );

    return (
      <div>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Recipes for every occasion</h1>
            <p className="lead text-muted">
              A list of your own recipes to share or keep.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="row">
              {recipes.length > 0 ? allRecipes : noRecipe}
            </div>
            <Link to="/" className="btn custom-button">
              Home
            </Link>
            <div className="text-right mb-3">
              <Link to="/new_recipe" className="btn custom-button">
                Create New Recipe
              </Link>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
  const mapStateToProps = state => ({ recipes: state.recipes.recipes });
export default connect(mapStateToProps)(Recipes);
