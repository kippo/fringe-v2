import React from "react";
import EventTileFull from "../event-tiles/event_tile_full.jsx";
import AdUnit from "../ad_unit.jsx";

export default class EventList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="spacing-xxxx-loose">
        {this.props.eventData.map((data, i) => 
          <React.Fragment key={data.key.toString()}>
            <EventTileFull eventData={data} />
            {(i + 1) % 8 === 0 && <AdUnit />}
          </React.Fragment>
        )}
      </div>
    )
  }
};