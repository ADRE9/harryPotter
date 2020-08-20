import React, { Component } from 'react';
import CardItem from './CardItem';
import PaginationComponent from './PaginationComponent';
import { connect } from 'react-redux';
import { fetchActiveCharacter } from '../../actions';
import '../../css/cards.css';

class Cards extends Component {

  componentDidUpdate() {
    
  }


  render() {
    if (this.props.characters.length===195) {
      const filteredCard = this.props.characters.filter((character) => {
        return character.name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1;
      });

      this.props.fetchActiveCharacter(filteredCard.length);

      const sliceStart = (this.props.activePage - 1) * 8;
      const sliceEnd = (this.props.activePage * 8);

      const card = filteredCard.slice(sliceStart, sliceEnd).map(card => {
        return <CardItem key={card._id} name={card.name}/>
      });
      
      return (
        <div className="card-grid">
          {card}
        </div>
      );

    } else {
      return (
        <div>
          {console.log(this.props.characters)}
          LOADING...
        </div>
      );
    };
  }
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters, searchTerm: state.term,
    activePage: state.activePage,
  }
};

export default connect(mapStateToProps,{fetchActiveCharacter})(Cards);
