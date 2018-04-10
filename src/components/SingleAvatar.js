import React, { Component } from 'react';
import './SingleAvatar.css';

class SingleAvatar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = (e) => {
      e.preventDefault();
      this.props.openPopover();
    }
  }

  render() {
    //console.log('props', Object.keys(this.props).length)

    return (
      <div >
        <img className="avatar"
             src={this.props.image["src"]}
             key={this.props.image["id"]}
             alt={this.props.image["label"]}
             onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default SingleAvatar;