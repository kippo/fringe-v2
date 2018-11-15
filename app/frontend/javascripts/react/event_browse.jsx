import Axios from 'axios';
import React from "react";
import EventList from "./event_list.jsx";
import EventFilters from "./event_filters.jsx";

export default class EventBrowse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventData: [{
        title: 'Fuego Carnal',
        genre: 'Comedy',
        venue: 'Garden of Unearthly Delights',
        date: '21 July to 26th July'
      },{
        title: 'Wet Sounds',
        genre: 'Drama',
        venue: 'Gluttony',
        date: '25 July to 28th July'
      }]
    }
  }

  getEvents = () => {
    Axios
      .get('https://my.api.mockaroo.com/fringe.json?key=482c6d90')
      .then((response) => {
        const eventData = response.data;
        return eventData;
      })
  }

  /*
  componentWillMount() {
    this.setState(
      {eventData: this.getEvents()}
    );
  }
  */

  render() {
    return(
      <div>
        <EventFilters />
        <EventList eventData={this.state.eventData} />
      </div>
    )
  }
};

// Pass data into react component