import React from "react";

export default class EventFilters extends React.Component {
  constructor(props){
    super(props);
    this.genres = ["All", "Comedy", "Drama", "Circus", "Cabaret"];
    this.venues = ["All", "Garden of Unearthly Delights", "Black Cat", "Gluttony"];
    this.activeFilters = [];
  }

  filterChange = (e) => {
    this.activeFilters.
    this.props.filterCallback(e.target.value);
  }

  render() {
    return(
      <div>
        <select value={this.props.currentGenre} onChange={this.filterChange}>
          {this.genres.map(function(genre) {
              return <option key={genre}>{genre}</option>
            }
          )}
        </select>
        <select onChange={this.filterChange}>
          {this.venues.map(function(venue) {
              return <option key={venue}>{venue}</option>
            }
          )}
        </select>
      </div>
    )
  }
};

/*
  this.activeFilters = {
    genre: [
      "Comedy",
      "Cabaret",
      "Dance"
    ],
    venue: [
      "Garden"
    ],
    startDate: [
      "21 July 2018"
    ],
    endDate: [
      "29 July 2018"
    ]
  }
*/