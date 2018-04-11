import React, { Component } from 'react';
import './AvatarList.css';
import axios from 'axios'

class AvatarList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      closePopover: this.props.closePopover,
      select: false,
      obj: this.props.imageObj,
      isLoading: false,
      popover: true
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

        this.setState({
          select: true
        })

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
        }, 1000)
      })

    }

    this.handleclick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.props.closebox()
  }


  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleclick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleclick, false);
  }

  render() {

    return (
      <div>
        <div className={this.state.popover ? "Avatarlist-triangle" : ""}></div>
        <div className={this.state.popover ? "Avatarlist-popover" : ""} >
          <h1 className="Avatarlist-title">Choose your avatar</h1>
          <ul ref={node => this.node = node}>

            {
              this.state.obj.map((imageObj) => (
                <li
                  key={100 - imageObj["id"]}
                  className={this.state.isLoading ? (imageObj["id"] === this.state.loadingId  ? "Avatarlist-avatarlistload spinner " : "Avatarlist-avatarlist") : (imageObj["id"] === this.props.image["id"] ? "Avatarlist-currentavatar": "Avatarlist-avatarlist")}
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