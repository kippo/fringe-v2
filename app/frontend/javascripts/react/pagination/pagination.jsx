import React from "react";

export default class Pagination extends React.Component {
  constructor(props){
    super(props);
  }

  setPage = (e) => {
    e.target.value > 1 ? this.props.filterStrings(e) : this.props.clearFilterType(e.target.name);
  }

  createPages = () => {
    let totalPages = Math.ceil(this.props.totalResults/this.props.selectedFilters.pagesize);
    let pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  render() {
    let  pagesArray = this.createPages();

    return(
      <div className="pagination">
        {pagesArray.map((i) => 
          +this.props.selectedFilters.page !== i && (i !== 1 || "page" in this.props.selectedFilters) ?
            <button key={i} name="page" value={i} className="pagination--number" onClick={this.setPage}>{i}</button>
          :
            <div key={i} name="page" value={i} className="pagination--number pagination--number__active">{i}</div>
        )}
      </div>
    )
  }
};