import React, { Component } from 'react';
import './SingleAvatar.css';

class SingleAvatar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    //console.log('props', this.props)
    return (
      <div>
        <img className="avatar" src={this.props.image}/>
      </div>
    );
  }
}

export default SingleAvatar;