//Library
import React from 'react';
import { Form } from 'semantic-ui-react';
import {  Icon } from 'semantic-ui-react'
//css
import './App.css';
//components
import Header from './component/header/header.component';
import ProfileCard from './component/profileCard/profileCard.component'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      login: undefined,
      followers: undefined,
      following: undefined,
      public_repos: undefined,
      avatar_url: undefined,
      userInput: '',
      errorMessage: ''
    }
    this.handleSearchInput = this.handleSearchInput.bind(this) //gives access to this.handlechange
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/example`)
      .then(results => results.json())
      .then(data =>
        //console.log(data)
        this.setState({
          login: data.login,
          followers: data.followers,
          following: data.following,
          public_repos: data.public_repos,
          avatar_url: data.avatar_url
        })
      );
  }

  //search field event handler
  handleSearchInput = (action) => {
    this.setState({
      userInput: action.target.value
    })
    //console.log(action.target.value)
  }

  //form event handler
  handleSubmit(action) {
    action.preventDefault(); // dont send anythihg when load
    fetch(`https://api.github.com/users/${this.state.userInput}`)
      .then(results => results.json())
      .then(data =>
        //console.log(data)
     {  if(data.message){
      this.setState({
        errorMessage:'Sorry no user found'
      })
    }else{
     this.setState({
       login: data.login,
       followers: data.followers,
       following: data.following,
       public_repos: data.public_repos,
       avatar_url: data.avatar_url
     })
    }}
      );
    //after submit clear search input field
    this.setState({
      userInput: ' '
    })
  }

  render() {

    return (
      <div>
        <Header>Github User Finder</Header>
        <div className="search">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input placeholder="User Name" name="name" onChange={this.handleSearchInput} />
              <Form.Button content="Search" />
            </Form.Group>
          </Form>
        </div>
        {/* {console.log(this.state.avatar_url)} */}
        {this.state.errorMessage ? (<h2 className="error-message"><Icon name="github " />{this.state.errorMessage}	</h2>)
        : (<ProfileCard
          login={this.state.login}
          followers={this.state.followers}
          following={this.state.following}
          public_repos={this.state.public_repos}
          avatar_url={this.state.avatar_url}
        />)}
      </div>

    );
  }
}



export default App;
