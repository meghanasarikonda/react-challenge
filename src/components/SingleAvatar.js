import React, { Component } from 'react';
import './SingleAvatar.css';

class SingleAvatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: this.props.image,
      initial: true
    }

    this.handleClick = () => {

    }
  }


  render() {
    console.log('state', this.state.image)
    console.log('props', this.props.image)

    // const image = this.state.image
    // const img = this.state.initial ? (
    //     <img className="avatar" src={this.state.image["src"]} key={this.state.image["id"]} alt={this.state.image["label"]} onClick={() => console.log('hurray')} onClick={this.handleClick} />
    // ) : (
    //   <h1>Here</h1>
    // )

    return (
      <div>
        <img className="avatar" src={this.props.image["src"]} key={this.props.image["id"]} alt={this.props.image["label"]} onClick={() => console.log('hurray')} onClick={this.handleClick} />
      </div>
    );
  }
}

export default SingleAvatar;