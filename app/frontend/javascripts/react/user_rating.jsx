import React from "react";

export default class UserRating extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <span>Stars</span>
        <span>12 audience reviews</span>
      </div>
    )
  }
};