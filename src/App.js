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



// function App() {




//   const [name,setName] = useState();
//   const [userName,setUserName] = useState('');
//   const [followers,setFollowers] = useState('');
//   const [following, setFollowing] = useState('');
//   const [repos,setRepos] = useState('');
//   const [avatar, setAvatar] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [error,setError] = useState('');

//  useEffect(() => {
//   fetch("https://api.github.com/users/example")
//   .then(res =>res.json())
//   .then(data => {
//     //console.log(data);
//     setData(data)
//   })
//  }, [])

//  const setData = ({
//  name,
//  login,
//  followers,
//  following,
//  public_repos,
//  avatar_url
// }) => {
// setName(name);
// setUserName(login);
// setFollowers(followers);
// setFollowing(following);
// setRepos(public_repos);
// setAvatar(avatar_url);
//  }

//   return (
//     <div>
//       <Header>Github User Finder</Header>

//       <div className="search">
//         <Form>
//           <Form.Group>
//             <Form.Input placeholder="Github User" name="name" />
//             <Form.Button content="Search" />
//           </Form.Group>
//         </Form>
//       </div>

//    <div className="card">
//    <Card>
//     <Image src={avatar} wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>{name}</Card.Header>
//       <Card.Header>{userName}</Card.Header>
//     </Card.Content>
// <Card.content extra>
//   <a href>
//     <Icon name="user"/>
//     {followers} followers
//      </a>
// </Card.content>
// <Card.content extra>
//   <a href>
//     <Icon name="user"/>
//     {repos} Repos
//      </a>
// </Card.content>
// <Card.content extra>
//   <a href>
//     <Icon name="user"/>
//   {following} Following
//      </a>
// </Card.content>

//   </Card>
//    </div>
//     </div>

//   );
// }

export default App;
