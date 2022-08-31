import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';



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
      showModalBeast: false,
      // title of the selected beast to do Modal things with
      modalBeastId: 1,

      // array of all beasts
      // may keep track of favorites here by adding a {favorites: }property to each object
      importedBeastArr: beastsJSON,
      filteredBeastArr: [],

      selectedHorns: 0,
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
      modalBeastId: modalBeastId,
    });
  }

  // make a filtered array of HornedBeasts 
  handleSelectBeastsByHorns = () =>
  {
    let filter = this.state.importedBeastArr.filter(beast =>
    { 
      console.log(beast);
      return beast.horns===this.state.selectedHorns
    });
    console.log('horns in state in handleSelectBeastsByHorns: ', this.state.selectedHorns);
    console.log('filter: ', filter);
    this.setState(
    {
      filteredBeastArr: filter,
    });
  }

  handleSelectHorns = horns =>
  {
    console.log('horns change:',horns);
    this.setState(
    {
      selectedHorns: horns,
    });
  }

  render()
  {
    return (
      <>
        <Header/>
        
        <Main 
          // send imported data into the Main component
          beastsJSON={this.state.filteredBeastArr}

          // pass in reference to event handler that makes the modal thingy appear
          handleModalBeast={this.handleModalBeast}
          handleModalBeastId={this.handleModalBeastId}
          handleSelectBeastsByHorns={this.handleSelectBeastsByHorns}
          handleSelectHorns={this.handleSelectHorns}
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
          
          // `_id` property of the beast to display in a modal
          modalBeastId={this.state.modalBeastId}
        />
      </>
    );
  }
}


export default App;
 
