import React from "react";

export default class EventFilters extends React.Component {
  constructor(props){
    super(props, );
    this.genres = ["All", "Comedy", "Drama", "Circus", "Cabaret"];
    this.venues = ["All", "Garden of Unearthly Delights", "Gluttony", "Black Cat"];
    this.rating = ["All", "G", "PG", "MA", "MA15+", "R"];
    this.selectedFilters = this.props.selectedFilters;
    this.allKeyword = "All";
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
      if (Array.isArray(this.props.selectedFilters[filterKey])) {
        filterArray = this.props.selectedFilters[filterKey];
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
    if (this.props.selectedFilters[filterKey] !== filterValue && filterValue != this.allKeyword) {
      this.selectedFilters[filterKey] = filterValue;
    } else {
      delete this.selectedFilters[filterKey];
    }
  }

  checkSelect = () => {
    if ('venue' in this.props.selectedFilters) {
      return this.props.selectedFilters.venue;
    } else {
      return this.allKeyword;
    }
  }

  checkCheckbox = (type, value) => {
    if (type in this.props.selectedFilters) {
      if (this.props.selectedFilters[type].includes(value)) {
        return true;
      } else {
        return false;
      }
    } else if (value === this.allKeyword) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return(
      <div>
        <ul className="spacing-xxxxxx-tight">
          {this.genres.map(genre =>
            <li key={genre}>
              <label>
                <input 
                  type="checkbox" 
                  name="genre" 
                  value={genre} 
                  checked={this.checkCheckbox('genre', genre)}
                  onChange={this.filterChange}
                /> 
                {genre}
              </label>
            </li>
          )}
        </ul>
        <ul className="spacing-xxxxxx-tight">
          {this.rating.map(rating =>
            <li key={rating}>
              <label>
                <input 
                  type="checkbox" 
                  name="rating" 
                  value={rating} 
                  checked={this.checkCheckbox('rating', rating)}
                  onChange={this.filterChange}
                /> 
                {rating}
              </label>
            </li>
          )}
        </ul>
        <select 
          name="venue" 
          value={this.checkSelect()} 
          onChange={this.filterChange}
        >
          {this.venues.map(venue =>
            <option key={venue}>{venue}</option>
          )}
        </select>
      </div>
    )
  }
};

// Bug - Weirdness between filter sets
// Possible rewrite - temporary obbject sent to state directory