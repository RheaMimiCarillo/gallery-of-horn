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

  // function to set state of showModal to true
  // send reference to this to Main
  handleModalBeast = selectedBeastName =>
  {
    this.setState(
    {
      // change the showModalBeast state to the opposite of whatever it is currently
      showModalBeast: !this.state.showModalBeast
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
          handleShowModalBeast={this.handleModalBeast}
          modalBeastId={this.state.modalBeastId}
        />
        <Footer/>

        <SelectedBeast 
          show={this.state.showModalBeast}
          onHide={this.handleModalBeast}
          beastsJSON={this.state.importedBeastArr}
        />
      </>
    );
  }
}


export default App;
 
