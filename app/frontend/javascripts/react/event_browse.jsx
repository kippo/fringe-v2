import Axios from 'axios';
import React from "react";
import EventList from "./event_list.jsx";
import EventFilters from "./event_filters.jsx";

export default class EventBrowse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventData: [],
      currentGenre: this.props.currentGenre.genre,
      dataLoaded: false
    }
  }

  //Get data from mockaroo, add it to state and update url to match current filters
  getEvents = () => {
    this.setState({
      dataLoaded: false
    });
    Axios
      .get('https://my.api.mockaroo.com/fringe.json', {
        params: {
          key: "482c6d90",
          currentGenre: this.state.currentGenre
        }
      })
      .then((response) => {
        this.setState({
            eventData: response.data,
            dataLoaded: true
        });
        this.setURL();
      })
  }

  //Set url to match current filters add them to histories state
  setURL = () => {
    if (this.state.currentGenre !== undefined) {
      let state = {
        currentGenre: this.state.currentGenre
      };
      history.pushState(state, '', '?genre=' + this.state.currentGenre);
    }
  }

  //Callback function for filter component
  filterCallback = (filters) => {
    this.setState({currentGenre: filters});
    this.getEvents();
  }

  //Get initial events and set filter state if user moves through history
  componentDidMount() {
    this.getEvents();
    onpopstate = (e) => {
      this.setState({
        currentGenre: e.state.currentGenre
      });
    };
  }

  render() {
    const filterComponent = <EventFilters filterCallback={this.filterCallback} currentGenre={this.state.currentGenre} />;
    if (this.state.dataLoaded) {
      return(
        <div>
          {filterComponent}
          <EventList eventData={this.state.eventData} />
        </div>
      )
    } else {
        return(
          <div>
            {filterComponent}
            Loading
          </div>
        )
    }
  }
};

// Process ajax request with mockaroo and double check how ajax request is working with back button 
// Pagination