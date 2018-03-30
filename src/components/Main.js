import React, { Component } from 'react';
import ImageList from '../Imagefiles.js';
import SingleAvatar from './SingleAvatar'
import AvatarList from './AvatarList'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: ImageList[0],
      ImageList: ImageList,
      initial: true
    }

    this.imageUpdater = (id) => {
      //console.log(e, 'e from line 16')
      this.setState({
        image: ImageList[id - 1]
      });
    }
  }

  render() {
    console.log(this.state.image, "line24")
    return (
      <div>
        <SingleAvatar image={this.state.image} />
        <AvatarList imageObj={this.state.ImageList} imageUpdater={this.imageUpdater} initial={this.state.initial} />
      </div>
    );
  }
}

export default Main;