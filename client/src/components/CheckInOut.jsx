import React from 'react';
import styled from 'styled-components';

const CheckInOutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #e4e4e4;
  height: 36px;
  margin-bottom: 25px;
`;

const DateWrapper = styled.div`
  display: flex;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  color: rgb(72, 72, 72) !important;
`;

const CheckInOutButton = styled.div`
  display: flex;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px !important;
  color: rgb(216, 216, 216) !important;
  font-weight: 600 !important;
  border: none;
`;

const CheckInOutDate = styled(CheckInOutButton)`
  display: flex;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px !important;
  color: rgb(72, 72, 72) !important;
  font-weight: 600 !important;
`;

const CheckInOut = (props) => {
  const { checkIn, checkOut } = props;
  return (
    <div>
      <DateWrapper>
        Dates
      </DateWrapper>
      <CheckInOutWrapper>
        <CheckInOutButton onClick={() => props.chooseCheckIn()}>
          <CheckInOutDate>{checkIn}
            &nbsp;
          </CheckInOutDate>
          -&gt;&nbsp;
        </CheckInOutButton>
        <CheckInOutButton onClick={() => props.chooseCheckOut()}>
          <CheckInOutDate>{checkOut}</CheckInOutDate>
        </CheckInOutButton>
      </CheckInOutWrapper>
    </div>
  );
};

export default CheckInOut;
