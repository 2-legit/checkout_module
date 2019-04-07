import React from 'react';
import axios from 'axios';
import Checkout from './Checkout';

class ConnectedCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      room: [],
    };
  }

  componentDidMount() {
    const roomId = window.location.pathname.split('/')[2]; // TODO Write in helper file
    axios.get(`/rooms/${roomId}/reservations`)
      .then(response => (
        response.data
      ))
      .then((roomData) => {
        this.setState({
          isLoaded: true,
          room: roomData,
        });
      });
  }

  render() {
    return <Checkout {...this.state} />;
  }
}

export default ConnectedCheckout;
