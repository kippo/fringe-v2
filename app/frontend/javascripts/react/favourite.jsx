import React from "react";

export default class favourite extends React.Component {
  constructor(props) {
    super(props);
    this.eventKey = this.props.eventData.key;
    this.state = {
      favorited: false
    }
  }

  handleFavourite = () => {
    if (customerSignedIn) {
      console.log("Need to ajax this data to user.");
    } else {
      let localStore = localStorage.getItem('favourites');
      localStore = JSON.parse(localStore);
      localStore === null && (localStore = []); 
      var favouriteIndex = localStore.indexOf(this.eventKey);

      if (favouriteIndex > -1) {
        localStore.splice(favouriteIndex, 1);
        this.setState({favorited: false})
      } else {
        localStore.push(this.eventKey);
        this.setState({favorited: true})
      }

      localStore = JSON.stringify(localStore);
      localStorage.setItem('favourites', localStore);
      document.dispatchEvent(new CustomEvent("favouriteClick"));
    }
  }

  componentDidMount() {
    let favouritesArray = [];
    if (customerSignedIn) {
      favouritesArray = customerFavourites;
    } else {
      let localStore = localStorage.getItem('favourites');
      localStore = JSON.parse(localStore);
      localStore === null && (localStore = []); 
      favouritesArray = localStore;
    }
    if (favouritesArray.includes(this.eventKey)) {
      this.setState({favorited: true})
    }
  }

  render() {
    return(
      <button 
        id="foox" 
        className={`favourite-button ${this.state.favorited && "favourite-button__favorited"}`} 
        onClick={this.handleFavourite} 
        dangerouslySetInnerHTML={{__html: Ornicons.starWhite}}
      >
      </button>
    )
  }
};