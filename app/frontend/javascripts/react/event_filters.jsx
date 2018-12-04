import React from "react";

export default class EventFilters extends React.Component {
  constructor(props){
    super(props);
    this.genres = ["All", "Comedy", "Drama", "Circus", "Cabaret"];
    this.venues = ["All", "Garden of Unearthly Delights", "Gluttony", "Black Cat"];
    this.selectedFilters = {};
  }

  filterChange = (e, filterStructure) => {
    let filterType = e.target.name;
    let filterValue = e.target.value;

    if (filterValue !== "All") {
      if (filterStructure === "array") {
        this.manageFilterArrays(filterType, filterValue);
      } else if (filterStructure === "string") {
        this.manageFilterStrings(filterType, filterValue);
      }
    } else {
      delete this.selectedFilters[filterType];
    }
    this.props.filterCallback(this.selectedFilters);
  }

  //Add or remove filter options stored as arrays
  manageFilterArrays = (filterType, filterValue) => {
    //If array exists modify existing array
    if (this.selectedFilters[filterType] !== undefined) {
      //If not in array add it
      if (!this.selectedFilters[filterType].includes(filterValue)) {
        this.selectedFilters[filterType].push(filterValue);
      } else {
      //Else remove it
        if (true) {
          let filteredArray = this.selectedFilters[filterType].filter((item) => {
            return item !== filterValue;
          });
          this.selectedFilters[filterType] = filteredArray;
        } else {
          console.log('All filters');
        }
      }
    //Else create new array
    } else {
      this.selectedFilters[filterType] = [filterValue];
    }
  }
  
  //Add or remove filter options stored as strings
  manageFilterStrings = (filterType, filterValue) => {
    if (this.selectedFilters[filterType] !== filterValue) {
      this.selectedFilters[filterType] = filterValue;
    } else {
      delete this.selectedFilters[filterType];
    }
  }

  render() {
    return(
      <div>
        <select onChange={(e) => this.filterChange(e, 'array')} name="genre">
          {this.genres.map(function(genre) {
              return <option key={genre}>{genre}</option>
            }
          )}
        </select>
        <select onChange={(e) => this.filterChange(e, 'string')} name ="venue">
          {this.venues.map(function(venue) {
              return <option key={venue}>{venue}</option>
            }
          )}
        </select>
      </div>
    )
  }
};

//Remove key from array function if all options selected manually
/* 
  Remove propoerty when
  'All' option selected
  All options selected
  All options deselected
*/