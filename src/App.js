import React from 'react';

// import modal from react bootstrap
import Modal from 'react-bootstrap/Modal';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// Import the `data.json` file into your `App`
import beastsJSON from './data.json';

import './App.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      // set to false, by default, so it doesn't show up until you click on it
      showModal: false,
    }
  }

  // function to set state of showModal to true

  // function to set state of showwModal to false

  // use the State in App.js to render a SelectedBeast in a modal window
  
  // TODO: renders a `Header`, `Footer`, and `Main` in the App component
  render()
  {
    return (
      <>
        <Header/>
        <Main 
          // send imported data into the Main component
          beastsJSON={beastsJSON} 

          // Send a function into your Main component that allows the user to update state in the App

          handleShowModal={this.handleShowModal}

          handleHideModal={this.handleHideModal}

        />
        <Footer/>
        <Modal 
          // display the modal or hide the modal
          show={this.state.showModal}

          // when modal hides, set state to false
          onHide={this.handleHideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.name}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

export default App;
 
