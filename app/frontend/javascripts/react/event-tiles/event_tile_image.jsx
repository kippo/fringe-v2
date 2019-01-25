import React from "react";
import TinySlider from "tiny-slider-react";
import Favourite from "../favourite.jsx";

export default class EventTileFullDesktop extends React.Component {
  constructor(props){
    super(props);
    this.sliderSettings = {

    }
    this.images = [];
  }

  componentDidMount() {
    for (let i = 0; i < this.props.eventData.imageCount; i++) {
      this.images.push("https://source.unsplash.com/random/300x300?sig=" + Math.random().toString().replace('0.', ''));
    }
  }

  render() {
    return(
      <div className="event-tile--image">
        <Favourite {...this.props} />
        <div>
          <TinySlider settings={this.sliderSettings}>
            {this.images.map((image, index) =>
              <div key={index}>
                <img src={image} />
              </div>
            )}
          </TinySlider>
        </div>
      </div>
    )
  }

};