import React from "react";
import MultiSelectList from "./filter_controls/multi_select_list.jsx";
import VenueSearch from "./filter_controls/venue_search.jsx";
import DateSelect from "./filter_controls/date_select.jsx";

export default class FilterDesktop extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="filter-desktop">
        <div>
          <MultiSelectList data={this.props.filters.genres} filterName="Genre" isMobile={false} />
          <DateSelect />
          <DateSelect />
          <VenueSearch data={this.props.filters.venues} />
          <MultiSelectList data={this.props.filters.accessibility} filterName="Accessibility" isMobile={false} />
        </div>
        <div>
          <MultiSelectList data={this.props.filters.rating} filterName="Rating" isMobile={false} />
          <div>Start Time</div>
          <div>End Time</div>
          <MultiSelectList data={this.props.filters.priceTypes} filterName="Price Type" isMobile={false} />
          <div>Price Range (Slider)</div>
          <MultiSelectList data={this.props.filters.moods} filterName="Moods" isMobile={false} />
          <MultiSelectList data={this.props.filters.programs} filterName="Programs" isMobile={false} />
          <div>Family Friendly (Single)</div>
          <div>Auslan Translation</div>
        </div>
      </div>
    )
  }
};