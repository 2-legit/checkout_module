import React from 'react';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      rooms: [],
    };
  }

  componentDidMount() {
    fetch('/rooms/1/reservations') //hard coded TODO refactor to be dynamic
      .then((response) => {
        return response.json();
      })
      .then((myJSON) => {
        this.setState({ rooms: (myJSON) });
      });
  }

  render() {
    return (
      <div>YOU ARE THE BEST</div>
    );
  }
}

export default Checkout;
