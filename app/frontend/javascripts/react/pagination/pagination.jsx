import React from "react";

export default class Pagination extends React.Component {
  constructor(props){
    super(props);
  }

  setPage = (page) => {
    if (page > 1) {
      this.props.filterStrings(null, "page", page);
    } else {
      this.props.clearFilterType("page");
    }
  }

  render() {
    return(
      <div className="pagination">
        {[1,2,3,4].map((i) => 
          <span key={i} className="pagination--number" onClick={() => this.setPage(i)}>{i}</span>
        )}
      </div>
    )
  }
};