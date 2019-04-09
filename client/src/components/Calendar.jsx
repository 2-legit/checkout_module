import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Months from './Months';
import Days from './Days';

const CalendarWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
    };
  }


  setNextMonth() {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).add(1, 'month');
    this.setState({
      dateObject: dateObject,
    });
  }

  setPrevMonth() {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).add(-1, 'month');
    this.setState({
      dateObject: dateObject,
    });
  }

  firstDayOfMonth() {
    const dateObject = this.state.dateObject;
    const firstDay = moment(dateObject).startOf('month').format('d');
    return firstDay;
  }

  totalDaysInMonth() {
    return this.state.dateObject.daysInMonth();
  }

  currentMonth() {
    return this.state.dateObject.format('MMMM');
  }

  currentYear() {
    return this.state.dateObject.format('YYYY');
  }

  render() {
    return (
      <CalendarWrapper>
        <div>
          <Months
            currentMonth={this.currentMonth.bind(this)}
            currentYear={this.currentYear.bind(this)}
            setNextMonth={this.setNextMonth.bind(this)}
            setPrevMonth={this.setPrevMonth.bind(this)}
          />
          <Days
            firstDayOfMonth={this.firstDayOfMonth.bind(this)}
            totalDaysInMonth={this.totalDaysInMonth.bind(this)}
            setCheckIn={this.props.setCheckIn}
            setCheckOut={this.props.setCheckOut}
            room={this.props.room}
            dateObject={this.state.dateObject}
            currentCheckIn={this.props.currentCheckIn}
            latestCheckOut={this.props.latestCheckOut}
          />
        </div>
      </CalendarWrapper>
    );
  }
}

export default Calendar;
