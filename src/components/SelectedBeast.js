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
            <Modal.Title>{this.props.beastsJSON[0].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
              src={this.props.beastsJSON[this.props.modalBeastId].image_url} 
              alt={this.props.beastsJSON[this.props.modalBeastId].description}
            >
            </img>
            <p>{this.props.beastsJSON[this.props.modalBeastId].description}</p>
          </Modal.Body>
        </Modal>
      </>  
    )
  }
}

export default SelectedBeast;
