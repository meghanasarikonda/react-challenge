import React, { Component } from 'react';
import ImageList from '../Imagefiles.js';
import SingleAvatar from './SingleAvatar';
import AvatarList from './AvatarList';
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
      console.log('line 44 singleavatar')
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

    return (
      <div>

        <SingleAvatar image={this.state.image} openPopover={this.openPopover} />
        <CSSTransition
          in={this.state.openAvatarList}
          classNames="message"
          timeout={300}
          unmountOnExit
        >

        <AvatarList imageObj={this.state.ImageList} imageUpdater={this.imageUpdater} initial={this.state.initial} image={this.state.image} loadingChecker={this.loadingChecker} closePopover={this.closePopover}/>

        </CSSTransition>

      </div>
    );
  }
}

export default Main;