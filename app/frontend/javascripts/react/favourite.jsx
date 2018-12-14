import React from "react";

export default class favourite extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorited: false,
      currentFavourites: []
    }
  }

  getCurrentFavourites = () => {
    this.setState({
      currentFavourites: JSON.parse(localStorage.getItem('userFavourites'))
    })
  }

  handleFavourite = () => {
    this.setState({favorited: !this.state.favorited});
    let favouritesArray = ["Foo"];
    localStorage.userFavourites = JSON.stringify(favouritesArray);
    this.getCurrentFavourites();
  }

  componentDidMount() {
    this.getCurrentFavourites();
  }

  render() {
    return(
      <button className={"favourite-button" + (this.state.favorited ? " favourite-button__favorited" : "")} onClick={this.handleFavourite} dangerouslySetInnerHTML={{__html: Ornicons.starWhite}}></button>
    )
  }
};

// Add favourites to local storage