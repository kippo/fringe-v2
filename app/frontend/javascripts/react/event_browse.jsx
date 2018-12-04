import Axios from 'axios';
import React from "react";
import QueryString from "query-string";
import EventList from "./event_list.jsx";
import EventFilters from "./event_filters.jsx";

export default class EventBrowse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventData: [],
      selectedFilters: QueryString.parse(location.search, {arrayFormat: 'bracket'}),
      dataLoaded: false
    }
    this.requestString = location.search;
  }

  //Get data from mockaroo, add it to state and update url to match current filters
  getEvents = (setURL) => {
    this.setState({
      dataLoaded: false
    });
    Axios
      .get('https://my.api.mockaroo.com/fringe.json', {
        params: {
          key: "482c6d90",
          genres: this.state.selectedFilters
        }
      })
      .catch(function (error) {
        console.log(error.response);
      })
      .then((response) => {
        this.setState({
          eventData: response.data,
          dataLoaded: true
        });
        if (setURL) {
          this.setURL();
        }
      })
  }

  //Set url to match current filters add them to histories state
  setURL = () => {
    let state = {
      selectedFilters: this.state.selectedFilters
    };
    history.pushState(state, '', '?' + this.requestString);
  }

  //Callback function for filter component
  filterCallback = (filters) => {
    this.setState(
      {selectedFilters: filters},
      () => {
        this.getEvents(true);
        this.requestString = QueryString.stringify(this.state.selectedFilters, {arrayFormat: 'bracket'}); // Improve this
      }
    );
  }

  //Get initial events and set filter state if user moves through history
  componentDidMount() {
    this.getEvents(false);
    onpopstate = (e) => {
      this.setState(
        {currentGenre: e.state.selectedFilters},
        () => this.getEvents(true)
      );
    };
  }

  render() {
    const filterComponent = <EventFilters filterCallback={this.filterCallback} selectedFilters={this.state.selectedFilters} />;
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

// Come up with a better solution for setting query string
// Forward button is broken
// If selected filters state is an empty object pushstate doesn't work