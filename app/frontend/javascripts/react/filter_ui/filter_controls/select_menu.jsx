import React from "react";

export default class SelectMenu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <div>
          <span onClick={this.props.backCallback}>Back</span>
          <span>Select</span>
          <span>3 selected</span>
          <button>Clear</button>
        </div>
        <div>
          {this.props.data.map(i => {
              return(
                <div>
                  <label>{i.label}</label>
                  <select>
                    {i.data.map(i => {
                      return <option>{i}</option>
                    })}
                  </select>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
};