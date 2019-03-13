import React from "react";

export default class MultiSelectList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
    this.filterName = null;
  }

  isChecked = (type, value) => {
    let isChecked = null;
    if (this.props.selectedFilters[type]) {
      if (this.props.selectedFilters[type].includes(value)) {
        isChecked = true;
      } else {
        isChecked = false;
      }
    } else {
      isChecked = false;
    }
    return isChecked;
  }

  render() {
    return(
      <div className="filter--wrapper">
        <ul className="filter--multi-select">
          {this.props.data.map(i => {
            return(
              <li key={i} className="filter--multi-select--row">
                <label htmlFor={i} className="filter--multi-select--label">
                  <span>{i}</span>
                  <input 
                    id={i}
                    type="checkbox" 
                    name={this.props.filterType} 
                    value={i}
                    onChange={this.props.filterArrays}
                    checked={this.isChecked(this.props.filterType, i)}
                  /> 
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
};