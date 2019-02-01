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

  toggleFilter = () => {
    this.setState(
      {
        isOpen: !this.state.isOpen
      }
    );
  }

  clickOffFilter = (e) => {
    if (!this.node.contains(e.target)) {
      this.setState({
        isOpen: false
      });
    }
  }

  clearFilter = () => {
    this.props.clearFilterType(this.props.filterType);
    this.setState({
      isOpen: false
    });
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.clickOffFilter);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickOffFilter);
  }

  render() {
    if (this.activeFilterCount() > 0) {
      this.filterName = {__html: this.props.filterType + ' <strong class="type--primary">(' + this.activeFilterCount() + ')</strong>'};
    } else {
      this.filterName = {__html: this.props.filterType};
    }

    return(
      <div className={"filter--wrapper " + (this.state.isOpen && "filter--active")} ref={node => this.node = node}>
        <div className="filter--field" onClick={this.toggleFilter} dangerouslySetInnerHTML={this.filterName}></div>
        <div className="filter--dropdown">
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
        </div>
      </div>
    )
  }
};