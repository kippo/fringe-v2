import React from "react";
import EventSessionsContext from "./events-sessions-context.jsx";

export default class EventSessionsSessions extends React.Component {
  constructor(props){
    super(props);
  }

  static contextType = EventSessionsContext;

  render() {
    return(
      <li className="session">
        <div className="session--image">
          <img src="https://source.unsplash.com/random/200x200" />
        </div>
        <div className="session--content">
          <div className="compressed">
            <h2 className="heading-six">
              <a href="#">{this.props.eventData.title}</a>
            </h2>
            <p>{this.props.eventData.time} / {this.props.eventData.date}</p>
            <p>{this.props.eventData.venue}</p>
          </div>
        </div>
        <div className="session--action">
          {this.context.renderSessionStatus(this.props.eventData)}
        </div>
      </li>
    )
  }
};