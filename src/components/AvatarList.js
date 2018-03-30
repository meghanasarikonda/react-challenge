import React, { Component } from 'react';
import './AvatarList.css';
import axios from 'axios'

class AvatarList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      select: false,
      obj: this.props.imageObj,
      isLoading: false,
    }

    this.handleClick = (i, event) => {
      // console.log('cool')
      // console.log(event.target, 'event')
      // console.log(i, 'i line 19')
      // console.log(event.target, 'event target')
      console.log("id", i)
      this.setState({
        isLoading: true,
        loadingId: i
      })
      // if it is clicked, consider as loading
      // set the state to islOADING: TRUE
      // BEFORE RETURN i think in class names, I'll have a checker to check if it is in loading state
      // if it is, then I'll attach a spinner class around it

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
          })
        }, 1000)

      })

    }


  }


  render() {
    console.log(this.state.isLoading, 'isLoading')
    // console.log(this.state.obj, 'AvatarList')
    return (
      <div>
        <div className="triangle"></div>
        <div className="popover">
          <h1 className="title">Choose your avatar</h1>
          <div className={this.state.loading ? "spinner" : ''}>
          {this.state.obj.map((imageObj) =>
            <p className={this.state.isLoading ? (imageObj["id"] === this.state.loadingId ? "spinner" : '') : ''}>
            <img
              className={(imageObj["id"] === this.props.image["id"] ? "currentavatar": "avatarlist")
              }
              src={imageObj["src"]}
              key={imageObj["id"]}
              alt={imageObj["label"]}
              onClick={this.handleClick.bind(this, imageObj["id"])}
            />
            </p>
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default AvatarList;