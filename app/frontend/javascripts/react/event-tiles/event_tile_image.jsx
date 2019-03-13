import React from "react";
import TinySlider from "tiny-slider-react";
import Favourite from "../favourite.jsx";

export default class EventTileImage extends React.Component {
  constructor(props){
    super(props);
    this.sliderSettings = {

    }
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    let images = [];
    for (let i = 0; i < this.props.eventData.imageCount; i++) {
      images.push("https://source.unsplash.com/random/375x375?sig=" + Math.random().toString().replace('0.', ''));
    }
    this.setState({images: images});
  }

  render() {
    return(
      <div className="event-tile--image">
        <Favourite {...this.props} />
        <div>
          <TinySlider settings={this.sliderSettings}>
            {this.state.images.map((image, index) =>
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