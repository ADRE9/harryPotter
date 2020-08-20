import React from 'react';
import '../../css/cardItem.css';
import { connect } from 'react-redux';
import hogwarts from '../../assets/svg/hogwarts.svg';

const CardItem = ({name}) => {
  return (
    <div className="cardItem">
      <div className="card-inner">
        <div className="card-front">
          <div className="image">
          </div>
          <div className="name-container">
            <p className="name">
              {name}
            </p>
          </div>
        </div>
        <div className="card-back">
          <img
            className="hogwarts"
            src={hogwarts} alt="quiditch" />
          <button className="read-more-button">
            <p className="read-more">
              Read More
            </p>
          </button>
        </div>
      </div>
    </div>
  )
};

export default connect(null)(CardItem);
