import React from "react";

export default class VenueSearch extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <div>Venue</div>
        <div>
          <input type="text"></input>
          <ul>
            {this.props.data.map(i => {
                return(
                  <li key={i}>
                    <span>{i}</span>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>     
    )
  }
};