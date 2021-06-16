import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Browse from "./BrowseAndBook";
import ArtistsPage from "./ArtistsPage";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { ARTISTS } from "../shared/artists";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: ARTISTS,
      selectedArtist: null,
    };
  }
  onArtistSelect(artistId) {
    this.setState({ selectedArtist: artistId });
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/">Pride Music</NavbarBrand>
          </div>
        </Navbar>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default Main;
