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
      openAvatarList: false
    }

    this.imageUpdater = (id) => {
      //console.log(e, 'e from line 16')
      this.setState({
        image: ImageList[id - 1]
      });
    }

    this.openPopover = () => {
      this.setState({
        openAvatarList: true
      })
    }

    this.handleClick = () => {
      if (this.state.openAvatarList) {
        this.setState({
          openAvatarList: false
        })
      }
    }

  }

  render() {
    console.log(this.state.image, "line24")

    let display;
    if (this.state.openAvatarList) {
       display = <AvatarList imageObj={this.state.ImageList} imageUpdater={this.imageUpdater} initial={this.state.initial} />
    }

    return (
      <div onClick={this.handleClick}>
        <SingleAvatar image={this.state.image} openPopover={this.openPopover}/>
        {display}
      </div>
    );
  }
}

export default Main;