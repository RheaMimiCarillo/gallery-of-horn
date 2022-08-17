// renders <Main> element
import React from 'react';
import HornedBeast from './HornedBeast';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './Main.css';



// render copies of HornedBeast component
class Main extends React.Component{

// this is supposed to save the json array into a local array
// will test when I get to my laptop charger
importedBeastArr = this.props.beastsJSON;

  render()
  { 

    return(
      // add bootstrap <Col> and <Row>
      // use bootstrap class to style the <Col> and <Row> to make them responsive
      // give the Card a class of 'h-100' to have them take up the entire vertical space of each card

      // Map over the JSON data in your Main component to render each beast
      <main>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
          {
            this.importedBeastArr.map((currentBeast, idx) =>
            (
              <HornedBeast
                // react likes each component to have a key 
                key={idx}
                title = {currentBeast.title}
                imageURL = {currentBeast.image_url}
                description = {currentBeast.description}
              />
            ))
          }
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;
