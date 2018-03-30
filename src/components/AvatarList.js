import React, { Component } from 'react';
import './AvatarList.css';

class AvatarList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      obj: this.props.imageObj
    }

    this.handleClick = (i, event) => {
      // console.log('cool')
      // console.log(event.target, 'event')
      console.log(i, 'i line 19')
      console.log(event.target, 'event target')
      this.props.imageUpdater(i);
    }


  }


  render() {
    // console.log(this.state.obj, 'AvatarList')
    return (
      <div>
        <div className="triangle"></div>
        <div className="popover">
          <h1 className="title">Choose your avatar</h1>
          {this.state.obj.map((imageObj) =>
            <img className="avatarlist" src={imageObj["src"]} key={imageObj["id"]} alt={imageObj["label"]} onClick={this.handleClick.bind(this, imageObj["id"])} />
          )}
        </div>
      </div>
    );
  }
}

export default AvatarList;