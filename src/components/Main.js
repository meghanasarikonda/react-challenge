import React, { Component } from 'react';
import imageObj from '../Imagefiles.js';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(imageObj["avatar1"])
    return (
      <div>
        <img src={imageObj["avatar1"]}/>
        <div>
          Here comes popover
        </div>
      </div>
    );
  }
}

export default Main;