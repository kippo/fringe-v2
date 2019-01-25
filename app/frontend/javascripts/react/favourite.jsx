import React from "react";

export default class favourite extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorited: false,
    }
  }

  setFavourite = () => {
    
  }

  handleFavourite = () => {    
    this.setState(
      {favorited: !this.state.favorited}
    );
  }

  render() {
    return(
      <button className={"favourite-button" + (this.state.favorited ? " favourite-button__favorited" : "")} onClick={this.handleFavourite} dangerouslySetInnerHTML={{__html: Ornicons.starWhite}}></button>
    )
  }
};

// Add favourites to local storage
// Add to props first then set inital props value to local storage