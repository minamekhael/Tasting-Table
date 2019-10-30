import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getRecipes } from '../actions/recipe';
import Button from './ui/Button';
import RecipeCard from './ui/RecipeCard';
import NoRecipe from './ui/NoRecipe';
import Header from './ui/Header';

class Recipes extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props);
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
      < RecipeCard key={index} recipe={recipe} index={index} />
    ));

    return (
      <div>
        <section className="jumbotron jumbotron-fluid text-center">
          < Header />
        </section>
        <div className="py-5">
          <main className="container">
            <div className="row">
              {recipes.length > 0 ? allRecipes : < NoRecipe />}
            </div>
            <Link to="/" className="btn custom-button">
              Home
            </Link>
            <div className="text-right mb-3">
            < Button onClick={()=> this.props.history.push('/recipes/new')} text="Create New Recipe" />
            </div>
          </main>
        </div>
      </div>
    );
  }
}
  const mapStateToProps = state => ({ recipes: state.recipes.recipes });
export default connect(mapStateToProps)(Recipes);
