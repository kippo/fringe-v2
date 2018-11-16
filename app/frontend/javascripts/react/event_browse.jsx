import Axios from 'axios';
import React from "react";
import EventList from "./event_list.jsx";
import EventFilters from "./event_filters.jsx";

export default class EventBrowse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventData: []
    }
  }

  getEvents = () => {
    Axios
      .get('https://my.api.mockaroo.com/fringe.json?key=482c6d90')
      .then((response) => {
        this.setState(
          {eventData: response.data}
        );
      })
  }

  filterCallback = (filters) => {
    console.log(filters);
    this.getEvents();
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    return(
      <div>
        <EventFilters filterCallback={this.filterCallback} />
        <EventList eventData={this.state.eventData} />
      </div>
    )
  }
};

// Set filter state, update query string and send ajax request query via ajax