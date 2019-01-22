import React from "react";
import MultiSelectList from "./filter_controls/multi_select_list.jsx";
import DateSelect from "./filter_controls/date_select.jsx";
import VenueSearch from "./filter_controls/venue_search.jsx";
import SelectMenu from "./filter_controls/select_menu.jsx";

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
    // Conditionally set which type of filter to render based on state.activeFilterType. Possibly create a conditioanl for each rather than relying on props.
    let filterComponent;
    
    if (this.state.activeFilter === 'genre') {
      filterComponent = 
        <MultiSelectList 
          data={this.props.filters.genre}
          filterName="Genres"
          isMobile={true}
          backCallback={this.backCallback}
        />;
    } else if (this.state.activeFilter === 'date') {
      filterComponent = 
        <DateSelect 
          backCallback={this.backCallback}
        />;
    } else if (this.state.activeFilter === 'time') {
      filterComponent = 
        <SelectMenu 
          backCallback={this.backCallback}
        />;
    } else if (this.state.activeFilter === 'venue') {
      filterComponent = 
        <VenueSearch 
          data={this.props.filters.venue}
          backCallback={this.backCallback}
        />;
    } else if (this.state.activeFilter === 'accessibility') {
      filterComponent = 
        <MultiSelectList 
          data={this.props.filters.accessibility}
          filterName="Accessibility"
          isMobile={true}
          backCallback={this.backCallback}
        />;
    } else if (this.state.activeFilter === 'rating') {
      filterComponent = 
        <MultiSelectList 
          data={this.props.filters.rating}
          filterName="Rating"
          isMobile={true}
          backCallback={this.backCallback}
        />;
    } else if (this.state.activeFilter === 'price-type') {
      filterComponent = 
        <MultiSelectList 
          data={this.props.filters.priceType}
          filterName="Price Type"
          isMobile={true}
          backCallback={this.backCallback}
        />;
    } else if (this.state.activeFilter === 'price-range') {
      filterComponent = 
        <SelectMenu
          data={this.props.filters.priceRange}
          backCallback={this.backCallback}
        />;
    } else if (this.state.activeFilter === 'mood') {
      filterComponent = 
        <MultiSelectList 
          data={this.props.filters.mood}
          filterName="Moods"
          isMobile={true}
          backCallback={this.backCallback}
        />;
    }  else if (this.state.activeFilter === 'program') {
      filterComponent = 
        <MultiSelectList 
          data={this.props.filters.program}
          filterName="Moods"
          isMobile={true}
          backCallback={this.backCallback}
        />;
    } 
    
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