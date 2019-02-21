import React from "react";
import MultiSelectList from "./filter-controls/multi_select_list.jsx";
import VenueSearch from "./filter-controls/venue_search.jsx";

export default class FilterMobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeFilter: null,
      filterOpen: false
    }
  }

  // Set which filter filter group is active and open filter detail pane
  filterSelect = (activeFilter) => {
    this.setState({
      activeFilter: activeFilter,
      filterOpen: true,
    });
  }

  closeFilterDrawer = () => {
    this.setState({filterOpen:false});
    this.props.mobileFilterCallback();
  }

  backCallback = () => {
    this.setState({
      filterOpen: false
    });
  }

  render() {
    return(
      <div className={`
        filter-mobile
        ${this.state.filterOpen ? "filter-mobile__active" : "filter-mobile__inactive"}
        ${this.props.mobileFilterOpen ? "filter-mobile__open" : "filter-mobile__closed"}`
      }>
        <button className="filter-mobile--close" onClick={this.closeFilterDrawer}>Close</button>
        <div className="filter-mobile--primary-list">
          <ul>
            <li onClick={() => this.filterSelect("genre")}>Genres</li>
            <li onClick={() => this.filterSelect("date")}>Dates</li>
            <li onClick={() => this.filterSelect("time")}>Time of Day</li>
            <li onClick={() => this.filterSelect("venue")}>Venue</li>
            <li onClick={() => this.filterSelect("accessibility")}>Accessibility</li>
            <li onClick={() => this.filterSelect("rating")}>Rating</li>
            <li onClick={() => this.filterSelect("price-type")}>Price Type</li>
            <li onClick={() => this.filterSelect("price-range")}>Price Range</li>
            <li onClick={() => this.filterSelect("mood")}>Moods</li>
            <li onClick={() => this.filterSelect("program")}>Programs</li>
            <li>Family Friendly</li>
          </ul>
        </div>
        <div className="filter-mobile--secondary-list">
          {filterComponent ? filterComponent : ""}
        </div>
      </div>
    )
  }
};