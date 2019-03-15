import React from "react";
import EventSessionsSessions from "./events-sessions-session.jsx";

export default class EventSessionsList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <ul className="session--list">
        {this.props.eventData.map((data) =>
          <React.Fragment key={data.key}>
            <EventSessionsSessions
              eventData={data}
            />
          </React.Fragment>
        )}
      </ul>
    )
  }
};