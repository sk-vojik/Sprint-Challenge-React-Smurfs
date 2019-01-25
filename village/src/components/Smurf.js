import React from 'react';
import "../App.css";

import { Link } from "react-router-dom"

const Smurf = props => {
  return (
    <Link to="/smurfs">
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>

    </div>
    </Link>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

