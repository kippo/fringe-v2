import React from "react";

class MultiSelectList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <div>
          <span onClick={this.props.backCallback}>Back</span>
          <span>{this.props.filterName}</span>
          <span>3 selected</span>
          <button>Clear</button>
        </div>
        <ul>
          {this.props.data ?
            this.props.data.map(i => {
              return(
                <li key={i}>
                  <span>{i}</span>
                </li>
              )
            }) 
          : "No filter selected"
        }
        </ul>
      </div>
    )
  }
};

export default MultiSelectList;