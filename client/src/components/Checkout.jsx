import React from 'react';
import styled from 'styled-components';
import Review from './Review';
import Cost from './Cost';
import Book from './Book';
import Calendar from './Calendar';
import CheckInOut from './CheckInOut';
import Guests from './Guests';


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
  constructor(props) {
    super(props);
    this.state = {
      checkIn: null,
      checkOut: null,
      guestCount: 1,
    };
  }

  setCheckIn(value) {
    if (this.state.checkIn) {
      this.setState({ checkOut: value });
    } else {
      this.setState({ checkIn: value });
    }
  }

  addGuest() {
    if (this.state.guestCount < this.props.room.guests) {
      this.setState({ guestCount: this.state.guestCount + 1 });
    }
  }

  subGuest() {
    console.log(this.state.guestCount)
    if (this.state.guestCount > 1) {
      this.setState({ guestCount: this.state.guestCount - 1 });
    }
  }

  render() {
    const { isLoaded, room } = this.props;
    const { checkIn, checkOut, guestCount } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <Wrapper>
        <div><Cost room={room} /></div>
        <div><Review room={room} /></div>
        <div><CheckInOut checkIn={checkIn} checkOut={checkOut} /></div>
        <div><Calendar room={room} setCheckIn={this.setCheckIn.bind(this)}/></div>
        <div><Guests guestCount={guestCount} addGuest={this.addGuest.bind(this)} subGuest={this.subGuest.bind(this)} /></div>
        <div><Book room={room} /></div>
      </Wrapper>
    );
  }
}


export default Checkout;
