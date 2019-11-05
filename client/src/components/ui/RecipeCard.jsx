import React from 'react'
import Link from "./Link";
import Vote from "../Vote"

const RecipeCard = props => {
        return (
            <div key={props.index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
              <img
                src={props.recipe.image}
                className="card-img-top"
                alt={`${props.recipe.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">{props.recipe.name}</h5>
                <Link path={`/recipes/${props.recipe.id}`} text="View Recipe" />
                <Vote />
              </div>
            </div>
          </div>
        )
}

export default RecipeCard
