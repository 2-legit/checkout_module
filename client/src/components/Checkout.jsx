import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: block;
  box-sizing: border-box;
  width: 30%;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
  background-color: #ffffff !important;
  border: 1px solid #e4e4e4 !important;
  margin: 0px !important;
  padding-right: 24px !important;
  padding-left: 24px !important;
  text-align: center;
`;

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      rooms: [],
      isLoaded: false,
    };
  }

  componentWillMount() {
    fetch('/rooms/1/reservations') // hard coded TODO refactor to be dynamic
      .then(response => (
        response.json()
      ))
      .then((roomData) => {
        this.setState({
          isLoaded: true,
          rooms: roomData[0],
        });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <Wrapper>
        <div>{this.state.rooms[0].cost} per night</div>
        <div>{this.state.rooms[0].avg_review}avg reviews</div>
        <div>{this.state.rooms[0].reviews}reviews</div>
        <div>Dates</div>
        <div>{this.state.rooms[0].guests} guests</div>
        <div>Booked Button</div>
        <div>You are the best</div>
      </Wrapper>
    );
  }
}


export default Checkout;
