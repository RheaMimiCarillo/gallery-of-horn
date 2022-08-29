import React from 'react';

// import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'

import '../styles/SelectedBeast.css'

class SelectedBeast extends React.Component
{
  //currentBeast = this.props.beastsJSON.find(beast => beast._id === this.props.modalBeastId); 
  render()
  {
    let currentBeast = this.props.beastsJSON.find(beast => beast._id === this.props.modalBeastId); 
    console.log(currentBeast);
    return (
      <>
        <Modal 
            show={this.props.show}
            onHide={this.props.onHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>{currentBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
              src={currentBeast.image_url} 
              alt={currentBeast.description}
              className="img-fluid"
            >
            </img>
            <p>{currentBeast.description}</p>
          </Modal.Body>
        </Modal>
      </>  
    )
  }
}

export default SelectedBeast;
