import React from 'react';

// import modal from react bootstrap
import Modal from 'react-bootstrap/Modal';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast'


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
      // title of the selected beast to do Modal things with
      selectedBeastName: '',
    }
  }

  // function to set state of showModal to true
  // send reference to this to Main
  handleShowModal = selectedBeastName =>
  {
    this.setState(
    {
      showModal: true,
      selectedBeastName: selectedBeastName,
    });
  }

  // function to set state of showModal to false
  // send reference to this to Main
  handleHideModal = () =>
  {
    this.setState(
    {
      showModal: false,
    });
  }

  // use the State in App.js to render a SelectedBeast in a modal window
  render()
  {
    return (
      <>
        <Header/>
        <Main 
          // send imported data into the Main component
          beastsJSON={beastsJSON} 

          // pass in reference to event handler that makes the modal thingy appear
          handleShowModal={this.handleShowModal}

        />
        <Footer/>

        {/* pass props I want to use on the modal thing into <SelectedBeast /> */}
        <SelectedBeast
          // pass in beasts data
          beastsJSON={beastsJSON}

          // pass in name of the beast user clicked on
          selectedBeastName={this.selectedBeastName}

          // pass in showModal state
          show={this.state.showModal}

          // pass in reference to handleHideModal (for when a user wants to exit out of a Modal thingy)
          onHide={this.handleHideModal}
        />
      </>
    );
  }
}

export default App;
 
