import React from "react";
import UserRating from "./user_rating.jsx";

export default class EventTileFullMobile extends React.Component {
  render() {
    return(
      <div className="event-tile__mobile">

        <div className="event-tile--header">
          <div className="event-tile--image-area">
            <button className="event-tile--favourite">F</button>
            <div>
              <img src="https://source.unsplash.com/random/300x300" />
            </div>
          </div>

          <div className="spacing-xxx-tight">
            <h2>
              <a href="#" className="heading-four">The amount of redundancy pay the</a>
            </h2>
            <div className="spacing-xxxxx-tight">
              <div className="genre__comedy"><strong>Comedy</strong></div>
              <div>Garden of Unearthly Delights</div>
              <div>21 July to 26th July</div>
            </div>
          </div>
        </div>

        <div>
          <div class="spacing-xxx-tight">
            <div>
              <p>Dave is single, stood with his mates at the bar, and is turning 30 next week. Eurydice is a mythical dryad - a tree nymph. This is a tale of impossible, death defying love; a tale of this world and the underworld; a tale of soul music and late night karaoke.</p>
            </div>
            <UserRating />
            <div>
              <p><strong>This event is <span>SOLD OUT</span></strong></p>
            </div>
          </div>
          <div className="event-tile--actions">
            <a href="#" className="button button__full">More info</a>
            <button className="button__secondary button__full">Event times</button>
          </div>
        </div>
        
      </div>
    )
  }

};