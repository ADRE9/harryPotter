import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTerm } from '../../actions';
import '../../css/searchBar.css';


class SearchBar extends Component {

  onInputChange = (event) => {
    
    this.props.fetchTerm(event.target.value);
    
  };
  onFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    console.log(this.props.searchTerm);
    console.log(this.props.filteredChar);
    return (
      <div className="form-container">
        <form
          className="form"
          onSubmit={this.onFormSubmit}
        >
          <input
            className="input"
            type="text"
            value={this.props.searchTerm}
            onChange={this.onInputChange}
            placeholder="Search for Characters,Houses,Spells"
          />
        </form>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { searchTerm: state.term,characters:state.characters,};
};

export default connect(mapStateToProps, {
  fetchTerm,
})(SearchBar);