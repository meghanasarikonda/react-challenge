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
      <a href="#" onClick={() => console.log('hurray')}>
        <img className="avatar" src={this.props.image}/>
      </a>
      </div>
    );
  }
}

export default SingleAvatar;