import React, { Component } from 'react';
import '../../css/landingPage.css';
import '../../css/logo.css';
import SearchBar from './SearchBar';
import PaginationComponent from './PaginationComponent';
import logo from '../../assets/svg/path6.svg';
import Cards from './Cards';


class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <div className="sideDisplay">
          <img src={logo} alt="HARRY POTTER LOGO" className="logo" />
          <div className=" form-div row d-flex justify-content-center">
            <SearchBar/>
          </div>
          <Cards />
          <div className="paginate-container row d-flex justify-content-center">
            <div className="">
              <PaginationComponent/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LandingPage;
