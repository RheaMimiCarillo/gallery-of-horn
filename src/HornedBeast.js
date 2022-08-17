import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component{
  
  constructor(props)
  {
    super(props)
    this.state = {
      // count number of times beast image is clicked
      favorites: 0,
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
        <div className='imgContainer'>
          {/* image of animal */}
          <img 
            src={this.props.imageURL} 
            alt={this.props.description} 
            title={this.props.title}
            favorites={this.state.favorites}
            onClick={this.handleFavorites}
          />
          {/* p to display votes for each beast */}
          <p className='heart'>{this.state.favorites}🖤</p>
        </div>
        

        
        {/* description of animal */}
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;
