import React from "react";

export default class DesktopFilterWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filterOpen: false
    }
  }

  toggleFilter = () => {
    let toggle = !this.state.filterOpen;
    this.setState({filterOpen: toggle});
  }

  render() {
    return(
      <div>
        <div onClick={this.toggleFilter}>Filter Label</div>
        <div className={`filter-desktop--dropdown ${this.state.filterOpen ? "filter-desktop--dropdown__open" : "filter-desktop--dropdown__closed"}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
};