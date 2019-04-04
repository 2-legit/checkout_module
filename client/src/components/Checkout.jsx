import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Review from './Review';
import Cost from './Cost';
import Book from './Book';


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  padding-right: 24px;
  padding-left: 24px;
  width: 376px;
`;

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      room: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    axios.get('/rooms/1/reservations') // hard coded TODO refactor to be dynamic
      .then(response => (
        response.data
      ))
      .then((roomData) => {
        this.setState({
          isLoaded: true,
          room: roomData[0],
        });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <Wrapper>
        <div><Cost room={this.state.room[0]}/></div>
        <div><Review room={this.state.room[0]}/></div>
        <div><Book room={this.state.room[0]}/></div>
      </Wrapper>
    );
  }
}


export default Checkout;
