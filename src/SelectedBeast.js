import React from 'react';

// import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'

// need event handlers
// 1. for opening a modal
// 2. for closing a modal
class SelectedBeast extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {

    }
  }

  render()
  {
    return (
      <Modal 
        // prop to pass `showModal` state to Modal
        // Modal has been written so that the props 'show' and 'onHide' are built in and must be named as such
        show={this.props.showModal}
        // when modal is hidden, use handleHideModal to set the `showModal` state in App.js to `false'
        onHide={this.props.handleHideModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeastName}</Modal.Title>
        </Modal.Header>
      </Modal>      
    )
  }
}

export default SelectedBeast;
