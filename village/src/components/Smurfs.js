import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import "../App.css";


import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1 className="title">Smurf Village</h1>
        <div className="smurf-form-link">
          <NavLink  to="/smurf-form">Add a smurf!</NavLink>
        </div>
        <ul className="smurf-list">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
        
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
