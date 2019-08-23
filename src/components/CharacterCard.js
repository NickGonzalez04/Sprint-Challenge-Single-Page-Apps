import React from "react";
import { Card, Icon, Image} from 'semantic-ui-react';
//semantic UI card
export default function CharacterCard({ url, name, species, gender, location  }) {
  return (
  <Card>
    <Image src={url} wrapped ui={false}/>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{species}</Card.Meta>
      <Card.Meta>{gender}</Card.Meta>
      <Card.Description>{location}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
      </a>
    </Card.Content>
  </Card>
  );
}
