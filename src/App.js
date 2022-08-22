import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast'


// Import the `data.json` file into your `App`
import beastsJSON from './json/data.json';

import './styles/App.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state= 
    {
      // set to false, by default, so it doesn't show up until you click on it
      showModalBeast: false,
      // title of the selected beast to do Modal things with
      modalBeastId: -1,
      cardBeastIDs: [],
    }
  }

  // function to set state of showModal to true
  // send reference to this to Main
  handleShowModalBeast = selectedBeastName =>
  {
    this.setState(
    {
      showModal: true,
      selectedBeastName: selectedBeastName,
    });
  }

  // function to set state of showModal to false
  // send reference to this to Main
  handleHideModalBeast = () =>
  {
    this.setState(
    {
      showModal: false,
    });
  }

  // handleSelectBeastToRender = 

  // handleSelectBeastsFromDropdownMenu = 

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
          modalBeastId={this.modalBeastId}
        />
        <Footer/>

        {/* pass props I want to use on the modal thing into <SelectedBeast /> */}
        <SelectedBeast
          // pass in beasts data
          beastsJSON={beastsJSON}

          // note from tired self: instead of making individual states for each bit of data I want to render in the Modal thingy, just use a property as a unique key from the JSON and then have the SelectedBeast component get the rest of the data from the array using that key.. also, see if this is a good idea in the morning, because I'd have to run a loop to look for each lil bit of data using the key
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
 
