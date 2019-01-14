import React from "react";
import FilterMobile from "./filter_mobile.jsx";
import FilterDesktop from "./filter_desktop.jsx";


export default class eventFilterUI extends React.Component {
  constructor(props){
    super(props);
    this.filters = {
      genres: [
        "Comedy",
        "Drama",
        "Circus",
        "Cabaret"
      ], venues: [
        "Garden of Unearthly Delights",
        "Gluttony",
        "Black Cat"
      ], rating: [
        "G",
        "PG",
        "MA",
        "MA15+",
        "R"
      ], accessibility: [
        "Wheelchair Access", 
        "Accessible Parking", 
        "Wheelchair Accessible Toilet",
        "Audio Description",
        "Auslan Interpretation",
        "Open Captioning",
        "Relaxed Performance",
        "Tactile Tours",
        "Hearing Loop",
        "Language No Barrier"
      ], priceTypes: [
        "BankSA Customer",
        "BankSA Support Acts",
        "Fringe Member",
        "Concession",
        "Family",
        "Group 6+",
        "Cheap Tuesday",
        "Preview",
        "FREE",
        "Passholder Free",
        "Passholder Discount"
      ], suitabilty: [
        "G",
        "PG",
        "M",
        "R18+"
      ], moods: [
        "Party",
        "Unwind",
        "Be Moved",
        "Be Amazed",
        "Be Challenged",
        "Be Entertained",
        "Laugh Until I Cry",
        "Experience the Extreme",
        "Experience Something Left of Centre"
      ], programs: [
        "Honey Pot",
        "YEP!",
        "Science of the Fringe",
        "Sick of the Fringe",
        "Social Change"
      ]
    }
  }

  render() {
    return(
      <React.Fragment>
        <FilterDesktop filters={this.filters} />
        <FilterMobile filters={this.filters} />
      </React.Fragment>
    )
  }
};