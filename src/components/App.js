import React, { Component } from 'react';
import '../css/app.css';
import LandingPage from './ui/LandingPage';
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
        <LandingPage/>
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
