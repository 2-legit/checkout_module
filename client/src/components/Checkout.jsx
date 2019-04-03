import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Review from './Review';

const Wrapper = styled.section`
  display: block;
  box-sizing: border-box;
  width: 30%;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  margin: 0px;
  padding-right: 24px;
  padding-left: 24px;
  text-align: center;
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
        <div>{this.state.room[0].cost} per night</div>
        <div><Review room={this.state.room[0]}/></div>
        <div>Dates</div>
        <div>{this.state.room[0].guests} guests</div>
        <div>Booked Button</div>
      </Wrapper>
    );
  }
}


export default Checkout;
