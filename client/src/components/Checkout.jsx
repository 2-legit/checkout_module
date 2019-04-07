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
      checkIn: 'Check In',
      checkOut: 'Check Out',
      guestCount: 1,
      showCalendar: false,
      toChange: true,
      listOpen: false,
      childrenCount: 0,
      infantCount: 0,
    };
  }

  setCheckIn(value) {
    const { toChange } = this.state;
    if (!toChange) {
      this.setState({ checkOut: value, showCalendar: false });
    } else {
      this.setState({ checkIn: value, showCalendar: false });
    }
  }

  addGuest() {
    const { guestCount, childrenCount } = this.state;
    const { room } = this.props;
    if ((guestCount + childrenCount) < room.guests) {
      this.setState({ guestCount: guestCount + 1 });
    }
  }

  subGuest() {
    const { guestCount } = this.state;
    if ((guestCount) > 1) {
      this.setState({ guestCount: guestCount - 1 });
    }
  }

  addChild() {
    const { guestCount, childrenCount } = this.state;
    const { room } = this.props;
    if ((guestCount + childrenCount) < room.guests) {
      this.setState({ childrenCount: childrenCount + 1 });
    }
  }

  subChild() {
    const { childrenCount } = this.state;
    if ((childrenCount) > 0) {
      this.setState({ childrenCount: childrenCount - 1 });
    }
  }

  addInfant() {
    const { infantCount } = this.state;
    if (infantCount < 5) {
      this.setState({ infantCount: infantCount + 1 });
    }
  }

  subInfant() {
    const { infantCount } = this.state;
    if (infantCount > 0) {
      this.setState({ infantCount: infantCount - 1 });
    }
  }

  chooseCheckIn() {
    this.setState({
      showCalendar: true,
      toChange: true,
    });
  }

  chooseCheckOut() {
    this.setState({
      showCalendar: true,
      toChange: false,
    });
  }

  showGuestList() {
    this.setState({
      listOpen: !this.state.listOpen,
    });
  }

  render() {
    const { isLoaded, room } = this.props;
    const {
      checkIn, checkOut, guestCount, showCalendar, listOpen, infantCount, childrenCount,
    } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <Wrapper>
        <div><Cost room={room} /></div>
        <div><Review room={room} /></div>
        <div><CheckInOut checkIn={checkIn} checkOut={checkOut} chooseCheckIn={this.chooseCheckIn.bind(this)} chooseCheckOut={this.chooseCheckOut.bind(this)} /></div>
        <div>{showCalendar ? <Calendar room={room} setCheckIn={this.setCheckIn.bind(this)} /> : <React.Fragment></React.Fragment>}</div>
        <div>
          <Guests
            infantCount={infantCount}
            showGuestList={this.showGuestList.bind(this)}
            listOpen={listOpen}
            guestCount={guestCount}
            childrenCount={childrenCount}
            addGuest={this.addGuest.bind(this)}
            subGuest={this.subGuest.bind(this)}
            addChild={this.addChild.bind(this)}
            subChild={this.subChild.bind(this)}
            addInfant={this.addInfant.bind(this)}
            subInfant={this.subInfant.bind(this)}
          />
        </div>
        <div><Book room={room} /></div>
      </Wrapper>
    );
  }
}


export default Checkout;
