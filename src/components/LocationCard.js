import React from "react";
import {Card} from 'semantic-ui-react';
import { locale } from "core-js";

export default function LocationCard({loc}) {
  return (
    <Card>
      <Card.Content>
          <Card.Header>{loc.name}</Card.Header>
          <Card.Meta>{loc.type}</Card.Meta>
          <Card.Meta>{locale.dimension}</Card.Meta>
          <Card.Description>{loc.residents}}</Card.Description>
      </Card.Content>
    </Card>

  );
}
