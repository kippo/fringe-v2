import React from "react";
import FilterMobile from "./filters-mobile.jsx";
import FilterDesktop from "./filters-desktop.jsx";

export default class eventFilterUI extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileFilterOpen: false,
      isMobile: null
    }
  }

  toggleMobileFilter = () => {
    let toggle = !this.state.mobileFilterOpen;
    this.setState({mobileFilterOpen:toggle});
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
        <button onClick={this.toggleMobileFilter}>Open filter</button>
        <FilterMobile 
          filters={this.props.filterTypes}
          mobileFilterOpen={this.state.mobileFilterOpen}
          mobileFilterCallback={this.toggleMobileFilter} 
        />
      </React.Fragment>
    )} else {
      return(
        <React.Fragment>
          <FilterDesktop 
            filters={this.props.filterTypes}
            filterArrays={this.props.filterArrays}
          />
        </React.Fragment>
    )}
  }
};