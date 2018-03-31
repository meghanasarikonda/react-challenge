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
      openAvatarList: false,
      isLoading: false
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

    this.loadingChecker = (bool) => {
      this.setState({
        isLoading: bool
      })

    this.closePopover = () => {
      this.setState({
        openAvatarList: false
      })
    }

    }

    this.singleavatar = () => {

      setTimeout(() => {
        if (!this.state.isLoading) {
          this.setState({
            openAvatarList: false
          })
        }
      }, 200)
    }

  }

  render() {
    console.log(this.state.isLoading, "line24")

    let display;
    if (this.state.openAvatarList) {
       display = <AvatarList imageObj={this.state.ImageList} imageUpdater={this.imageUpdater} initial={this.state.initial} image={this.state.image} loadingChecker={this.loadingChecker} closePopover={this.closePopover} />
    }

    return (
      <div>
        <div>
        <SingleAvatar image={this.state.image} openPopover={this.openPopover} />
        </div>
        <div onClick={this.singleavatar}>
        {display}
        </div>
      </div>
    );
  }
}

export default Main;