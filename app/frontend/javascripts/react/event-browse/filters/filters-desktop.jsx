import React from "react";
import Modal from "react-modal";
//import EventBrowseContext from "./event-browse-context.jsx";

export default class FilterDesktop extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      moreFiltersOpen: false,
      modalOpen: false
    }
  }

  toggleMoreFilters = () => {
    this.setState(
      {moreFiltersOpen: !this.state.moreFiltersOpen}
    );
  }

  handleModalOpen = (filter) => {
    this.props.setActiveFilter(filter);
    this.setState(
      {modalOpen: true}
    );
  }

  handleModalClose = () => {
    this.setState(
      {modalOpen: false}
    );
  }
  
  componentWillMount() {
    //https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme?rq=1
    Modal.setAppElement('body');
  }

  fallbackText = (filter) => {
    if (this.props.selectedFilters[filter]) {
      return this.props.selectedFilters[filter];
    } else {
      return this.props.filters[filter].placeholder;
    }
  }

  render() {
    return(
      <div className="filter-desktop">        
        <div className="filters-desktop--primary">
          {Object.keys(this.props.filters).map((key) => {
            return (
              this.props.filters[key].hierarchy === "primary" ?
                <div key={key} className="foo" data-filter-name={key} onClick={() => this.handleModalOpen(key)}>
                  {this.props.filters[key].label}
                  {this.fallbackText(key)}
                </div>
              : ""
            );
          })}
        </div>

        <button className="button" onClick={this.toggleMoreFilters}>More filters</button>

        <div className={`filters-desktop--secondary ${this.state.moreFiltersOpen && "filters-desktop--secondary__visible"}`}>
          {Object.keys(this.props.filters).map((key) => {
              return (
                this.props.filters[key].hierarchy !== "primary" ?
                  <div key={key} className="foo" data-filter-name={key} onClick={() => this.handleModalOpen(key)}>
                    {this.props.filters[key].label}
                  </div>
                : ""
              );
            })}
        </div>
        
        {this.state.modalOpen &&
          <Modal 
            isOpen={this.state.modalOpen}
            onRequestClose={this.handleModalClose}
          >
            {this.props.returnActiveFilter()}
          </Modal>
        }
      </div>
    )
  }
};