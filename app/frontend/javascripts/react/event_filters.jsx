import React from "react";

export default class EventFilters extends React.Component {
  constructor(props){
    super(props);
    this.genres = ["all", "comedy", "drama", "circus", "cabaret"];
  }

  filterChange = (e) => {
    this.props.filterCallback(e.target.value);
  }

  render() {
    return(
      <select value={this.props.currentGenre} onChange={this.filterChange}>
        {this.genres.map(function(genre) {
            return <option key={genre}>{genre}</option>
          }
        )}
      </select>
    )
  }
};