import React from "react";
import EventTileFullDesktop from "./event_tile_full_desktop.jsx";
import EventTileFullMobile from "./event_tile_full_mobile.jsx";

export default class EventTileFull extends React.Component {

  constructor(props){
    super(props);
    var tileToRender = "foo";
  }

  render() {
    if(window.innerWidth > 740) {
      return(
        <EventTileFullDesktop />
      );
    } else {
      return(
        <EventTileFullMobile />
      );
    }
  }

};