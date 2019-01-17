import React from "react";
import MultiSelectList from "./filter_controls/multi_select_list.jsx";
import VenueSearch from "./filter_controls/venue_search.jsx";
import DateSelect from "./filter_controls/date_select.jsx";
import DesktopFilterWrapper from "./filter_controls/desktop_filter_wrapper.jsx";

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
        <div>
          <DesktopFilterWrapper label="Genres">
            <MultiSelectList data={this.props.filters.genre} isMobile={false} />
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper label="Dates">
            <DateSelect />
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper label="Venues">
            <VenueSearch data={this.props.filters.venue} />
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper label="Accessibility">
            <MultiSelectList data={this.props.filters.accessibility} isMobile={false} />
          </DesktopFilterWrapper>
          <div onClick={this.toggleMoreFilters}>More Filters</div>
        </div>

        <div className={`filter-desktop--more ${this.state.moreFiltersOpen ? "filter-desktop--more__open" : "filter-desktop--more__closed"}`}>
          <DesktopFilterWrapper label="Accessibility">
            <MultiSelectList data={this.props.filters.rating} filterName="Rating" isMobile={false} />
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper label="Time of day">
            <div>Time of day</div>
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper label="Price type">
            <MultiSelectList data={this.props.filters.priceType} isMobile={false} />
          </DesktopFilterWrapper>

          <DesktopFilterWrapper label="Accessibility">
            <div>Price Range (Slider)</div>
          </DesktopFilterWrapper>

          <DesktopFilterWrapper label="Moods">
            <MultiSelectList data={this.props.filters.mood} isMobile={false} />
          </DesktopFilterWrapper>

          <DesktopFilterWrapper label="Programs">
            <MultiSelectList data={this.props.filters.program} isMobile={false} />
          </DesktopFilterWrapper>
          
          <div>Family Friendly (Single)</div>
          
          <div>Auslan Translation</div>
        </div>
      </div>
    )
  }
};