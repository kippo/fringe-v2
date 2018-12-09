import Axios from 'axios';
import React from "react";
import QueryString from "query-string";
import EventList from "./event_list.jsx";
import EventFilters from "./event_filters.jsx";

export default class EventBrowse extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      eventData: [],
      selectedFilters: QueryString.parse(location.search, {arrayFormat: 'bracket'}),
      dataLoaded: false
    }
    this._isMounted = false;
  }
  
  //Get data from mockaroo, add it to state and update url to match current filters
  getEvents = () => {
    this.setState({
      dataLoaded: false
    });
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
            eventData: response.data,
            dataLoaded: true
          });
        }
      })
  }

  // Set url to match current filters add them to histories state
  setHistory = (type) => {
    let state = {
      selectedFilters: this.state.selectedFilters
    };
    // Only update url if filter state has something in it
    if (Object.keys(this.state.selectedFilters).length != 0) {
      let requestString = this.createQueryString();
      if (type === 'push') {
        history.pushState(state, '', '?' + requestString);
      } else {
        history.replaceState(state, '', '?' + requestString);
      }
    } else {
      if (type === 'push') {
        history.pushState(state, '', window.location.pathname);
      } else {
        history.replaceState(state, '', window.location.pathname);
      }
    }
  }

  // Create a query string based of selected filters state
  createQueryString = () => {
    return QueryString.stringify(this.state.selectedFilters, {arrayFormat: 'bracket'});
  }

  //Callback function for filter component
  filterCallback = (filters) => {
    this.setState(
      {selectedFilters: filters},
      () => {
        this.setHistory('push');
        this.getEvents();
      }
    );
  }

  //Get initial events and set filter state if user moves through history
  componentDidMount() {
    this._isMounted = true;
    this.setHistory('replace');
    this.getEvents();
    onpopstate = (e) => {
      this.setState(
        {selectedFilters: e.state.selectedFilters},
        () => {this.getEvents();}
      );
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
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