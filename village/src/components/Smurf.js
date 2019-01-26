import React from 'react';
import "../App.css";
import SmurfPage from "./SmurfPage"

import { Link, Route } from "react-router-dom"

const Smurf = props => {
  
  return (
    <div>
    <Link to={`/smurfs/${props.id}`}>
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>

    </div>
    </Link>

    <Route 
        path="/smurfs/:id"
        render={props => (
          <SmurfPage
           {...props}
          />
       )}  
    />

  </div>
  );

  
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

