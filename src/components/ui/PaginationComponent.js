import React, { Component } from "react";
import Pagination from "react-js-pagination";
import {cardsPerPage } from '../pagesCalculate/pagesCalculate';
import { connect } from "react-redux";
import { fetchActivePage } from '../../actions';
require("bootstrap/scss/bootstrap.scss");

class PaginationComponent extends Component {
 
  handlePageChange(pageNumber) {
    this.props.fetchActivePage(pageNumber);
  }
 
  render() {
    console.log(this.props.activePage)
    return (
      <div>
        <Pagination
          activePage={this.props.activePage}
          itemsCountPerPage={cardsPerPage}
          totalItemsCount={this.props.activeCharacter}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    );
  };
};


const mapStateToProps = (state) => {
  return {
    activePage: state.activePage,
    activeCharacter:state.activeCharacter
  };
};


export default connect(mapStateToProps,
  {
    fetchActivePage,
  })(PaginationComponent);