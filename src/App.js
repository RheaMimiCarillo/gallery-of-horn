
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import beastsJSON from '.data.json';

class App extends React.Component
{
  // TODO: renders a `Header`, `Footer`, and `Main` in the App component
  render()
  {
    return (
      <>
        <Header/>
        <Main beastsJSON={beastsJSON} />
        <Footer/>
      </>
    );
  }
}

export default App;
 
