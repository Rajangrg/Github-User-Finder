import React from 'react';
import { Form } from 'semantic-ui-react';
import { Card, Icon, Image } from 'semantic-ui-react'

import './App.css';
//components
import Header from './component/header/header.component';

function App() {
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

      <Card>
    <Image src='/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>

  </Card>
    </div>

  );
}

export default App;
