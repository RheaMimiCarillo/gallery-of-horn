// renders <Main> element
import React from 'react';
import HornedBeast from './HornedBeast';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import '../styles/Main.css';



// render copies of HornedBeast component
class Main extends React.Component{

  constructor(props)
  {
    super(props);
    this.state=
    {
      optionsArr: [1,2,3,100], 
    }
  }
  handleFormSubmit = () =>
  {
    this.props.handleSelectBeastsByHorns();
  }

  handleSelectHorns = e =>
  {
    this.props.handleSelectHorns(e.target.value)
  }
  
  // getOptions = () =>
  // {
  //   let optionsArr = [];
  //   this.props.beastsJSON.forEach( beast => {
  //     if(!optionsArr.includes(beast.horns))
  //     {
  //       optionsArr.push(beast.horns);
  //       console.log(optionsArr);
  //     }
  //   });
  //   this.setState({
  //     optionsArr: optionsArr,
  //   })
  // }

  //getOptionsList = handleOptions => handleOptions.map(beast => <option>beast.horns</option>);
  /*
    write a switch

    1. user selects a number onChange handler
    2. user hits submit onSubmit handler
      3. call the function that has the switch to filter the importedBeastArr to get a shallow copy of the array with only the selected beasts
      4. update state with the filtered beasts, so the beast Cards can render with the filtered data


    switch (expr) {
  case 1:
    ;
    break;
  case 2:
    break;
  case 3:
    break;
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  case 100:
  // case for when they don't input anything when submitting
      break;
  default:
    // change the filtered array back to the default array
    break;
}

filteredData function to make an array

setState to set importedBeastArr: filteredData;
  // use .filter() and use .find() to either display a 
  */
  render()
  {
    let optionsList = this.state.optionsArr.map(num => <option value={num} key={num}>{num}</option>);
    return(
      // add bootstrap <Col> and <Row>
      // use bootstrap class to style the <Col> and <Row> to make them responsive
      // give the Card a class of 'h-100' to have them take up the entire vertical space of each card

      // Map over the JSON data in your Main component to render each beast
      <main>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group>
            <Form.Label htmlFor="chooseHorns">Select Beasts by Horns:
              <Form.Select
                onChange={this.handleSelectHorns}
                id="chooseHorns" 
                name="chooseHorns"
              >
                <option value={10} key={0}>reset</option>
                {optionsList}
              </Form.Select>
            </Form.Label>
            <Button type="submit">Submit</Button>
          </Form.Group>
          
          
          
        </Form>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
          {
            // this stuff is gonna go in the method I use to make an array of <HornedBeast> objects to render (beastToRender)
            this.props.beastsJSON.map(currentBeast =>
            (
              <HornedBeast
                // react likes each component to have a key 
                // the _id property starts at 1, not 0
                key={currentBeast._id}
                id={currentBeast._id}
                currentBeast={currentBeast}
                // pass in reference to handleModalBeast from App.js
                handleModalBeast={this.props.handleModalBeast}
                handleModalBeastId={this.props.handleModalBeastId}
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
