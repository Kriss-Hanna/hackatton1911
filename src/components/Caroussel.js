import React from 'react';
import './Caroussel.css';

function Caroussel() {
  return (
    <div className="slider">
      <div className="slides">
        <div className="slide">
          <img classsrc="./img/images1.jpeg" alt="echange" />
        </div>
        <div className="slide">
          <img src="./img/images4.jpeg" alt="img moyen age" />
        </div>
        <div className="slide">
          <img src="./img/images3.jpeg" alt="change poisson" />
        </div>
      </div>
    </div>
  );
}

export default Caroussel;
