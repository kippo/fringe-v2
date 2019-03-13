import React from "react";
import EventTileImage from "./event_tile_image.jsx";
import UserRating from "../user_rating.jsx";
import Modal from "react-modal";

export default class EventTileFullDesktop extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    }
  }

  handleModal = () => {
    this.setState(
      {modalOpen: !this.state.modalOpen}
    );
  }

  render() {
    return(
      <React.Fragment>
        <div className="event-tile__desktop">
          <div className="event-tile--image-area">
            <EventTileImage eventData={this.props.eventData} />
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
            <UserRating {...this.props} />
          </div>
          <div className="event-tile--aside">
            <div className="event-tile--actions">
              <a href="#" className="button button__full">More info</a>
              <button className="button__secondary button__full" onClick={this.handleModal}>Event times</button>
            </div>
            <div className="event-tile--promotions spacing-xxxx-tight">
              {this.props.eventData.hotshow && 
                <div className="type--small">
                  <strong className="type--hot-show">Hot show</strong> - Selling out fast
                </div>
              }
              {this.props.eventData.fringemember && 
                <div className="type--small">
                  <strong className="type--member">Discount</strong> - Fringe member pricing available
                </div>
              }
            </div>
          </div>
        </div>
        {this.state.modalOpen &&
          <Modal 
            isOpen={this.state.modalOpen}
            onRequestClose={this.handleModal}
            style={{
              overlay: {
                zIndex: 10
              },
              content: {
                maxWidth: "600px",
                margin: "0 auto"
              }
            }}
          >
            {this.props.eventData.title}
            <div>Upcoming sessions</div>
            <ul>
              <li>
                21 Dec
                12:30 PM
                Garden of Unearthly Delights
              </li>
            </ul>
          </Modal>
        }
      </React.Fragment>
    )
  }

};