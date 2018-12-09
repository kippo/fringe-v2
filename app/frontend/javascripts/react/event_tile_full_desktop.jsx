import React from "react";
import UserRating from "./user_rating.jsx";
import Favourite from "./favourite.jsx";

export default class EventTileFullDesktop extends React.Component {
  render() {
    return(
      <div className="event-tile__desktop">
        <div className="event-tile--image-area">
          <Favourite />
          <div>
            <div>
              <img src={"https://source.unsplash.com/random/300x300?sig=" + this.props.eventData.key} />
            </div>
          </div>
        </div>
        <div className="event-tile--content spacing-xxx-tight">
          <h2>
            <a href="#" className="heading-five">{this.props.eventData.title}</a>
          </h2>
          <div className="spacing-xxxxxx-tight">
            <div className="genre__comedy"><strong>{this.props.eventData.genre}</strong></div>
            <div>{this.props.eventData.venue}</div>
            <div>21 July to 26th July</div>
          </div>
          <div>
            {this.props.eventData.description}
          </div>
          <UserRating />
        </div>
        <div className="event-tile--aside spacing-xx-tight">
          <div className="event-tile--actions spacing-xxxxx-tight">
            <a href="#" className="button button__full">More info</a>
            <button className="button__secondary button__full">Event times</button>
          </div>
          <div className="event-tile--promotions spacing-xxxx-tight">
            {this.props.eventData.hotshow && 
              <div className="type--small text__center">
                <strong className="type--hot-show">Hot show</strong> - Selling out fast
              </div>
            }
            {this.props.eventData.fringemember && 
              <div className="type--small text__center">
                <strong className="type--member">Discount</strong> - Fringe member pricing available
              </div>
            }
          </div>
        </div>
      </div>
    )
  }

};