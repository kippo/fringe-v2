import React from "react";
import Modal from 'react-modal';

export default class DesktopFilterWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filterOpen: false
    }
  }

  handleFilter = () => {
    this.setState(
      {filterOpen: !this.state.filterOpen}
    );
  }

  componentWillMount() {
    // https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme?rq=1
    Modal.setAppElement('body');
  }

  render() {
    return(
      <React.Fragment>
        <div className="filters-desktop--filter-wrapper">
          <label>{this.props.label}</label>
          <div onClick={this.handleFilter}>{this.props.placeholder}</div>
        </div>
        <Modal 
          isOpen={this.state.filterOpen}
          onRequestClose={this.handleFilter}
        >
          {this.props.children}
        </Modal>
      </React.Fragment>
    )
  }
};