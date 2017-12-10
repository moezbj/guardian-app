import React, { Component } from "react";
import Pagination from "react-js-pagination";
class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div>
      <Pagination
      pageRangeDisplayed={10}
  prevPageText='prev'
  nextPageText='next'
  firstPageText='first'
  lastPageText='last'
  activePage={this.state.activePage}
  itemsCountPerPage={10}
  totalItemsCount={45}
  onChange={this.handlePageChange}
/>
      </div>
    );
  }
}

export default Pages
