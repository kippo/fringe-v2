import React from "react";
import MultiSelectList from "./filter_controls/multi_select_list.jsx";
import VenueSearch from "./filter_controls/venue_search.jsx";
import DateSelect from "./filter_controls/date_select.jsx";


export default class eventFilterUI extends React.Component {
  constructor(props){
    super(props);
    this.genres = [
      "Comedy",
      "Drama",
      "Circus",
      "Cabaret"
    ];
    this.venues = [
      "Garden of Unearthly Delights",
      "Gluttony",
      "Black Cat"
    ];
    this.rating = [
      "G",
      "PG",
      "MA",
      "MA15+","R"
    ];
    this.accessibility = [
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
    ];
    this.priceTypes = [
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
    ];
    this.suitabilty = [
      "G",
      "PG",
      "M",
      "R18+"
    ];
    this.moods = [
      "Party",
      "Unwind",
      "Be Moved",
      "Be Amazed",
      "Be Challenged",
      "Be Entertained",
      "Laugh Until I Cry",
      "Experience the Extreme",
      "Experience Something Left of Centre"
    ];
    this.programs = [
      "Honey Pot",
      "YEP!",
      "Science of the Fringe",
      "Sick of the Fringe",
      "Social Change"
    ];
  }

  render() {
    return(
      <div>
        <div>
          <MultiSelectList data={this.genres} />
          <DateSelect />
          <DateSelect />
          <VenueSearch data={this.venues} />
          <MultiSelectList data={this.accessibility} />
        </div>
        <div>
          <MultiSelectList data={this.rating} />
          <div>Start Time</div>
          <div>End Time</div>
          <MultiSelectList data={this.priceTypes} />
          <div>Price Range (Slider)</div>
          <MultiSelectList data={this.moods} />
          <MultiSelectList data={this.programs} />
          <div>Family Friendly (Single)</div>
          <div>Auslan Translation</div>
        </div>
      </div>
    )
  }
};