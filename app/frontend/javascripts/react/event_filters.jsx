import React from "react";

export default class EventFilters extends React.Component {
  constructor(props){
    super(props);
    this.genres = ["All", "Comedy", "Drama", "Circus", "Cabaret"];
  }

  filterChange = (e) => {
    this.props.filterCallback(e.target.value);
  }

  render() {
    return(
      <select data-filter-type="genre" onChange={this.filterChange}>
        {this.genres.map(function(genre) {
            return <option key={genre}>{genre}</option>
          }
        )}
      </select>
    )
  }
};