import React from "react";

export default class EventFilters extends React.Component {
  constructor(props){
    super(props);
    this.genres = ["Comedy", "Drama", "Circus", "Cabaret"];
    this.venues = ["Garden of Unearthly Delights", "Gluttony", "Black Cat"];
    this.selectedFilters = {};
  }

  filterChange = (e, formType, filterType) => {
    if (formType === "checkbox") {
      this.filterArrays(filterType, e.target.value);
    } else if (formType === "select") {
      this.filterString(e.target.name, e.target.value);
    }

    this.props.filterCallback(this.selectedFilters);
  }

  //Add or remove filter options stored as arrays
  filterArrays = (filterKey, filterValue) => {
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

    this.selectedFilters[filterKey] = filterArray;
  }
  
  //Add or remove filter options stored as strings
  filterString = (filterKey, filterValue) => {
    if (this.selectedFilters[filterKey] !== filterValue) {
      this.selectedFilters[filterKey] = filterValue;
    } else {
      delete this.selectedFilters[filterKey];
    }
  }

  render() {
    return(
      <div>
        <div>
          {this.genres.map(genre => {
              return (
                <label key={genre}>
                  <input type="checkbox" name="genre" value={genre} onChange={e => this.filterChange(e, 'checkbox', 'genre')} /> {genre}
                </label>
              )
            }
          )}
        </div>
        <select onChange={e => this.filterChange(e, 'select', 'venue')} name="venue">
          {this.venues.map(venue => {
              return <option key={venue}>{venue}</option>
            }
          )}
        </select>
      </div>
    )
  }
};