import React from "react";
import FilterCheckbox from "./filter_checkbox.jsx";
import FlatPicker from "flatpickr";

export default class EventFilters extends React.Component {
  constructor(props){
    super(props, );
    this.genres = ["All", "Comedy", "Drama", "Circus", "Cabaret"];
    this.venues = ["All", "Garden of Unearthly Delights", "Gluttony", "Black Cat"];
    this.rating = ["All", "G", "PG", "MA", "MA15+", "R"];
    this.allKeyword = "All";
    this.datePicker = React.createRef();
  }

  //Add or remove filter options stored as arrays
  filterArrays = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    let filters = this.props.selectedFilters;

    // Initialize array if it doesn't exisit
    if (!filters[key]) filters[key] = [];

    if (value != "All") {
      // Check to see if filter value is already in array, if not add it
      if (!filters[key].includes(value)) {
        filters[key].push(value);
      } else {
      // Else remove it
        let index = filters[key].indexOf(value);
        if (index > -1) {
          filters[key].splice(index, 1);
        }
      }

      // If array is empty remove it
      if (filters[key].length == 0) {
        delete filters[key];
      }
    } else {
      delete filters[key];
    }

    this.props.filterCallback(filters);
  }
  
  //Add or remove filter options stored as strings
  filterString = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    let filters = this.props.selectedFilters;
  
    if (filters[key] !== value && value != this.allKeyword) {
      filters[key] = value;
    } else {
      delete filters[key];
    }

    this.props.filterCallback(filters);
  }

  checkSelect = (type) => {
    if (this.props.selectedFilters[type]) {
      return this.props.selectedFilters[type];
    } else {
      return this.allKeyword;
    }
  }

  checkCheckbox = (type, value) => {
    if (this.props.selectedFilters[type]) {
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

  onChange(selectedDates) {
    console.log(selectedDates);
  }

  componentDidMount() {
    flatpickr(this.datePicker.current, {
      onChange: this.onChange,
      static: true
    });
  }

  render() {
    return(
      <div>
        <div>
          <input type="text" id="start-date" ref={this.datePicker} />
        </div>
        <ul className="spacing-xxxxxx-tight">
          {this.genres.map(genre =>
            <li key={genre}>
              <label>
                <input 
                  type="checkbox" 
                  name="genre" 
                  value={genre} 
                  checked={this.checkCheckbox('genre', genre)}
                  onChange={this.filterArrays}
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
                  onChange={this.filterArrays}
                /> 
                {rating}
              </label>
            </li>
          )}
        </ul>
        <select 
          name="venue" 
          value={this.checkSelect('venue')} 
          onChange={this.filterString}
        >
          {this.venues.map(venue =>
            <option key={venue}>{venue}</option>
          )}
        </select>
      </div>
    )
  }
};