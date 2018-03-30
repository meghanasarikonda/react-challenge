import React, { Component } from 'react';
import './SingleAvatar.css';

class SingleAvatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: this.props.image,
      initial: true
    }

    this.handleClick = (e) => {
      e.preventDefault();
      this.props.openPopover();
    }
  }


  render() {
    console.log('props', this.props.image)

    return (
      <div>
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