import React from 'react';

class LatLong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      headlines: []
    };
  }

  makeApiCall = () => {
    fetch(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New%20York"y=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            headlines: jsonifiedResponse.results
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }

  render() {

  }
}

export default LatLong;