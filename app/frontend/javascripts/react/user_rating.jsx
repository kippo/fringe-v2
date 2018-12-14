import React from "react";

export default class UserRating extends React.Component {
  constructor(props){
    super(props);
  }

  createUserRating = () => {
    let userRating = [];
    for (let i = 0; i < this.props.eventData.userrating; i++) {
      userRating.push(<span key={i} className="user-rating--icon" dangerouslySetInnerHTML={{__html: Ornicons.starFull}}></span>);
    }
    for (let i = userRating.length; i < 5; i++) {
      userRating.push(<span key={i} className="user-rating--icon" dangerouslySetInnerHTML={{__html: Ornicons.starEmpty}}></span>);
    }
    return userRating;
  }

  render() {
    return(
      <div className="user-rating">
        <div className="user-rating--icons">{this.createUserRating()}</div>
        <span className="type--small">{this.props.eventData.userratingcount} reviews</span>
      </div>
    )
  }
};