
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import beastsJSON from './data.json';

// import modal from react bootstrap
import Modal from 'react-bootstrap/Modal';

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
        <Main beastsJSON={beastsJSON} />
        <Footer/>
        <Modal 
          // display the modal or hide the modal
          show={this.state.showModal}

          // when modal hides, set state to false
          onHIde={this.handleHideModal}
        />
      </>
    );
  }
}

export default App;
 
