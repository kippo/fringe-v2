import React from "react";

class MultiSelectList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <div>
          {this.props.isMobile ? 
            <div>
              <span onClick={this.props.backCallback}>Back</span>
              <span>{this.props.filterName}</span>
            </div>
            :<span>3 selected</span>
          }
          <button>Clear</button>
        </div>
        <ul>
          {this.props.data.map(i => {
            return(
              <li key={i}>
                <span>{i}</span>
                <input 
                  type="checkbox" 
                  name={this.props.filterType} 
                  value={i}
                  onChange={this.props.filterArrays}
                /> 
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
};

export default MultiSelectList;