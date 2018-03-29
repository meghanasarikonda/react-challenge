import React, { Component } from 'react';
import imageObj from '../Imagefiles.js';
import SingleAvatar from './SingleAvatar'


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: imageObj["avatar1"],
      imageObj: imageObj
    }
  }

  render() {
    return (
      <div>
        <SingleAvatar image={this.state.image}/>
      </div>
    );
  }
}

export default Main;