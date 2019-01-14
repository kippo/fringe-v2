import React from "react";
import MultiSelectList from "./filter_controls/multi_select_list.jsx";
import VenueSearch from "./filter_controls/venue_search.jsx";
import DateSelect from "./filter_controls/date_select.jsx";
import FilterMobile from "./filter_mobile.jsx";


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
        <div>
          <div>
            <MultiSelectList data={this.filters.genres} filterName="Genre" isMobile={false} />
            <DateSelect />
            <DateSelect />
            <VenueSearch data={this.filters.venues} />
            <MultiSelectList data={this.filters.accessibility} filterName="Accessibility" isMobile={false} />
          </div>
          <div>
            <MultiSelectList data={this.filters.rating} filterName="Rating" isMobile={false} />
            <div>Start Time</div>
            <div>End Time</div>
            <MultiSelectList data={this.filters.priceTypes} filterName="Price Type" isMobile={false} />
            <div>Price Range (Slider)</div>
            <MultiSelectList data={this.filters.moods} filterName="Moods" isMobile={false} />
            <MultiSelectList data={this.filters.programs} filterName="Programs" isMobile={false} />
            <div>Family Friendly (Single)</div>
            <div>Auslan Translation</div>
          </div>
        </div>
        <FilterMobile filters={this.filters} />
      </React.Fragment>
    )
  }
};