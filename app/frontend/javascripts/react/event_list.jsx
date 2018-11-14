import React from "react";
import EventTileFull from "./event_tile_full.jsx";

export default class EventList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.eventData.map(function(data) {
            return <EventTileFull eventData={data} />
          }
        )}
      </div>
    )
  }
};