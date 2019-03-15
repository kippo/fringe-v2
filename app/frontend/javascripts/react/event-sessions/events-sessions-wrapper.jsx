import Axios from 'axios';
import React from "react";
import EventSessionsList from "./events-sessions-list.jsx";
import EventSessionsContext from "./events-sessions-context.jsx";

export default class EventSessionsWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventData: []
    }
    this._isMounted = false;
  }

  //Get data from mockaroo, add it to state
  getEvents = () => {
    Axios
      .get('https://my.api.mockaroo.com/fringe.json?key=482c6d90', {
        params: this.state.selectedFilters
      })
      .catch((error) => {
        console.log(error.response);
      })
      .then((response) => {
        if (this._isMounted) {
          this.setState({
            eventData: response.data
          });
        }
      })
  }

  componentDidMount() {
    this._isMounted = true;
    this.getEvents();
  }

  renderSessionStatus = (data) => {
    if (data.availability === "available") {
      return <a href="#" className="button button__full">Get Tickets</a>
    } else if (data.availability === "sold-out") {
      return <p className="align__center">Sold out</p>
    } else if (data.availability === "cancelled") {
      return <p className="align__center">Cancelled</p>
    }
  }

  render() {
    return(
      <EventSessionsContext.Provider 
        value={{
          renderSessionStatus: this.renderSessionStatus,
        }}
      >
        <EventSessionsList 
          eventData={this.state.eventData}
        />
      </EventSessionsContext.Provider>
    )
  }
};