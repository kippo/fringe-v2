import Axios from 'axios';
import React from "react";
import QueryString from "query-string";
import EventList from "./event_list.jsx";
import Filters from "./filters/filters.jsx";
import Pagination from "../pagination/pagination.jsx";
import MultiSelectList from "./filters/filter-controls/multi_select_list.jsx";
import PriceRange from "./filters/filter-controls/price_range.jsx";
import DateRange from "./filters/filter-controls/date_range.jsx";
import VenueSearch from "./filters/filter-controls/venue_search.jsx";

export default class EventBrowse extends React.Component {  
  constructor(props) {
    super(props);
    this.pageSize = [
      24, 
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
      genres: {
        placeholder: "All genres",
        label: "Genres",
        type: "multi-select",
        hierarchy: "primary",
        data: [
          "Comedy",
          "Drama",
          "Circus",
          "Cabaret"
        ]
      }, 
      dateRange : {
        label: "Dates",
        placeholder: "All dates",
        type: "date-range",
        hierarchy: "primary",
      }, 
      venues: {
        label: "Venues",
        placeholder: "All venues",
        type: "venue-search",
        hierarchy: "primary",
        data: [
          "Garden of Unearthly Delights",
          "Gluttony",
          "Black Cat"
        ]
      }, 
      accessibility: {
        label: "Accessibility",
        placeholder: "All accessibility options",
        type: "multi-select",
        hierarchy: "primary",
        data: [
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
        ]
      }, 
      priceType: {
        label: "Price Type",
        placeholder: "All price types",
        type: "multi-select",
        data: [
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
        ]
      }, 
      priceRange : {
        label: "Price Range",
        placeholder: "All price ranges",
        type: "price-range"
      }, 
      suitability: {
        label: "Suitability",
        placeholder: "Suitable for everyone",
        type: "multi-select",
        data: [
          "G",
          "PG",
          "M",
          "R18+"
        ]
      }, 
      moods: {
        label: "Moods",
        placeholder: "All moods",
        type: "multi-select",
        data: [
          "Party",
          "Unwind",
          "Be Moved",
          "Be Amazed",
          "Be Challenged",
          "Be Entertained",
          "Laugh Until I Cry",
          "Experience the Extreme",
          "Experience Something Left of Centre"
        ]
      }, 
      programs: {
        label: "Programs",
        placeholder: "All programs",
        type: "multi-select",
        data: [
          "Honey Pot",
          "YEP!",
          "Science of the Fringe",
          "Sick of the Fringe",
          "Social Change"
        ]
      }
    }
    this.state = {
      eventData: [],
      selectedFilters: QueryString.parse(location.search, {arrayFormat: 'bracket'}),
      dataLoaded: false,
      totalResults: null,
      activeFilter: null
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
      .then((response) => {
        if (this._isMounted) {
          this.setState({
            eventData: response.data,
            totalResults: 232
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
      })
      .then(() => {
        this.setState({
          dataLoaded: true
        });
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

  /// Loosing this here somehow???????????????
  clearAllFilters = () => {
    let filters = Object.keys(this.filterTypes);
    debugger
    let selectedFilters = this.state.selectedFilters;
    for (let i; i < filters.length; i++) {
      delete selectedFilters[i];
    }
    this.setFilters(selectedFilters);
  }

  /* ----------------------- Set active filter state ----------------------- */

  //Add or remove active filters stored as arrays
  filterArrays = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    
    // Take a copy of our selectedFilters object
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

    // If this filter no longer has any selections then remove it
    filters[key].length == 0 && delete filters[key];

    // Add our modified copy of the selectedFilters object back into state
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

  /* ----------------------- Page size ----------------------- */

  //Set default pagesize state as pagination relies on it
  pageSizeInit = () => {
    if (!("pagesize" in this.state.selectedFilters)) {
      let state = this.state.selectedFilters;
      state.pagesize = this.pageSize[0];
      this.setState({
        selectedFilters: state
      })
    }
  }

  changePageSize = (e) => {
    this.clearFilterType("page")
    this.filterStrings(e);
  }

  /* ----------------------- Conditional filter component rendering ----------------------- */

  //Toggle which filter is current open
  setActiveFilter = (activeFilter) => {
    this.setState({
      activeFilter: activeFilter
    })
  }

  //Render the appropriate filter component based on the active filter
  returnActiveFilter = () => {
    //Get filter object
    let filterObj = this.filterTypes[this.state.activeFilter];

    if (this.state.activeFilter) {
      switch (filterObj.type) {
        case "multi-select":
          return (
            <MultiSelectList 
              data={filterObj.data}
              filterType={this.state.activeFilter}
              filterArrays={this.filterArrays}
              selectedFilters={this.state.selectedFilters}
              clearFilterType={this.clearFilterType}
            />
          )
        case "price-range":
          return (
            <PriceRange 
              filterType={this.state.activeFilter}
              selectedFilters={this.state.selectedFilters}
              clearFilterType={this.clearFilterType}
            />
          )
        case "date-range":
          return (
            <DateRange 
              filterType={this.state.activeFilter}
              selectedFilters={this.state.selectedFilters}
              clearFilterType={this.clearFilterType}
            />
          )
        case "venue-search":
          return (
            <VenueSearch 
              data={filterObj.data}
              filterType={this.state.activeFilter}
              filterArrays={this.filterArrays}
              selectedFilters={this.state.selectedFilters}
              clearFilterType={this.clearFilterType}
            />
          )
      }
    }
  }

  //Get initial events and set filter state if user moves through history
  componentDidMount() {
    const React = require('react');
    console.log(`React Version ${React.version}`);

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
      <div className="layout--container">
        <button onClick={this.clearAllFilters}>Clear All</button>
        <div>
          <select name="pagesize" value={this.state.selectedFilters.pagesize} onChange={this.changePageSize}>
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

        <div className="event-browse">
          <div className="event-browse--filter">
            <Filters
              filterTypes={this.filterTypes}
              filterArrays={this.filterArrays}
              selectedFilters={this.state.selectedFilters}
              clearFilterType={this.clearFilterType}
              setActiveFilter={this.setActiveFilter}
              returnActiveFilter={this.returnActiveFilter}
              totalResults={this.state.totalResults}
              activeFilter={this.state.activeFilter}
            />
          </div>
          <div className="event-browse--results">
            <div className={this.state.dataLoaded ? "" : "event-browse--results__loading"}>
              <EventList 
                eventData={this.state.eventData} 
              />
              <Pagination 
                totalResults={this.state.totalResults}
                filterStrings={this.filterStrings}
                selectedFilters={this.state.selectedFilters}
                clearFilterType={this.clearFilterType}
                returnActiveFilter={this.returnActiveFilter}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
};


// Add clear all button
// Clear all filters button would clear items per page and sort options as well as default items per page value which pagination relies on
// Change page size is calling set filters twice
// Selecting multiplie filters quickly ques requests rather than stopping and starting requests