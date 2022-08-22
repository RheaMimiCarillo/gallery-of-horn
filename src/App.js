import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast'


// // Import the `data.json` file into your `App`
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
      showModalBeast: true,
      // title of the selected beast to do Modal things with
      modalBeastId: 0,

      // array of all beasts
      // may keep track of favorites here by adding a {favorites: }property to each object
      importedBeastArr: beastsJSON
    }
  }

  // event handler to toggle the showModalBeast flag
  handleModalBeast = () =>
  {
    this.setState(
    {
      // change the showModalBeast state to the opposite of whatever it is currently
      showModalBeast: !this.state.showModalBeast,

    });
  }

  // event handler to update the id of the SelectedBeast to render
  handleModalBeastId = modalBeastId =>
  {
    this.setState(
    {
      modalBeastId: modalBeastId
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
          beastsJSON={this.state.importedBeastArr}

          // pass in reference to event handler that makes the modal thingy appear
          handleModalBeast={this.handleModalBeast}
          handleModalBeastId={this.handleModalBeastId}
        />
        <Footer/>

        <SelectedBeast
          // flag to display the SelectedBeast Modal
          show={this.state.showModalBeast}

          // event handler that calls handleModalBeast when this element hides
          onHide={this.handleModalBeast}

          // the array of beasts that I save to the state of App.js
          // going to use this to render the beast I select
          beastsJSON={this.state.importedBeastArr}

          modalBeastId={this.state.modalBeastId}
        />
      </>
    );
  }
}


export default App;
 
