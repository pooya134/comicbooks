import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }
  signUp()
  {
    console.log('this.state',this.state);
  }
  render() {
    return (
      <div className="login-form">
        <h3>Sign Up</h3>
        <input className ="form"
        type ="text"
        placeholder ="email"
        onChange = {event => this.setState({email: event.target.value})}
        />

        <p>
        <input className ="form"
        type ="password"
        placeholder ="password"
        onChange = {event => this.setState({password: event.target.value})}
        />
        </p>
        <p>
        <button className ="submit-button"
        type ="button"
        onClick = {() => this.signUp()}
        >
        submit
        </button>
        </p>
      </div>
    );
  }
}
export default Login;
