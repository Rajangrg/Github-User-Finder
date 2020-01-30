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
      github: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/example')
      .then(results => results.json())
      .then(data =>
        //console.log(data)
        this.setState({ github: data })

      );
  }

  render() {
    const { github } = this.state;
    return (
      <div>
        <Header>Github User Finder</Header>
        <div className="search">
          <Form>
            <Form.Group>
              <Form.Input placeholder="Github User" name="name" />
              <Form.Button content="Search" />
            </Form.Group>
          </Form>
        </div>

        {console.log(this.state.github.login)}

{/* {github.map(({
          login,
          followers,
          following,
          public_repos,
          avatar_url }) => (
          <ProfileCard


            login={login}
            followers={followers}
            following={following}
            public_repos={public_repos}
            avatar_url ={avatar_url}
            ></ProfileCard>
          ))}
 */}


      </div>

    );
  }
}



export default App;
