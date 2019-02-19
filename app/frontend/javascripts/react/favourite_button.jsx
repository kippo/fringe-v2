import React from "react";

export default class FavouriteButton extends React.Component {
  constructor(props){
    super(props);
  }

  handleFavourite = () => {
    alert("foo");
  }

  componentDidMount() {
    document.addEventListener("hello", this.handleFavourite);
  }

  componentWillUnmount() {
    document.removeEventListener("hello", this.handleFavourite);
  }

  render() {
    return(
      <div id="foobar" className="button">
        Favourites
      </div>
    )
  }
};