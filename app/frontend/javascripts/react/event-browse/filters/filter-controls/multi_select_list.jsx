import React from "react";

export default class MultiSelectList extends React.Component {
  constructor(props){
    super(props);
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
      <div>
        <div>
          {this.props.isMobile ? 
            <div>
              <span onClick={this.props.backCallback}>Back</span>
              <span>{this.props.filterName}</span>
            </div>
            :<span>3 selected</span>
          }
          <button name="Clear" onClick={() => this.props.clearFilterType(this.props.filterType)}>Clear</button>
        </div>
        <ul>
          {this.props.data.map(i => {
            return(
              <li key={i}>
                <label htmlFor={i}>
                  <input 
                    id={i}
                    type="checkbox" 
                    name={this.props.filterType} 
                    value={i}
                    onChange={this.props.filterArrays}
                    checked={this.isChecked(this.props.filterType, i)}
                  /> 
                  {i}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
};