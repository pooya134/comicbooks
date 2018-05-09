import React, { Component } from 'react';
//import './Login.css';
import Comicbook from './Comicbook';
import './style_newsfeeds.css'
class Newsfeed extends Component {
  constructor() {
    super();
    this.state = { comics: [] };
  }
  componentDidMount(){
    fetch('/api/newsfeed')
      .then(result => result.json())
      .then(json => {this.setState({comics:json});
    });
   }
  render() {
    return (
      <div>
          <header>
            <div className = "top_header"></div>
       
          </header>
      <div className = "top-menu">
             <nav>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Comic Search</a></li>
                <li><a href="">User Profile</a></li>
              </ul>
            </nav>

      </div>

      <div className="login-form">
      <h3>Sign in</h3>
        <p1>
        <input className ="form"
        type ="text"
        placeholder ="email"
        //onChange = {event => this.setState({email: event.target.value})}
        />
        </p1>
        <p2>
        <input className ="form"
        type ="password"
        placeholder ="password"
        //onChange = {event => this.setState({password: event.target.value})}
        />
        </p2>
        <p3>
        <button className ="submit-button"
        type ="button"
        //onClick = {() => this.signUp()}
        >
        Sign Up
        </button>
        </p3>
        <p4>
        <button className = "sign-in"
        type = "button"
        >
        Sign in
        </button>
        </p4>
        </div>
        <div className = "newspage">
        <ul>
          {this.state.comics.map(comics => {
            return <Comicbook comics= {comics}/>;
          })}
        </ul>
      </div>
    </div>
    );
  }
}
export default Newsfeed;
