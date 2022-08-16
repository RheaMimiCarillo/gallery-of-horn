import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component{
  
  constructor(props)
  {
    super(props)
    this.state = {
      votes = 0,
    }
  }

  // handle votes
  handleVotes = () =>
  {
    // code that wil update the state of the voting counter
    
    // built in method to set state
    this.setState(
      {
        votes: this.state.votes + 1,
      }
    );
  };
  
  render(){
    return(
      <div className="hornedBeast">
        {/* title of animal */}
        <h2>{this.props.title}</h2>

        {/* image of animal */}
        <img 
          src={this.props.imageURL} 
          alt={this.props.description} 
          title={this.props.title}
          onClick={this.handleVotes}
        >
          {this.state.votes}
        </img>

        {/* p to display votes for each beast */}
        <p>{this.state.votes} put heart icon 🖤 somewhere here votes</p>
        {/* description of animal */}
        <p>{this.props.description}</p>
      </div>
    );
  }
}


// will make button green

// event handler for button
// this'd be in the component class
needsHelp = () => {
  this.setState({
    helpMe: true,
  });
};

// this'd be in the render() part of the component
// button with onClick event listener
// we'd use a different eventHandler for actual labs
/* <Button className={'div-Button'} variant="success" onClick={this.needsHelp}>Good Job!</Button>
*/
/*
<div> {helpMe ? 'Ineed help' : ''}
  </div> 
*/

voted = () => {
  this.setState(
    needsVote
  )
}

export default HornedBeast;
