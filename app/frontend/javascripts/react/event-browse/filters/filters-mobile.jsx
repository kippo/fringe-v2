import React from "react";

export default class FilterMobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filterOpen: false,
      paneOpen: false
    }
  }

  fallbackText = (filter) => {
    if (this.props.selectedFilters[filter]) {
      return this.props.selectedFilters[filter].join(", ");
    } else {
      return this.props.filters[filter].placeholder;
    }
  }

  handlePaneOpen = (filter) => {
    this.props.setActiveFilter(filter);
    this.setState(
      {paneOpen: true}
    );
  }

  handlePaneClose = () => {
    this.setState(
      {paneOpen: false}
    );
  }

  toggleFilter = () => {
    this.setState(
      {filterOpen: !this.state.filterOpen},
      () => !this.state.filterOpen && setTimeout(this.handlePaneClose, 200) // Needs to match up with CSS
    );
  }

  render() {
    return(
      <React.Fragment>
        <button className="filter-mobile--button" onClick={this.toggleFilter}>F</button>
        <div className={`filter-mobile ${this.state.filterOpen && "filter-mobile__open"}`}>
          <div className="filter-mobile--panes-wrapper">
            <div className={`filter-mobile--panes ${this.state.paneOpen ? "filter-mobile--panes__open" : ""}`}>
              <div className="filter-mobile--pane filter-mobile--pane-list">
                <div className="filter-mobile--header">
                  <button onClick={this.toggleFilter}>Close</button>
                  <div>Search events</div>
                  <button onClick={this.toggleFilter}>Clear all</button>
                </div>
                <ul className="filter-mobile--content filter-mobile--list">
                  {Object.keys(this.props.filters).map((key) => {
                    return (
                      <li key={key} className="filter-mobile--list-item" data-filter-name={key} onClick={() => this.handlePaneOpen(key)}>
                        <div className="filter-mobile--list-item--content">
                          <div className="filter-mobile--list-item--label">
                            <strong>{this.props.filters[key].label}</strong>
                          </div>
                          <div className="filter-mobile--list-item--selection">
                            {this.fallbackText(key)}
                          </div>
                        </div>
                        <div className="filter-mobile--list-item--icon" dangerouslySetInnerHTML={{__html: Ornicons.chevronRight}}></div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="filter-mobile--pane filter-mobile--pane-detail">
                <div className="filter-mobile--header">
                  <button onClick={this.handlePaneClose}>Back</button>
                  <strong>{this.props.activeFilter ? this.props.filters[this.props.activeFilter].label : "No active filter"}</strong>
                  <button onClick={() => this.props.clearFilterType(this.props.activeFilter)}>Clear</button>
                </div>
                {this.props.returnActiveFilter()}
              </div>
            </div>
          </div>
          <div>
            <button className="button button__full" onClick={this.toggleFilter}>Show {this.props.totalResults} events</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
};