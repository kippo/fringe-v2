import React from "react";

export default class EventTileCompact extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="event-tile__compact">
        <div class="event-tile--image">
          <img src="https://source.unsplash.com/random/400x400" />
        </div>
        <h2>Circus Abyssinia: Ethiopian Dreams</h2>
        <p>Comedy</p>
      </div>
    )
  }
};