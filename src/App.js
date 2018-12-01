import React, { Component } from 'react';
//connect in redux store allows you to you use redux on that js page  
import { connect } from 'react-redux';
//import all actions 
import * as actions from './actions';
import '.App.css';
class App extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.updateName(this.state.name)
  }


render() {
  console.log(this.props);
  return (
    <div className="App">
      <form onSubmit={this.onSubmit}>
        <input type='text' name='name' onChange={(e) => this.props.updateName(e.target.value)} />
        <button type='submit' onClick={this.onSubmit}>Submit</button>
      </form>
    </div>
  );
}
}
const mapStateToProps = (state) => {
  return {
    ...state 
  }
}
export default connect(mapStateToProps, actions)(App);
