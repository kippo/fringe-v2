import React from "react";
import MultiSelectList from "./filter_controls/multi_select_list.jsx";
import DateSelect from "./filter_controls/date_select.jsx";
import VenueSearch from "./filter_controls/venue_search.jsx";

export default class FilterMobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeFilterLabel: null,
      activeFilterData: null,
      activeFilterType: null,
      filterActive: false
    }
  }

  // Set state based on which filter has been selected. Used to control which filter is currently being displayed in the drawer.
  filterSelect = (label, data, type) => {
    this.setState({
      activeFilterLabel: label,
      activeFilterData: data,
      activeFilterType: type,
      filterActive: true,
    });
  }

  closeFilterDrawer = () => {
    this.setState({filterActive:false});
    this.props.mobileFilterCallback();
  }

  backCallback = () => {
    this.setState({
      filterActive: false
    });
  }

  render() {
    // Conditionally set which type of filter to render based on state.activeFilterType. Possibly create a conditioanl for each rather than relying on props.
    let filterComponent;
    
    if (this.state.activeFilterType === 'multiSelect') {
      filterComponent = 
        <MultiSelectList 
          data={this.state.activeFilterData}
          filterName={this.state.activeFilterLabel}
          isMobile={true}
          backCallback={this.backCallback}
        />;
    } else if (this.state.activeFilterType === "dateSelect") {
      filterComponent = 
        <DateSelect 
          backCallback={this.backCallback}
        />;
    } else if (this.state.activeFilterType === "venueSearch") {
      filterComponent = 
        <VenueSearch 
          backCallback={this.backCallback}
        />;
    }
    
    return(
      <div className={`
        filter-mobile
        ${this.state.filterActive ? "filter-mobile__active" : "filter-mobile__inactive"}
        ${this.props.mobileFilterOpen ? "filter-mobile__open" : "filter-mobile__closed"}`
      }>
        <button onClick={this.closeFilterDrawer}>Close</button>
        <div className="filter-mobile--primary-list">
          <ul>
            <li onClick={() => this.filterSelect("Genres", this.props.filters.genres, 'multiSelect')}>Genres</li>
            <li onClick={() => this.filterSelect("Dates", '', 'dateSelect')}>Date</li>
            <li>Time of day</li>
            <li>Venue</li>
            <li>Accessibility</li>
            <li>Rating</li>
            <li>Price Type</li>
            <li>Price Range</li>
            <li onClick={() => this.filterSelect("Moods", this.props.filters.moods, 'multiSelect')}>Moods</li>
            <li onClick={() => this.filterSelect("Programs", this.props.filters.programs, 'multiSelect')}>Program</li>
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