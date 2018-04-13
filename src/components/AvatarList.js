import React, { Component } from 'react';
import './AvatarList.css';
import axios from 'axios'

class AvatarList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      closePopover: this.props.closePopover,
      imageList: this.props.imagelist,
      isLoading: false,
      popover: true,
      loadingId: -1
    }

    this.handleClick = (i, event) => {
      this.setState({
        isLoading: true,
        loadingId: i
      });
      this.props.loadingChecker(true);

      axios.get('/', {
        params: {
          id: i
        }
      })
      .then((response) => {

        setTimeout(() => {
          this.props.imageUpdater(i);
          this.setState({
            isLoading: false
          });
          this.props.loadingChecker(false);
          this.setState({
            isShown: false
          });
          this.props.closebox();
        }, 1000);
      });

    }

    this.clickoutside = (e) => {
      if (this.node.contains(e.target)) {
        return;
      }
      this.props.closebox();
    }

    this.chooseClass = (imageObj) => {
      if (this.state.isLoading) {
        if (imageObj["id"] === this.state.loadingId) {
          return "Avatarlist-avatarlistload spinner";
        } else {
          if (imageObj["id"] === this.props.image["id"]) {
            return "Avatarlist-currentavatar";
          } else {
            return "Avatarlist-avatarlist";
          }
        }
      } else {
        if (imageObj["id"] === this.props.image["id"]) {
          return "Avatarlist-currentavatar";
        } else {
          return "Avatarlist-avatarlist";
        }
      }
    }

  }

  componentWillMount() {
    document.addEventListener('mousedown', this.clickoutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickoutside, false);
  }

  render() {

    return (
      <div>
        <div className={this.state.popover ? "Avatarlist-triangle" : ""}></div>
        <div className={this.state.popover ? "Avatarlist-popover" : ""} >
          <h1 className="Avatarlist-title">Choose your avatar</h1>
          <ul ref={node => this.node = node}>

            {
              this.state.imageList.map((imageObj) => (
                <li
                  key={100 - imageObj["id"]}
                  className={this.chooseClass(imageObj)}
                  onClick={this.handleClick.bind(this, imageObj["id"])}>

                  <div className={this.state.isLoading ? "": "Avatarlist-image"}>
                    <img
                      src={imageObj["src"]}
                      key={imageObj["id"]}
                      alt={imageObj["label"]}
                    />
                  </div>
                </li>
              ))
            }

          </ul>
        </div>
      </div>
    );

  }
}

export default AvatarList;


// "Avatarlist-avatarlist "
// Avatarlist-currentavatar