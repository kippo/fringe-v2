import React from "react";

export default class EventFilters extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <ul className="spacing-xxxxxx-tight">
        {this.rating.map(rating =>
          <li key={rating}>
            <label>
              <input 
                type="checkbox" 
                name="rating" 
                value={rating} 
                checked={this.checkCheckbox('rating', rating)}
                onChange={this.filterArrays}
              /> 
              {rating}
            </label>
          </li>
        )}
      </ul>
    )
  }
};