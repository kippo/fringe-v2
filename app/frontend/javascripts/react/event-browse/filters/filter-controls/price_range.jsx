import React from "react";

export default class PriceRange extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <div>
          <span>3 selected</span>
          <button>Clear</button>
        </div>
        <div>
          <select>
            <option>Foo</option>
          </select>
        </div>
      </div>
    )
  }
};