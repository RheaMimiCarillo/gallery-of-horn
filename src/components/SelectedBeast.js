import React from 'react';

// import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'

import '../styles/SelectedBeast.css'

class SelectedBeast extends React.Component
{

  render()
  {
    return (
      <>
        <Modal 
            show={this.props.show}
            onHide={this.props.onHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>beast title goes here{this.props.beastsJSON[0].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>beast image, description, and favorites go here
            <img 
              src={this.props.beastsJSON[0].image_url} 
              alt={this.props.beastsJSON[0].description}
            >
            </img>
            <p>{this.props.beastsJSON[0].description}</p>

            
          </Modal.Body>
        </Modal>
      </>  
    )
  }
}

export default SelectedBeast;
