import React from "react";
import FilterMobile from "./filters-mobile.jsx";
import FilterDesktop from "./filters-desktop.jsx";

export default class Filters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMobile: null
    }
  }

  // Conditional display of filters (Should make this reusable for other features)

  detectDeviceWidth = () => {
    if(window.innerWidth < 860) {
      this.setState({isMobile: true});
    } else {
      this.setState({isMobile: false});
    }
  }

  throttleResize = () => {
    window.requestAnimationFrame(this.detectDeviceWidth);
  }

  componentDidMount() {
    this.detectDeviceWidth();
    window.addEventListener('resize', this.throttleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttleResize);
  }

  render() {
    if(this.state.isMobile) {
      return(
        <React.Fragment>
          <FilterMobile
            filters={this.props.filterTypes}
            filterArrays={this.props.filterArrays}
            selectedFilters={this.props.selectedFilters}
            clearFilterType={this.props.clearFilterType}
            setActiveFilter={this.props.setActiveFilter}
            returnActiveFilter={this.props.returnActiveFilter}
            totalResults={this.props.totalResults}
            activeFilter={this.props.activeFilter}
          />
      </React.Fragment>
    )} else {
      return(
        <React.Fragment>
          <FilterDesktop 
            filters={this.props.filterTypes}
            filterArrays={this.props.filterArrays}
            selectedFilters={this.props.selectedFilters}
            clearFilterType={this.props.clearFilterType}
            setActiveFilter={this.props.setActiveFilter}
            returnActiveFilter={this.props.returnActiveFilter}
          />
        </React.Fragment>
    )}
  }
};