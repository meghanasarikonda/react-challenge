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
      <span>
        <div className={this.state.popover ? "triangle" : "popfadeout"}></div>
        <div className={this.state.popover ? "popover" : "popfadeout"} >
          <h1 className="title">Choose your avatar</h1>
          <ul ref={node => this.node = node}>

            {
              this.state.obj.map((imageObj) => (
                <li
                  key={100 - imageObj["id"]}
                  className={this.state.isLoading ? (imageObj["id"] === this.state.loadingId  ? "avatarlistload spinner " : "avatarlist") : (imageObj["id"] === this.props.image["id"] ? "currentavatar": "avatarlist")}
                  onClick={this.handleClick.bind(this, imageObj["id"])}>

                  <div className={this.state.isLoading ? "": "image"}>
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
      </span>
    );

  }
}

export default AvatarList;