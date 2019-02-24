import React from "react";
import MultiSelectList from "./filter-controls/multi_select_list.jsx";
import PriceRange from "./filter-controls/price_range.jsx";
import DateRange from "./filter-controls/date_range.jsx";
import VenueSearch from "./filter-controls/venue_search.jsx";
import DesktopFilterWrapper from "./filter-controls/desktop_filter_wrapper.jsx";

export default class FilterDesktop extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      moreFiltersOpen: false,
      activeFilter: null
    }
    this.filterSettings = {
      /*
        example : {
          dataKey: "Reference to key used to store filters of this type",
          label: "Label used with UI",
          name: "Name attribute used within checkbox/select. Used to store vaules in querystring and activefilter state",
          placeholder: "Placeholder text for field",
          type: "Type of filter component to render"
        }
      */
      genres : {
        dataKey: "genre",
        label: "Genres",
        name: "genre",
        placeholder: "All genres",
        type: "multiSelect"
      },
      dateRange : {
        label: "Dates",
        name: "dateRange",
        placeholder: "All dates",
        type: "dateRange"
      },
      venues : {
        dataKey: "venues",
        label: "Venues",
        name: "venues",
        placeholder: "All venues",
        type: "venueSearch"
      },
      accessibilty : {
        dataKey: "accessibility",
        label: "Accessibility",
        name: "accessibility",
        placeholder: "All accessibility options",
        type: "multiSelect"
      },
      priceType : {
        dataKey: "priceType",
        label: "Price Type",
        name: "priceType",
        placeholder: "All price types",
        type: "multiSelect"
      },
      priceRange : {
        label: "Price Range",
        name: "priceRange",
        placeholder: "All price ranges",
        type: "priceRange"
      },
      suitability : {
        dataKey: "suitability",
        label: "Suitability",
        name: "suitability",
        placeholder: "Suitable for everyone",
        type: "multiSelect"
      },
      moods : {
        dataKey: "moods",
        label: "Moods",
        name: "moods",
        placeholder: "All moods",
        type: "multiSelect"
      },
      programs : {
        dataKey: "programs",
        label: "Special programs",
        name: "programs",
        placeholder: "All special programs",
        type: "multiSelect"
      },
    }
  }

  toggleMoreFilters = () => {
    this.setState({moreFiltersOpen: !this.state.moreFiltersOpen});
  }

  setActiveFilter = (activeFilterSettings) => {
    if (this.state.activeFilter === activeFilterSettings) {
      this.setState({
        activeFilter: null
      })
    } else {
      this.setState({
        activeFilter: activeFilterSettings
      })
    }
  }

  returnActiveFilter = () => {
    if (this.state.activeFilter) {
      switch (this.state.activeFilter.type) {
        case "multiSelect":
          return (
            <MultiSelectList 
              data={this.props.filters[this.state.activeFilter.dataKey]}
              filterType={this.state.activeFilter.name}
              filterArrays={this.props.filterArrays}
              selectedFilters={this.props.selectedFilters}
              clearFilterType={this.props.clearFilterType}
            />
          )
        case "priceRange":
          return (
            <PriceRange 
              filterType={this.state.activeFilter.name}
              selectedFilters={this.props.selectedFilters}
              clearFilterType={this.props.clearFilterType}
            />
          )
        case "dateRange":
          return (
            <DateRange 
              filterType={this.state.activeFilter.name}
              selectedFilters={this.props.selectedFilters}
              clearFilterType={this.props.clearFilterType}
            />
          )
        case "venueSearch":
          return (
            <VenueSearch 
              data={this.props.filters[this.state.activeFilter.dataKey]}
              filterType={this.state.activeFilter.name}
              filterArrays={this.props.filterArrays}
              selectedFilters={this.props.selectedFilters}
              clearFilterType={this.props.clearFilterType}
            />
          )
      }
    }
  }

  render() {
    return(
      <div className="filter-desktop">
        <div className="filters-desktop--primary">
          <div onClick={() => this.setActiveFilter(this.filterSettings.genres)}>Genres</div>
          <div onClick={() => this.setActiveFilter(this.filterSettings.dateRange)}>Dates</div>
          <div onClick={() => this.setActiveFilter(this.filterSettings.venues)}>Venues</div>
          <div onClick={() => this.setActiveFilter(this.filterSettings.accessibilty)}>Accessibilty</div>
        </div>

        <button className="button" onClick={this.toggleMoreFilters}>More filters</button>

        <div className={`filters-desktop--secondary ${this.state.moreFiltersOpen && "filters-desktop--secondary__visible"}`}>
          <div onClick={() => this.setActiveFilter(this.filterSettings.priceType)}>Price type</div>
          <div onClick={() => this.setActiveFilter(this.filterSettings.priceRange)}>Price range</div>
          <div onClick={() => this.setActiveFilter(this.filterSettings.suitability)}>Suitability</div>
          <div onClick={() => this.setActiveFilter(this.filterSettings.moods)}>Moods</div>
          <div onClick={() => this.setActiveFilter(this.filterSettings.programs)}>Special programs</div>
        </div>
        
        {this.returnActiveFilter()}
      </div>
    )
  }
};