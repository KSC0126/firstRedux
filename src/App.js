import React, { Component } from 'react';
import Componentone from  './Componentone';
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:"",
      email:"",
      mobile:"",
      user:{},
      userList:[],

    }
  }
  getName(event){
    this.setState({
      name: event.target.value
    }, () =>{

    });
  }
  getEmail(event){
    this.setState({
      email: event.target.value
    }, () =>{

    });
  }
  getPhone(event){
    this.setState({
      mobile: event.target.value
    }, () =>{

    });
  }
  registerUser(e){
    e.preventDefault();
    this.state.user['name'] = this.state.name;
    this.state.user['email'] = this.state.email;
    this.state.user['mobile'] = this.state.mobile;
    this.setState({
      user:this.state.user
    }, () => {
      this.state.userList.push(this.state.user)
    })

  }
  render() {
    return (
      <div className="App">
      <p> hello from app </p>
    <form onSubmit={this.registerUser.bind(this)}>
      <input type="text" value={this.state.name} onChange={this.getName.bind(this)}/>
      <input type="text" value={this.state.email} onChange={this.getEmail.bind(this)}/>
      <input type="text" value={this.state.mobile} onChange={this.getPhone.bind(this)}/>
      <button type="submit"> Register</button>
      </form>
      
      </div>
    );
  }
}

export default App;
