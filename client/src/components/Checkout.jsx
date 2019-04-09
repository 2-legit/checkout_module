import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
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
      currentCheckIn: moment(),
      latestCheckOut: moment().add(2, 'years'),
    };
    this.chooseCheckIn = this.chooseCheckIn.bind(this);
    this.chooseCheckOut = this.chooseCheckOut.bind(this);
    this.setCheckIn = this.setCheckIn.bind(this);
    this.showGuestList = this.showGuestList.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.subGuest = this.subGuest.bind(this);
    this.addChild = this.addChild.bind(this);
    this.subChild = this.subChild.bind(this);
    this.addInfant = this.addInfant.bind(this);
    this.subInfant = this.subInfant.bind(this);
  }

  setCheckIn(value) {
    const { toChange } = this.state;
    if (!toChange) {
      this.setState({ checkOut: value, showCalendar: false });
    } else {
      this.setState({ checkIn: value, showCalendar: false, currentCheckIn: value },
        () => this.checkLatestCheckout());
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
    if (guestCount > 1) {
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

  checkLatestCheckout() {
    const { currentCheckIn } = this.state;
    const { room } = this.props;
    let latestCoDate = 365;
    let checkOut;
    for (let i = 0; i < room.bookedDates.length; i += 1) {
      if (moment(currentCheckIn).isBefore(room.bookedDates[i], 'day')) {
        if (moment(room.bookedDates[i]).diff(currentCheckIn, 'days') < latestCoDate) {
          latestCoDate = moment(room.bookedDates[i]).diff(currentCheckIn, 'days');
          checkOut = room.bookedDates[i];
        }
      }
    }
    this.setState({
      latestCheckOut: checkOut,
    });
  }

  render() {
    const { isLoaded, room } = this.props;
    const {
      checkIn,
      checkOut,
      guestCount,
      showCalendar,
      listOpen,
      infantCount,
      childrenCount,
      currentCheckIn,
      latestCheckOut,
    } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <Wrapper>
        <div><Cost room={room} /></div>
        <div><Review room={room} /></div>
        <div>
          <CheckInOut
            checkIn={checkIn}
            checkOut={checkOut}
            chooseCheckIn={this.chooseCheckIn}
            chooseCheckOut={this.chooseCheckOut}
          />
        </div>
        <div>
          {showCalendar
            ? (
              <Calendar
                room={room}
                currentCheckIn={currentCheckIn}
                setCheckIn={this.setCheckIn}
                latestCheckOut={latestCheckOut}
              />
            )
            : <React.Fragment></React.Fragment>}
        </div>
        <div>
          <Guests
            infantCount={infantCount}
            showGuestList={this.showGuestList}
            listOpen={listOpen}
            guestCount={guestCount}
            childrenCount={childrenCount}
            addGuest={this.addGuest}
            subGuest={this.subGuest}
            addChild={this.addChild}
            subChild={this.subChild}
            addInfant={this.addInfant}
            subInfant={this.subInfant}
          />
        </div>
        <div><Book room={room} /></div>
      </Wrapper>
    );
  }
}


export default Checkout;
