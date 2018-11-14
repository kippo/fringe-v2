import React from "react";

export default class EventFilters extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <select>
        <option value="all">All</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="circus">Circus</option>
      </select>
    )
  }
};