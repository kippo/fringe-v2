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

  activeFilterCount = () => {
    let count = 0;
    if (this.props.selectedFilters[this.props.filterType]) {
      count = this.props.selectedFilters[this.props.filterType].length;
    }
    return count;
  }

  clearFilter = () => {
    this.props.clearFilterType(this.props.filterType);
    this.setState({
      isOpen: false
    });
  }

  render() {
    if (this.activeFilterCount() > 0) {
      this.filterName = {__html: this.props.filterType + ' <strong class="type--primary">(' + this.activeFilterCount() + ')</strong>'};
    } else {
      this.filterName = {__html: this.props.filterType};
    }

    return(
      <div className="filter--wrapper">
        <div className="filter--actions">
          <span>{this.activeFilterCount()} selected</span>
          <button name="Clear" onClick={this.clearFilter}>Clear</button>
        </div>
        <ul>
          {this.props.data.map(i => {
            return(
              <li key={i}>
                <label htmlFor={i}>
                  {i}
                  <span>
                    <input 
                      id={i}
                      type="checkbox" 
                      name={this.props.filterType} 
                      value={i}
                      onChange={this.props.filterArrays}
                      checked={this.isChecked(this.props.filterType, i)}
                    /> 
                  </span>
                </label>
              </li>
            )
          })}
        </ul>
        <button className="button button__full">View 32 events</button>
      </div>
    )
  }
};