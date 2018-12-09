import React from "react";

export default class EventFilters extends React.Component {
  constructor(props){
    super(props, );
    this.genres = ["All", "Comedy", "Drama", "Circus", "Cabaret"],
    this.venues = ["All", "Garden of Unearthly Delights", "Gluttony", "Black Cat"]
    this.selectedFilters = this.props.selectedFilters;
  }

  filterChange = e => {
    let target = e.target;
    if (target.type === "checkbox") {
      this.filterArrays(target.name, target.value);
    } else if (target.tagName === "SELECT") {
      this.filterString(target.name, target.value);
    }

    this.props.filterCallback(this.selectedFilters);
  }

  //Add or remove filter options stored as arrays
  filterArrays = (filterKey, filterValue) => {
    if (filterValue != "All") {
      let filterArray = [];
      
      // If array already exists use it instead
      if (Array.isArray(this.selectedFilters[filterKey])) {
        filterArray = this.selectedFilters[filterKey];
      }

      // Check to see if filter value is already in array, if not add it
      if (!filterArray.includes(filterValue)) {
        filterArray.push(filterValue);
      } else {
      // Else remove it
        let filterValueIndex = filterArray.indexOf(filterValue);
        if (filterValueIndex > -1) {
          filterArray.splice(filterValueIndex, 1);
        }
      }

      // If array isn't empty set key to updated array else remove key
      if (filterArray.length != 0) {
        this.selectedFilters[filterKey] = filterArray;
      } else {
        delete this.selectedFilters[filterKey];
      }
    } else {
      delete this.selectedFilters[filterKey];
    }
  }
  
  //Add or remove filter options stored as strings
  filterString = (filterKey, filterValue) => {
    if (this.selectedFilters[filterKey] !== filterValue && filterValue != "All") {
      this.selectedFilters[filterKey] = filterValue;
    } else {
      delete this.selectedFilters[filterKey];
    }
  }

  checkSelect = () => {
    if ('venue' in this.props.selectedFilters) {
      return this.props.selectedFilters.venue;
    } else {
      return "All";
    }
  }

  checkCheckbox = value => {
    if ('genre' in this.props.selectedFilters) {
      if (this.props.selectedFilters.genre.includes(value)) {
        return true;
      } else {
        return false;
      }
    } else if (value === 'All') {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return(
      <React.Fragment>
        <div>
          {this.genres.map(genre =>
            <label key={genre}>
              <input 
                type="checkbox" 
                name="genre" 
                value={genre} 
                checked={this.checkCheckbox(genre)}
                onChange={this.filterChange}
              /> 
              {genre}
            </label>
          )}
        </div>
        <select 
          name="venue" 
          value={this.checkSelect()} 
          onChange={this.filterChange}
        >
          {this.venues.map(venue =>
            <option key={venue}>{venue}</option>
          )}
        </select>
      </React.Fragment>
    )
  }
};