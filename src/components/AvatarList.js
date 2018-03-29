import React, { Component } from 'react';
import './AvatarList.css';

class AvatarList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      obj: this.props.imageObj
    }
  }

  render() {
    console.log(this.state.obj, 'AvatarList')
    return (
      <div>
        <div className="triangle"></div>
        <div className="popover">
          <h1 className="title">Choose your avatar</h1>
        </div>
      </div>
    );
  }
}

export default AvatarList;