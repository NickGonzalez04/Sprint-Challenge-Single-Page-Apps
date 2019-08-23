import React from "react";
import { Card, Icon, Image} from 'semantic-ui-react';
//semantic UI card
export default function CharacterCard() {
  return (
  <Card>
    <Image src={char.image} wrapped ui={false}/>
    <Card.Content>
      <Card.Header>{char.name}</Card.Header>
      <Card.Meta>Data</Card.Meta>
      <Card.Description>{char.location}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
      </a>
    </Card.Content>
  </Card>
  );
}
