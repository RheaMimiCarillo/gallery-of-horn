import React from 'react';
import Col from 'react-bootstrap/Col';

// import Card component
import Card from 'react-bootstrap/Card';
import '../styles/HornedBeast.css';

class HornedBeast extends React.Component
{
  
  constructor(props)
  {
    super(props)
    this.state = 
    {
      // count number of times beast image is clicked
      favorites: 0,
    }
  }

  // event handler
  handleFavorites = () => 
  {
    // code that wil update the state of the favorites counter
    
    // built in React method to set state
    this.setState
    ({
      favorites: this.state.favorites + 1,
    });
  };

  handleCardBodyClick = () =>
  {
    this.props.handleModalBeastId(this.props.key);
  };

  render()
  {
    return(
      <Col className='mt-4'>
        <Card className='hornedBeast h-100 p-1'>
        <Card.Img 
          variant='top' 
          src={this.props.imageURL} 
          alt={this.props.description}
          favorites={this.state.favorites}
          onClick={this.handleFavorites}
          // make images take up full width
          className='img-responsive'
        />
        {/* When the body of a beast card is clicked change state of app.js*/}
        <Card.Body onClick={this.handleCardBodyClick}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text className='heart'>🖤{this.state.favorites}</Card.Text>
        </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
