import React from 'react';
import Col from 'react-bootstrap/Col';

// import Card component
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component{
  
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
    
    // built in method to set state
    this.setState
    ({
      favorites: this.state.favorites + 1,
    });
  };

  // event handler to toggle the handleShowModal() function in App.js
  handleBeastClick = () =>
  {
    // reference to the handleShowModal() function passed down from props
    this.props.handleShowModal(this.props.selectedBeastName);
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
        <Card.Body>
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
