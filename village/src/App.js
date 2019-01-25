import React, { Component } from 'react';
import axios from 'axios';
import { Route } from "react-router-dom"


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

//   name
// id
// age
// height
// key

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        this.setState({
          smurfs: res.data
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  }

  updateSmurfs(smurf) {
    axios
    .post("http://localhost:3333/smurfs", {...smurf})
    .then(res => {
      console.log(res);
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
 

  render() {
    return (
      <div className="App">

        <div className="container">
        <Route 
          className="smurf-form"
          path="/smurf-form"
          render={props => (
            <SmurfForm 
              {...props}
              updateSmurfs={this.updateSmurfs}
            />
          )}
        />
        

        <Route
          className="smurf-list"
          exact
          path="/"
          render={props => (
            <Smurfs 
              {...props}
              smurfs={this.state.smurfs} 
            />
          )}
        />
        </div>

      </div>
    );
  }
}

export default App;
