import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import './profileCard.style.css';

class ProfileCard extends React.Component {
	render() {
		return (
			<div className="card">
				<Card>

					<Image src={this.props.avatar_url} wrapped ui={false} />
					<Card.Content>
						<Card.Header>
						<p className="font-style">Hello Everyone, I am  {this.props.login}</p>
						</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<Icon name="users" />
						Followers: {this.props.followers}
					</Card.Content>
					<Card.Content extra>
						<Icon name="user" />
						Following: {this.props.following}
					</Card.Content>
					<Card.Content extra>
						<Icon name="book" />
						public_repos: {this.props.public_repos}
					</Card.Content>
				</Card>
			</div>
		)
	}
}

export default ProfileCard;