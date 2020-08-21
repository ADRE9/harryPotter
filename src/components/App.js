import React, { Component } from 'react';
import '../css/app.css';
import LandingPage from './ui/LandingPage';
import Footer from './ui/Footer';
import { connect } from "react-redux";
import { fetchCharacters } from '../actions';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchCharacters();
   };
  render() {
    console.log(this.props.characters);
    return (
      <div className='App'>
        
        <div>
        <LandingPage />
        </div>
        <div>
          <Footer/>
        </div>
        
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {characters:state.characters}
};

export default connect(mapStateToProps,
  { fetchCharacters, })
  (App);
