import React, { Component } from 'react';
import { Container } from 'reactstrap';

import SearchBar from './search_bar_comp';

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
      <Container>
        <SearchBar onSearchTermChange={this.locationSearch}
          placeHolder='Search the US' />
      </Container>
    );
  }
}

export default LaunchScreen;
