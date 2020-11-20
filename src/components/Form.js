import React from 'react';
import './Form.css';

function Form({ info }) {
  const [troc, setTroc] = React.useState(false);

  const changeTroc = (e) => {
    setTroc(!troc);
  };

  return (
    <div className={troc ? 'card-on' : 'card-off'}>
      <p>{info.name} </p>
      <img src={info.picture} alt={info.name} className="img-form" />
      <button className="btn" onClick={changeTroc}>
        Propose this info
      </button>
    </div>
  );
}

export default Form;
