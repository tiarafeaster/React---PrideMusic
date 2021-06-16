import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardDeck,
} from "reactstrap";

function Home() {
  return (
    <CardDeck>
      <Card>
        <CardImg
          top
          width="100%"
          src="assets/images/notes1.jfif"
          alt="music notes picture"
        />
        <CardBody>
          <CardTitle tag="h5">Who We Are </CardTitle>
          <CardText>
            I'm baby tattooed gentrify +1 fam edison bulb lumbersexual. Kogi
            vice letterpress photo booth wayfarers retro. Drinking vinegar retro
            paleo, franzen salvia fam health goth hexagon 8-bit tacos mustache.
            Lyft cray air plant ramps shaman blog, truffaut plaid taxidermy cred
            brooklyn iPhone XOXO subway tile fashion axe.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="assets/images/notes2.png"
          alt="another picture of music notes"
        />
        <CardBody>
          <CardTitle tag="h5">What We Do</CardTitle>
          <CardText>
            Farm-to-table air plant seitan af live-edge lo-fi pug vaporware
            flexitarian before they sold out 90's chartreuse. Taiyaki keffiyeh
            church-key next level, prism shoreditch sriracha whatever scenester
            brooklyn. Leggings iPhone edison bulb gastropub ramps hashtag paleo
            affogato photo booth, 90's kombucha before they sold out hexagon.
            90's XOXO pug roof party truffaut butcher, heirloom celiac
            mumblecore hashtag.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="assets/images/notes3.jfif"
          alt="and another picture of music notes"
        />
        <CardBody>
          <CardTitle tag="h5">Why We Do It</CardTitle>
          <CardText>
            Poutine letterpress shaman lumbersexual small batch tumeric kogi put
            a bird on it roof party humblebrag pok pok literally forage
            asymmetrical. Jean shorts cred etsy knausgaard, lomo gluten-free pok
            pok neutra microdosing la croix stumptown beard. Banh mi thundercats
            cray mixtape freegan portland. Wayfarers shaman neutra, air plant
            skateboard copper mug four loko tumblr paleo four dollar toast.
          </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
}

export default Home;
