import React from 'react';
import '../../css/cardItem.css';
import { connect } from 'react-redux';
import hogwarts from '../../assets/svg/hogwarts.svg'

const CardItem = ({name}) => {
  return (
    <div className="card">
    <div className="cardInner">
      <div className="cardFront">
        <div className="circleCutOut">
          <div className="upperDiv">
    
          </div>
          <div className="lowerDiv">
              <p className="name">{name}</p>
          </div>
        </div>
      </div>
        <div className="cardBack">
          <img className="hogwarts" src={hogwarts} alt="hogwarts"/>
        <button className="button">READ MORE</button>
      </div>
    </div>
    </div>
  )
};

/*const mapStateToProps = (state) => {
  return {characters:state.characters}
  
  {console.log(props.characters)}
}*/

export default connect(null)(CardItem);
