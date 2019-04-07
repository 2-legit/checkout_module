import React from 'react';
import styled from 'styled-components';

const MonthWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  color: rgb(72, 72, 72) !important;
  font-size: 18px !important;
  text-align: center !important;
  font-weight: bold;
`;

const Months = (props) => {
  return (
    <MonthWrapper>
      <button type="button" onClick={() => (props.setPrevMonth())}>&lt;</button>
      <div>
        &nbsp;
        {props.currentMonth()}
        &nbsp;
        {props.currentYear()}
        &nbsp;
      </div>
      <button type="button" onClick={() => (props.setNextMonth())}>&gt;</button>
    </MonthWrapper>
  );
};

export default Months;
