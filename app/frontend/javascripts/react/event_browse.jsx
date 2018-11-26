import Axios from 'axios';
import React from "react";
import EventList from "./event_list.jsx";
import EventFilters from "./event_filters.jsx";

export default class EventBrowse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventData: [],
      currentGenre: null,
      dataLoaded: false
    }
  }

  getEvents = () => {
    this.setState({dataLoaded: false});
    Axios
      .get('https://my.api.mockaroo.com/fringe.json', {
        params: {
          key: "482c6d90",
          currentGenre: this.state.currentGenre
        }
      })
      .then((response) => {
        this.setState(
          {
            eventData: response.data,
            dataLoaded: true
          }
        );
      })
  }

  filterCallback = (filters) => {
    this.setState({currentGenre: filters});
    this.getEvents();
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    let thingsToRender = [];
    thingsToRender.push(<EventFilters filterCallback={this.filterCallback} />);
    if (this.state.dataLoaded) {
      thingsToRender.push(<EventList eventData={this.state.eventData} />)
    }
    return thingsToRender;
  }
};

// Loading state, update query string and send ajax request query via ajax