import React from "react";

export default class EventFilters extends React.Component {
  constructor(props){
    super(props);
    this.genres = ["All", "Comedy", "Drama", "Circus", "Cabaret"]
  }

  render() {
    return(
      <select>
        {this.genres.map(function(genre) {
            return <option>{genre}</option>
          }
        )}
      </select>
    )
  }
};