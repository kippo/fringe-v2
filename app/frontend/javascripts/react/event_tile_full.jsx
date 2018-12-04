import React from "react";
import EventTileFullDesktop from "./event_tile_full_desktop.jsx";
import EventTileFullMobile from "./event_tile_full_mobile.jsx";

export default class EventTileFull extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMobile: false
    }
  }

  detectDeviceWidth = () => {
    if(window.innerWidth < 860) {
      this.setState({isMobile: true});
    } else {
      this.setState({isMobile: false});
    }
  }

  throttleResize = () => {
    window.requestAnimationFrame(this.detectDeviceWidth);
  }

  componentDidMount() {
    this.detectDeviceWidth();
    window.addEventListener('resize', this.throttleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.detectDeviceWidth);
  }

  render() {
    if(this.state.isMobile) {
      return <EventTileFullMobile eventData={this.props.eventData} />
    } else {
      return <EventTileFullDesktop eventData={this.props.eventData} />
    }
  }
};