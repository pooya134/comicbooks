import React, { Component } from 'react';
//import './Login.css';
import Comicbook from './Comicbook';
import './style_newsfeeds.css';
import sign_up from './sign_up';

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
                <li><a href="./sign_up">Comic Search</a></li>
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
        <button className ="sign_up"
        type ="button"
        onClick = {() => this.sign_up()}
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
          <div id = "container">

           <div id= "right">

            <p5>
              <input className = "search" type = "text" placeholder = "Title"/>
            </p5>
            <p6>
              <input className = "search" type = "text" placeholder = "Author"/>
            </p6>
            <p7>
              <input className = "search" 
               type = "text" placeholder = "Illustrator"/>
            </p7>
            <p8>
              <input className = "search" 
               type = "text" placeholder = "Publisher"/>
            </p8>
            <p9>
            <input className = "search" 
               type = "text" placeholder = "Volume"/>
            </p9>
            <p10>
              <button className ="search"
              type ="button" Search>
              </button>
            </p10>
           </div>

           <div id = "left">
            <ul>
              {this.state.comics.map(comics => {
              return <Comicbook comics= {comics}/>;
              })}
            </ul>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
export default Newsfeed;
