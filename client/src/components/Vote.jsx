import React from 'react';
import Button from "./ui/Button"

class Vote extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      vote: 0
    }
  }

  handleUpVote(){
    this.setState({vote: this.state.vote + 1})
  };

  handleDownVote(){
    this.setState({vote: this.state.vote - 1})
  };

  render(){
    return(
      <div>
        <Button text={"Up Vote"} onClick={this.handleUpVote.bind(this)}/>
        <br/>
        <Button text={"Down Vote"} onClick={this.handleDownVote.bind(this)} red={true}/>
        <h1>{this.state.vote}</h1>
      </div>
    )
  }
}

export default Vote;
