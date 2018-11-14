import React from "react";

export default class UserRating extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <button className="event-tile--favourite">F</button>
    )
  }
};