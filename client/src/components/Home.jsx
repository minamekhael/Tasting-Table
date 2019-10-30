import React from 'react';
import Button from './ui/Button'

class Home extends React.Component{

  render(){
    return(
      <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container secondary-color">
          <section className="text-center">
            <h1 className="display-4">Tasting Table</h1>
            <p className="lead">
              A curated list of recipes for the best homemade meal and delicacies.
            </p>
            <hr className="my-4" />
              <Button onClick={()=> this.props.history.push('/recipes')} text="View Recipes" />
              </section>
          </div>
        </div>
      </div>
    )
  }
};

export default Home
