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
          <DesktopFilterWrapper>
            <MultiSelectList data={this.props.filters.genres} filterName="Genre" isMobile={false} />
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper>
            <DateSelect />
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper>
            <VenueSearch data={this.props.filters.venues} />
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper>
            <MultiSelectList data={this.props.filters.accessibility} filterName="Accessibility" isMobile={false} />
          </DesktopFilterWrapper>
          <div onClick={this.toggleMoreFilters}>More Filters</div>
        </div>
        <div className={`filter-desktop--more ${this.state.moreFiltersOpen ? "filter-desktop--more__open" : "filter-desktop--more__closed"}`}>
          <DesktopFilterWrapper>
            <MultiSelectList data={this.props.filters.rating} filterName="Rating" isMobile={false} />
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper>
            <div>Time of day</div>
          </DesktopFilterWrapper>
          
          <DesktopFilterWrapper>
            <MultiSelectList data={this.props.filters.priceTypes} filterName="Price Type" isMobile={false} />
          </DesktopFilterWrapper>

          <DesktopFilterWrapper>
            <div>Price Range (Slider)</div>
          </DesktopFilterWrapper>

          <DesktopFilterWrapper>
            <MultiSelectList data={this.props.filters.moods} filterName="Moods" isMobile={false} />
          </DesktopFilterWrapper>

          <DesktopFilterWrapper>
            <MultiSelectList data={this.props.filters.programs} filterName="Programs" isMobile={false} />
          </DesktopFilterWrapper>
          
          <div>Family Friendly (Single)</div>
          
          <div>Auslan Translation</div>
        </div>
      </div>
    )
  }
};