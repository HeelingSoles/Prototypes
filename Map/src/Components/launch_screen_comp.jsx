import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBlock, CardTitle, CardSubtitle,
  CardText } from 'reactstrap';

import SimpleMap from './SimpleMap_comp';
import SearchBar from './search_bar_comp';

import './launch_screen_comp.css';

class LaunchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      searchTerm: '',
    };
  }

  locationSearch(term) {
    console.log(term);
  }

  render() {
    return (
      <Container fluid={ true }>
        <Row>
          <Container>
            <SearchBar onSearchTermChange={this.locationSearch}
              placeHolder='Search the US' />
          </Container>
        </Row>

        <Row>
          <Col sm={9}>
            <div className='mapContainer'>
              <SimpleMap />
            </div>
          </Col>

          <Col sm={3}>
            <Card>
              <CardImg top width="100%" src="https://heelingsolesorg.files.wordpress.com/2016/09/cropped-hs_logo1.png" alt="Card image cap" />
              <CardBlock>
                <CardTitle>Welcome!</CardTitle>
                <CardSubtitle>Can List Shoes here?</CardSubtitle>
                <CardText>....</CardText>
              </CardBlock>
            </Card>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default LaunchScreen;
