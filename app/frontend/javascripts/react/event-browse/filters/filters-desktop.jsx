import React from "react";
import MultiSelectList from "./filter-controls/multi_select_list.jsx";
import VenueSearch from "./filter-controls/venue_search.jsx";
import DateSelect from "./filter-controls/date_select.jsx";
import DesktopFilterWrapper from "./filter-controls/desktop_filter_wrapper.jsx";

export default class FilterDesktop extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      moreFiltersOpen: false
    }
  }

  toggleMoreFilters = () => {
    let toggle = !this.state.moreFiltersOpen;
    this.setState({moreFiltersOpen: toggle});
  }

  render() {
    return(
      <div className="filter-desktop">
        <div className="spacing">

            <MultiSelectList 
              data={this.props.filters.genre}
              filterType={"genre"}
              isMobile={false} 
              filterArrays={this.props.filterArrays}
              selectedFilters={this.props.selectedFilters}
              clearFilterType={this.props.clearFilterType}
            />

            <MultiSelectList 
              data={this.props.filters.rating}
              filterType={"rating"}
              isMobile={false} 
              filterArrays={this.props.filterArrays}
              selectedFilters={this.props.selectedFilters}
              clearFilterType={this.props.clearFilterType}
            />

            <MultiSelectList 
              data={this.props.filters.accessibility}
              filterType={"accessibility"}
              isMobile={false} 
              filterArrays={this.props.filterArrays}
              selectedFilters={this.props.selectedFilters}
              clearFilterType={this.props.clearFilterType}
            />

            <MultiSelectList 
              data={this.props.filters.priceType}
              filterType={"priceType"}
              isMobile={false} 
              filterArrays={this.props.filterArrays}
              selectedFilters={this.props.selectedFilters}
              clearFilterType={this.props.clearFilterType}
            />

            <MultiSelectList 
              data={this.props.filters.mood}
              filterType={"mood"}
              isMobile={false} 
              filterArrays={this.props.filterArrays}
              selectedFilters={this.props.selectedFilters}
              clearFilterType={this.props.clearFilterType}
            />

            <MultiSelectList 
              data={this.props.filters.program}
              filterType={"program"}
              isMobile={false} 
              filterArrays={this.props.filterArrays}
              selectedFilters={this.props.selectedFilters}
              clearFilterType={this.props.clearFilterType}
            />

          {/*
          <DesktopFilterWrapper label="Dates">
            <DateSelect />
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper label="Venues">
            <VenueSearch data={this.props.filters.venue} />
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper label="Time of day">
            <div>Time of day</div>
          </DesktopFilterWrapper>
          
          <div>Family Friendly (Single)</div>
          
          <div>Auslan Translation</div>
          */}
        </div>
      </div>
    )
  }
};