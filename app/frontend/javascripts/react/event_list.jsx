import React from "react";
import EventTileFull from "./event_tile_full.jsx";

export default class EventList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="spacing-xxxx-loose">
        {this.props.eventData.map((data) =>
          <div key={data.key.toString()}>
            <EventTileFull eventData={data} />
          </div>
        )}
      </div>
    )
  }
};