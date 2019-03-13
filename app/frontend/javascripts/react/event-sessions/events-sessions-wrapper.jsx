import Axios from 'axios';
import React from "react";

export default class EventSessionsWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventData: [],
      dataLoaded: false
    }
    this._isMounted = false;
  }

  //Get data from mockaroo, add it to state
  getEvents = () => {
    this.setState({
      dataLoaded: false
    });
    Axios
      .get('https://my.api.mockaroo.com/fringe.json?key=482c6d90', {
        params: this.state.selectedFilters
      })
      .catch((error) => {
        console.log(error.response);
      })
      .then((response) => {
        if (this._isMounted) {
          this.setState({
            eventData: response.data,
            dataLoaded: true
          });
        }
      })
  }

  componentDidMount() {
    this._isMounted = true;
    this.getEvents();
  }

  renderSessionStatus = (data) => {
    if (data.availability === "available") {
      return <a href="#" className="button button__full">Get Tickets</a>
    } else if (data.availability === "sold-out") {
      return <p className="align__center">Sold out</p>
    } else if (data.availability === "cancelled") {
      return <p className="align__center">Cancelled</p>
    }
  }

  render() {
    return(
      <ul className="session--list">
        {this.state.eventData.map((data) =>
          <li key={data.key} className="session">
            <div className="session--image">
              <img src="https://source.unsplash.com/random/200x200" />
            </div>
            <div className="session--content">
              <div className="compressed">
                <h2 className="heading-six">
                  <a href="#">{data.title}</a>
                </h2>
                <p>{data.time} / {data.date}</p>
                <p>{data.venue}</p>
              </div>
            </div>
            <div className="session--action">
              {this.renderSessionStatus(data)}
            </div>
          </li>
        )}
      </ul>
    )
  }
};