import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component{
  
  constructor(props)
  {
    super(props)
    this.state = {
      // count number of times beast image is clicked
      favorites = 0,
    }
  }

  // event handler
  handleFavorites = () => 
  {
    // code that wil update the state of the favorites counter
    
    // built in method to set state
    this.setState
    ({
      favorites: this.state.favorites + 1,
    });
  };
  
  render()
  {
    return(
      <div className="hornedBeast">
        {/* title of animal */}
        <h2>{this.props.title}</h2>

        {/* image of animal */}
        <img 
          src={this.props.imageURL} 
          alt={this.props.description} 
          title={this.props.title}
          favorites={this.state.favorites}
          onClick={this.handleFavorites}
        />

        {/* p to display votes for each beast */}
        <p>{this.state.favorites} put heart icon 🖤 somewhere here for how many favorites each picture has</p>
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
