import React from "react";

class MultiSelectList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <div>Genres</div>
        <div>
          <div>
            <span>3 selected</span>
            <button>Clear</button>
          </div>
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

export default MultiSelectList;