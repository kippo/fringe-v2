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
    let favouritesArray = [];
    
    if (localStorage.getItem('userFavourites')) {
      favouritesArray = JSON.parse(localStorage.getItem('userFavourites'));
    }

    if (!favouritesArray.includes(this.props.eventData.key)) {
      favouritesArray.push(this.props.eventData.key);
    } else {
      let index = favouritesArray.indexOf(this.props.eventData.key);
      if (index > -1) {
        favouritesArray[this.props.eventData.key].splice(index, 1);
      }
    }
    localStorage.setItem('userFavourites', JSON.stringify(favouritesArray));
  }

  render() {
    return(
      <button className={"favourite-button" + (this.state.favorited ? " favourite-button__favorited" : "")} onClick={this.handleFavourite} dangerouslySetInnerHTML={{__html: Ornicons.starWhite}}></button>
    )
  }
};

// Add favourites to local storage
// Add to props first then set inital props value to local storage