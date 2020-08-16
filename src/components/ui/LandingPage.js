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
          <img src={logo} alt="HARRY POTTER LOGO" className="logo"/>
          <SearchBar />
          <Cards />
          <div className="row paginate justify-content-center
          align-content-center mt0">
            <PaginationComponent />
          </div>
        </div>
      </div>
    )
  }
}
export default LandingPage;
