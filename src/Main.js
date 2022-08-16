// renders <Main> element
import React from 'React';
import HornedBeast from './HornedBeast';

// render copies of HornedBeast component
class Main extends React.Component{
  render()
  {
    // make an array of horned beasts
    // iterate through the array and render a <HornedBeast> element with props of each
    return(
      <>
        <HornedBeast></HornedBeast> 
        {/* props */}
      </>
    );
  }
}

export default Main;
