import React from "react";

export default class DateSelect extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <span onClick={this.props.backCallback}>Back</span>
        <span>Dates</span>
        <span>3 selected</span>
        <button>Clear</button>
      </div>
    )
  }
};