import React from "react";
import MultiSelectList from "./filter_controls/multi_select_list.jsx";

export default class FilterMobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeMobileFilter: this.props.filters.genres,
      activeMobileFilterLabel: "Genres" 
    }
  }

  render() {
    return(
      <div>
        <div className="mobile-filter--primary-list">
          <ul>
            <li onClick={() => this.setState({activeMobileFilter:this.props.filters.programs})}>Genres</li>
            <li>Date</li>
            <li>Time of day</li>
            <li>Venue</li>
            <li>Accessibility</li>
            <li>Rating</li>
            <li>Price Type</li>
            <li>Price Range</li>
            <li>Moods</li>
            <li>Program</li>
            <li>Family Friendly</li>
          </ul>
        </div>
        <div className="mobile-filter--secondary-list">
          <MultiSelectList data={this.state.activeMobileFilter} filterName={this.state.activeMobileFilterLabel} isMobile={true} />
        </div>
      </div>
    )
  }
};