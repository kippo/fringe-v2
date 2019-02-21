import React from "react";

export default class FavouriteButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favCount: 0
    }
  }

  getFavouritesCount = () => {
    let localStore = localStorage.getItem('favourites');
    localStore = JSON.parse(localStore);
    
    if (localStore) {
      this.setState({
        favCount: localStore.length
      });
    }
  }

  componentDidMount() {
    this.getFavouritesCount();
    document.addEventListener("favouriteClick", this.getFavouritesCount);
  }

  componentWillUnmount() {
    document.removeEventListener("favouriteClick", this.getFavouritesCount);
  }

  render() {
    return(
      <div id="foobar" className="button">
        Favourites ({this.state.favCount})
      </div>
    )
  }
};