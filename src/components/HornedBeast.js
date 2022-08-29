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
    this.props.handleModalBeastId(this.props.currentBeast._id);
    console.log('handle modal beast ID: ', this.props.currentBeast._id);
    this.props.handleModalBeast();
  };

  render()
  {
    return(
      <Col className='mt-4'>
        <Card className='hornedBeast h-100 p-1'>
        <Card.Img 
          variant='top' 
          src={this.props.currentBeast.image_url} 
          alt={this.props.currentBeast.description}
          favorites={this.state.favorites}
          onClick={this.handleFavorites}
          // make images take up full width
          className='img-fluid' 
        />
        {/* When the body of a beast card is clicked change state of app.js*/}
        <Card.Body onClick={this.handleCardBodyClick} 
            className="beastBody">
          <Card.Title>{this.props.currentBeast.title}</Card.Title>
          <Card.Text>{this.props.currentBeast.description}</Card.Text>
          <Card.Text className='heart' onClick={this.handleFavorites}>🖤{this.state.favorites}</Card.Text>
        </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
