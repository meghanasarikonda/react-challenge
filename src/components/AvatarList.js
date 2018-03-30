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
          {this.state.obj.map((imageObj) =>
            <img src={imageObj["src"]} key={imageObj["id"]} alt={imageObj["label"]} />
          )}
        </div>
      </div>
    );
  }
}

export default AvatarList;