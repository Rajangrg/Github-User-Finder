import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import './profileCard.style.css';

const ProfileCard = ({
	login,
	followers,
	following,
	public_repos,
	avatar_url}) => (
	<div className="card">
		<Card>
			<Image src={avatar_url} wrapped ui={false} />
			<Card.Content>

				<Card.Header>{login}</Card.Header>
			</Card.Content>
			<Card.content extra>
				<a href>
					<Icon name="user" />
					{followers} followers
		</a>
			</Card.content>
			<Card.content extra>
				<a href>
					<Icon name="user" />
					{public_repos} Repos
		</a>
			</Card.content>
			<Card.content extra>
				<a href>
					<Icon name="user" />
					{following} Following
		</a>
			</Card.content>

		</Card>
	</div>
)

export default ProfileCard;