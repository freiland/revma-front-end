import React from 'react';

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      location: {latitude:'', longitude:''}
    };
  }

  makeApiCall = () => {
    fetch("https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New%20York", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7043bd60e6msh017de187a06b311p16fbfejsn6f5cf5064028",
		"x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com"
	}
})
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            cities: jsonifiedResponse.results
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }

  componentDidMount() {
    this.makeApiCall()
  }

  render() {
    const { error, isLoaded, location } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>cities</h1>
          <ul>
            {locations.map((latitude, longitude, index) =>
              <li key={index}>
                <h3>{cities[0].name}</h3>
                <p>{cities[0].lat}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Headlines;
  
