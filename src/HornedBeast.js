import React from 'react';

class HornedBeast extends React.Component{
  render(){
    return(
      <>
        {/* title of animal */}
        <h2>{this.props.title}</h2>

        {/* image of animal */}
        <img 
          src={this.props.imageURL} 
          alt={this.props.description} 
          title={this.props.title}>
        </img>

        {/* description of animal */}
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;
