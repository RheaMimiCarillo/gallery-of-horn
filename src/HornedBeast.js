import React from 'react';

// import Card component
import Card from 'react-bootstrap/Card';
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
      
      // <div className="hornedBeast">
      //   {/* title of animal */}
      //   <h2>{this.props.title}</h2>
      //   <div className='imgContainer'>
      //     {/* image of animal */}
      //     <img 
      //       src={this.props.imageURL} 
      //       alt={this.props.description} 
      //       title={this.props.title}
      //       favorites={this.state.favorites}
      //       onClick={this.handleFavorites}
      //     />
      //     {/* p to display votes for each beast */}
      //     <p className='heart'>🖤{this.state.favorites}</p>
      //   </div>
      //   {/* description of animal */}
      //   <p>{this.props.description}</p>
      // </div>
      <Card className='hornedBeast' style={{width: '18rem'}}>
        <Card.Img 
          variant='top' 
          src={this.props.imageURL} 
          alt={this.props.description}
          favorites={this.state.favorites}
          onClick={this.handleFavorites}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>🖤{this.state.favorites}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
