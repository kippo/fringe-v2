import React from "react";
import FlatPicker from "flatpickr";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';

export default class EventFilters extends React.Component {
  constructor(props){
    super(props, );
    this.genres = ["All", "Comedy", "Drama", "Circus", "Cabaret"];
    this.venues = ["All", "Garden of Unearthly Delights", "Gluttony", "Black Cat"];
    this.rating = ["All", "G", "PG", "MA", "MA15+", "R"];
    this.allKeyword = "All";
    this.datePicker = React.createRef();
    this.state = {
      date: null,
      focused: false
    }
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
    // This should probably be destroyed when compoennt unmounts. How??
    this.fp = flatpickr(this.datePicker.current, {
      onChange: this.onChange,
      static: true
    });
  }

  render() {
    return(
      <div>
        <div>
          <SingleDatePicker
            date={this.state.date}
            onDateChange={date => this.setState({ date })}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            id="react_date_picker"
            numberOfMonths={1}
            monthFormat="MMM YYYY"
            noBorder={true}
            block={true}
            hideKeyboardShortcutsPanel={true}
            //daySize={40}
            //horizontalMonthPadding={12}
            //verticalSpacing={12}
          />
        </div>
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
                  onChange={this.props.filterArrays}
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
                  onChange={this.props.filterArrays}
                /> 
                {rating}
              </label>
            </li>
          )}
        </ul>
        <select 
          name="venue" 
          value={this.checkSelect('venue')} 
          onChange={this.props.filterString}
        >
          {this.venues.map(venue =>
            <option key={venue}>{venue}</option>
          )}
        </select>
      </div>
    )
  }
};