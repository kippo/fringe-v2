import Axios from 'axios';
import React from "react";
import QueryString from "query-string";
import EventList from "./event_list.jsx";
import Filters from "./filters/filters.jsx";
import Pagination from "../pagination/pagination.jsx";

export default class EventBrowse extends React.Component {  
  constructor(props) {
    super(props);
    this.pageSize = [
      20, 
      100
    ]
    this.sortOptions = [
      {
        label: "Relevance",
        string: "relevance"
      },{
        label: "Price (Low to high)",
        string: "price-ascending"
      },{
        label: "Price (High to low)",
        string: "price-descending"
      },{
        label: "Audience rating",
        string: "audience-rating"
      },{
        label: "Name (A to Z)",
        string: "name-a-z"
      },{
        label: "Name (Z to A)",
        string: "name-z-a"
      }
    ]
    this.filterTypes = {
      genre: [
        "Comedy",
        "Drama",
        "Circus",
        "Cabaret"
      ], venue: [
        "Garden of Unearthly Delights",
        "Gluttony",
        "Black Cat"
      ], accessibility: [
        "Wheelchair Access", 
        "Accessible Parking", 
        "Wheelchair Accessible Toilet",
        "Audio Description",
        "Auslan Interpretation",
        "Open Captioning",
        "Relaxed Performance",
        "Tactile Tours",
        "Hearing Loop",
        "Language No Barrier"
      ], priceType: [
        "BankSA Customer",
        "BankSA Support Acts",
        "Fringe Member",
        "Concession",
        "Family",
        "Group 6+",
        "Cheap Tuesday",
        "Preview",
        "FREE",
        "Passholder Free",
        "Passholder Discount"
      ], rating: [
        "G",
        "PG",
        "M",
        "R18+"
      ], mood: [
        "Party",
        "Unwind",
        "Be Moved",
        "Be Amazed",
        "Be Challenged",
        "Be Entertained",
        "Laugh Until I Cry",
        "Experience the Extreme",
        "Experience Something Left of Centre"
      ], program: [
        "Honey Pot",
        "YEP!",
        "Science of the Fringe",
        "Sick of the Fringe",
        "Social Change"
      ], priceRange: [
        {
          label: "Price (max)",
          data: [5,10,15,20,30,40,50]
        },{
          label: "Price (min)",
          data: [5,10,15,20,30,40,50]
        }
      ]
    }
    this.state = {
      eventData: [],
      selectedFilters: QueryString.parse(location.search, {arrayFormat: 'bracket'}),
      dataLoaded: false,
      totalResults: null
    }
    this._isMounted = false;
  }
  
  //Get data from mockaroo, add it to state
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
            totalResults: 232,
            dataLoaded: true
          });
        }
      })
  }

  // Create a query string based of selected filters state
  createQueryString = () => {
    return QueryString.stringify(this.state.selectedFilters, {arrayFormat: 'bracket'});
  }

  // Set url to match current state add push intto history.state
  setHistory = (type) => {
    let state = {
      selectedFilters: this.state.selectedFilters
    };
    // Only update url and history.state if selectedFilters has something in it
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

  clearFilterType = (filerType) => {
    let filters = this.state.selectedFilters;
    delete filters[filerType];
    this.setFilters(filters);
  }

  //Add or remove filter stored as arrays
  filterArrays = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    let filters = this.state.selectedFilters;

    // Initialize array if it doesn't exisit
    !filters[key] && (filters[key] = []);

    // Check to see if filter value is already in array, if not add it
    if (!filters[key].includes(value)) {
      filters[key].push(value);
    } else {
    // Else remove it
      let index = filters[key].indexOf(value);
      index > -1 && filters[key].splice(index, 1);
    }

    // If array is empty remove it
    filters[key].length == 0 && delete filters[key];

    this.setFilters(filters);
  }

  //Add or remove filter options stored as strings
  filterStrings = (e, key = e.target.name, value = e.target.value) => {
    let filters = this.state.selectedFilters;

    if (filters[key] !== value && value != this.allKeyword) {
      filters[key] = value;
    } else {
      delete filters[key];
    }

    this.setFilters(filters);
  }

  //Set filter state when filter changes and call functions to get new events and set state in history API  
  setFilters = (filters) => {
    this.setState(
      {selectedFilters: filters},
      () => {
        this.setHistory('push');
        this.getEvents();
      }
    );
  }

  //Set default pagesize state as pagination relies on it
  pageSizeInit = () => {
    console.log(this.state.selectedFilters);
    if (!("pagesize" in this.state.selectedFilters)) {
      let state = this.state.selectedFilters;
      state.pagesize = this.pageSize[0];
      this.setState({
        selectedFilters: state
      })
    }
  }

  //Get initial events and set filter state if user moves through history
  componentDidMount() {
    this._isMounted = true;
    this.setHistory('replace');
    this.getEvents();
    this.pageSizeInit();
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
    return(
      <div className="event-browse">
        <div className="event-browse--filter spacing-xx-loose">
          <div>
            <select name="pagesize" value={this.state.selectedFilters.pagesize} onChange={this.filterStrings}>
              {this.pageSize.map((pageSize) => {
                return <option value={pageSize} key={pageSize}>{pageSize}</option>
              })}
            </select>
            <select name="sort" value={this.state.selectedFilters.sort} onChange={this.filterStrings}>
              {this.sortOptions.map((sortOption) => {
                return <option value={sortOption.string} key={sortOption.string}>{sortOption.label}</option>
              })}
            </select>
          </div>
          <Filters
            filterTypes={this.filterTypes}
            filterArrays={this.filterArrays}
            selectedFilters={this.state.selectedFilters}
            clearFilterType={this.clearFilterType}
          />
        </div>
        <div className={"event-browse--results" + (this.state.dataLoaded ? "" : " event-browse--results__loading")}>
          <EventList 
            eventData={this.state.eventData} 
          />
          <Pagination 
            totalResults={this.state.totalResults}
            filterStrings={this.filterStrings}
            selectedFilters={this.state.selectedFilters}
            clearFilterType={this.clearFilterType}
          />
        </div>
      </div>
    )
  }
};


// Add clear all button
// Clear all filters button would clear items per page and sort options as well as default items per page value which pagination relies on