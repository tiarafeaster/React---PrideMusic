import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function Browse(artist) {
  return (
    <div key={artist.id} className="col-md-4 m-1">
      <Card>
        <CardImg top width="100%" src={artist.image} alt={artist.name} />
        <CardBody>
          <CardTitle tag="h2">{artist.name}</CardTitle>
          <CardText>{artist.bio}</CardText>
          <CardText>{artist.pronouns}</CardText>
          <CardText>{artist.city}</CardText>
          <CardText>{artist.genre}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Browse;
