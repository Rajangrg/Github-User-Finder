//Library
import React from 'react';
import { Form } from 'semantic-ui-react';
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

    }

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


  render() {

    return (
      <div>
        <Header>Github User Finder</Header>
        <div className="search">
          <Form  >
            <Form.Group>
              <Form.Input placeholder="Github User" name="name"  />
              <Form.Button content="Search" />
            </Form.Group>
          </Form>
        </div>
        {/* {console.log(this.state.avatar_url)} */}
        <ProfileCard
          login={this.state.login}
          followers={this.state.followers}
          following={this.state.following}
          public_repos={this.state.public_repos}
          avatar_url={this.state.avatar_url}
        />
      </div>

    );
  }
}



export default App;
