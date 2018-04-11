import React, { Component } from 'react';
import ImageList from '../Imagefiles.js';
import SingleAvatar from './SingleAvatar';
import AvatarList from './AvatarList';
import './Main.css';
import { CSSTransition } from 'react-transition-group';


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
      });
    }

    this.closebox = () => {
      this.setState({
        openAvatarList: false
      });
    }

    this.loadingChecker = (bool) => {
      this.setState({
        isLoading: bool
      });
    }

    this.singleavatar = () => {
      setTimeout(() => {
        if (!this.state.isLoading) {
          this.setState({
            openAvatarList: false
          });
        }
      }, 200)
    }

  }


  render() {
    return (
      <div>

        <SingleAvatar image={this.state.image} openPopover={this.openPopover} />

        <CSSTransition
          in={this.state.openAvatarList}
          classNames="box"
          timeout={300}
          unmountOnExit
        >
          <AvatarList
            closebox={this.closebox}
            imageObj={this.state.ImageList}
            imageUpdater={this.imageUpdater}
            image={this.state.image}
            loadingChecker={this.loadingChecker}
          />
        </CSSTransition>

      </div>
    );
  }
}

export default Main;