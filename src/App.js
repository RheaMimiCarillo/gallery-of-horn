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

          // Send a function into your Main component that allows the user to update state in the App

          handleShowModal={this.handleShowModal}

        />
        <Footer/>
        {/* move Modal to the Selected Beast js file and use the shorthand <Modal/> to pass in props to it */}
        <Modal 
          // prop to pass `showModal` state to Modal
          show={this.state.showModal}
          // when modal is hidden, use handleHideModal to set the `showModal` state in App.js to `false'
          onHide={this.handleHideModal}
        />
      </>
    );
  }
}

export default App;
 
